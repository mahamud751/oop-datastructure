// class Stack {
//     constructor() {
//         this.students = []
//     }
//     add(value) {
//         this.students.push(value)
//         return this.students
//     }
//     remove() {
//         this.students.pop()
//         return this.students
//     }
// }
// let dsa = new Stack()
// console.log(dsa)
// console.log(dsa.add(22))
// console.log(dsa.add(24))
// console.log(dsa.add(26))
// console.log(dsa.remove())

class Stack2 {
    constructor() {
        this.students = {}
        this.count = 0
    }
    add(value) {
        this.count++
        this.students[this.count] = value

        return this.students
    }
    remove() {
        delete this.students[this.count]
        this.count--

        return this.students
    }
}

let dsa = new Stack2()
console.log(dsa)
console.log(dsa.add(12))
console.log(dsa.add(22))
console.log(dsa.remove())
