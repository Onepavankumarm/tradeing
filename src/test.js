// SingleLinkedList

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    travercy() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let Tree = new SingleLinkedList();
Tree.push("hello");
Tree.push("how");
Tree.push("are");
console.log(Tree);
console.log(Tree.travercy())