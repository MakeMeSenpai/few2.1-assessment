class Maths {
    num:number
    gold:() => number
    radians:() => number
    degrees:() => number
    money:() => string
    /**
     * @class Maths 
     * @param num  
     * Call a new Maths object:
     * const m = Maths(2.5)
     * Call value 
     * @name gold() @returns golden ratio:number
     * @name radians() @returns radians:number
     * @name degrees() @returns degrees:number
     * @name money() @returns money:string
     * m.gold() == 4.045084971875
     */
    constructor(num:number=0) {
        this.num = num
        this.gold = function(){ 
            num = num * 1.61803398875
            return num
        }
        this.radians = function(){ 
            num =  num * Math.PI / 180
            return num
        }
        this.degrees = function(){
            num = num * 180 / Math.PI
            return num
        }
        this.money = function(){
            num = num * 100
            num = Math.ceil(num)
            num = num / 100
            return `$${num.toFixed(2)}`
        }
    }

    /**
     * @method random takes in two parameters
     * @param min:number
     * @param max:number
     * @returns a randomly selected options
     * m.random(0, 2) -> 0, 1, or 2
     */
    random(min:number, max:number):number {
        // creates a list from min  -> max
        let list:Array<number> = []
        while (min < max) {
            list.push(min)
            min += 1
        }
        // adds last value
        list.push(max)
        // multiplies 0.0-1.0 times length of list
        // removes decimal points using Math.floor
        // returns the lists index i.e list[2] == 4
        return list[Math.floor(Math.random() * list.length)]
    }
}

var a:Maths = new Maths(555)
console.log(a.num)
console.log(a.gold())
console.log(a.radians())
console.log(a.degrees())
console.log(a.money())
console.log(a.random(0, a.num))

module.exports.Maths = Maths
