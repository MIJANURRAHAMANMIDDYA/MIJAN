
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.tail = null;
        this.head = null;
    }
    enqueue(element) {
        let node = new Node(element);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    dequeue() {
        if (!this.head) {
            return "no element"
        }
        else {
            let elementtopop = this.head;
            this.head = this.head.next;
            return elementtopop;
        }
    }
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}

module.exports = Queue;