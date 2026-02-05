
type CaseFunction<E> = (context:E, params:any)=>any

type CaseInfo<E> = {
    context: E,
    action : CaseFunction<E>
}

export class Switch<T>{
    cases:CaseInfo<T>[]=[]
    defaultCase?:CaseFunction<T>;

    addCase(context:T, action:CaseFunction<T>){
        if(this.cases.find(c=>c.context===context))
            throw new Error(`Duplicate Case : ${context}`)
        this.cases.push({context,action});        
        return this;
    }

    addDefault(action:CaseFunction<T>){
        this.defaultCase=action;
    }

    execute(context:T){
        let x = this.cases.find(c=>c.context===context)
        if (x)
            return x.action(context,null);
        else if(this.defaultCase)
            return this.defaultCase(context,null);
        else
            throw new Error(`Invalid Case : ${context}`)
        
    }
}