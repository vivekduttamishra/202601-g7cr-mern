/**
 * 1. THE REDUCER FACTORY
 */
export function createReducer(initialData, map) {
    const initialState = {
        ...initialData,
        status: 'IDLE',
        error: null,
    };

    // Mapping system actions to avoid switch/if-else blocks
    const finalMap = {
        'SYSTEM/STATUS': (state, action) => ({ ...state, status: action.payload }),
        'SYSTEM/ERROR': (state, action) => ({ ...state, error: action.payload }),
        'SYSTEM/RESET': () => ({ ...initialState }),
        ...map
    };

    const reducer = (state = initialState, action) => {
        const handler = finalMap[action.type];
        // Standard Redux-style lookup
        return handler ? handler(state, action) : state;
    };

    return [reducer, initialState ];
}

/** * 2. THE REFACTORED DISPATCHER FACTORY
 */
export function createDispatcher(dispatch, globalMiddlewares = []) {
    
    return function (type, service) {
        return async function (...params) {
            const ctx = { type, params };
            
            const setStatus = (s) => dispatch({ type: 'SYSTEM/STATUS', payload: s });
            const setError = (e) => dispatch({ type: 'SYSTEM/ERROR', payload: e });

            try {
                // Execute Global onBefore
                globalMiddlewares.forEach(m => m.onBefore?.(ctx));
                
                setStatus('LOADING');
                setError(null);

                // Check for global delays (takes the maximum delay found)
                const delays = globalMiddlewares.map(m => m.delay || 0);
                const maxDelay = Math.max(0, ...delays);
                
                if (maxDelay > 0) {
                    await new Promise(r => setTimeout(r, maxDelay));
                }

                const result = await service(...params);
                
                // Execute Global onAfter
                globalMiddlewares.forEach(m => m.onAfter?.(ctx, result));
                
                setStatus('DONE');
                dispatch({ type, payload: result });
                return result; 
            } catch (err) {
                // Execute Global onCatch
                globalMiddlewares.forEach(m => m.onCatch?.(ctx, err));
                
                setStatus('ERROR');
                setError(err);
                throw err; 
            }
        };
    };
}