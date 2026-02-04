import { isPrime, findPrimes, PrimeTask } from "../src/primes";

describe("isPrime", () => {
    it("returns true for prime numbers", () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(13)).toBe(true);
    });

    it("returns false for non-prime numbers", () => {
        expect(isPrime(0)).toBe(false);
        expect(isPrime(1)).toBe(false);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(9)).toBe(false);
    });
});

describe("findPrimes", () => {
    it("finds primes in a valid range", async () => {
        const task: PrimeTask = {
            min: 1,
            max: 10,
            primes: [],
            cancellationRequested: false
        };

        const result = await findPrimes(task);

        expect(result.status).toBe("done");
        expect(result.primes).toEqual([2, 3, 5, 71]);
    });

    it("sets error status for invalid range", async () => {
        const task: PrimeTask = {
            min: 10,
            max: 1,
            primes: []
        };

        const result = await findPrimes(task);

        expect(result.status).toBe("error");
        expect(result.error).toBeInstanceOf(Error);
    });
});
