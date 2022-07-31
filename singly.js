class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Singly {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    isEmpty() {
        return this.length === 0
    }

    push(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }

        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    pop() {
        if (!this.head) {
            return null
        }
        if (this.length === 1) {
            let removeNode = this.head
            this.head = null
            this.tail = null
            this.length = 0
            return removeNode
        }
        let current = this.head
        let last = this.tail
        let newNode

        while (current) {
            if (current.next == this.tail) {
                newNode = current
                break
            }
            current = current.next
        }
        newNode.next = null
        this.tail = newNode
        this.length--

        return last
    }

    shift() {
        if (!this.head) {
            return null
        }
        let current = this.head
        this.head = current.next
        this.length--

    }
    unShift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++


    }
    showData() {
        let arr = []
        let current = this.head

        while (current) {
            arr.push(current.value)
            current = current.next
        }
        return arr
    }
}

let dsa = new Singly()
console.log(dsa)
dsa.push(22)
dsa.push(212)

console.log(dsa)


console.log(dsa)
dsa.push(22)
dsa.push(212)
console.log(dsa)
dsa.unShift(2222222)
console.log(dsa)
dsa.pop()
dsa.pop()
dsa.pop()
dsa.push(22)
console.log(dsa)
console.log(dsa.showData())