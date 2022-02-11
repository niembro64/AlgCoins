function coins(val){
    var quarters = Math.floor(val/25)
    val -= quarters*25
    var dimes = Math.floor(val/10)
    val -= dimes*10
    var nickles = Math.floor(val/5)
    val -= nickles*5
    var pennies = val
    return [quarters,dimes,nickles,pennies]

}

v = 999
console.log(coins(v))