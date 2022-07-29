class Queue {
    constructor() {
        this.students = []
    }
    add(value) {
        this.students.unshift(value)
        return this.students
    }
    remove() {
        this.students.pop()
        return this.students
    }
}
let dsa = new Queue()
console.log(dsa)
console.log(dsa.add(22))
console.log(dsa.add(10))
console.log(dsa.add(30))
console.log(dsa.remove())


