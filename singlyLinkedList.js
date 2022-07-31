class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    isEmpty() {
        return this.length === 0
    }
    push(value) {
        let newNode = {
            value: value,
            next: null
        }
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
        let end = this.tail
        let newNode

        while (current) {
            if (current.next == this.tail) {
                newNode = current
                break
            }
            current = current.next
        }
        newNode = null
        this.tail = newNode
        this.length--

        return end

    }
    shift() {
        if (!this.head) {
            return null
        }
        let current = this.head
        this.head = current.next
        this.length--

        if (this.length === 0) {
            this.tail = null
        }
    }
    showData() {
        let arr = []
        let current = this.head

        while (current) {
            arr.push(current.value)
            current = current.next
        }
    }

}
let dsa = new SinglyLinkedList()
console.log(dsa)
dsa.push(12)
dsa.push(22)
dsa.push(32)

dsa.push(22)
dsa.push(32)
console.log(dsa)


