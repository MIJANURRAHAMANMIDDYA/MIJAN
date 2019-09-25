//Memoization is a programming technique which attempts to increase a function’s performance by
// caching its previously computed results. Because JavaScript objects behave like associative arrays, 
//they are ideal candidates to act as caches. Each time a memoized function is called, its parameters
// are used to index the cache. If the data is present, then it can be returned, without executing the entire function.  However, 
//if the data is not cached, then the function is executed, and the result is added to the cache.
function fibonacci(n,memo) {
    memo = memo || {}
    if (memo[n]) {
        return memo[n]
    }
    if (n <= 1) {
        return 1
    }
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
}
console.log(fibonacci(6));