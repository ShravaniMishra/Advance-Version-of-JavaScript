function Addition(a){
    return function(b){
        return function(c){
            return (a+b+c)
        }
    }
}
console.log(Addition(2)(4)(6))