class SLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Return the total amount of nodes in the list
    size(){
        return this.size;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if(this.head == null){
            return "The list is empty"
        }
        let temp = this.head;
        this.head=this.head.next;
        temp.next = null;
        this.size--;
        return temp;
    }

    // bonus: add a node to the end of the list.
    addToBack(node){
        if(this.head == null) {
            this.head = node
            this.size++;
            return;
        }
        let runner = this.head;
        while(runner) {
            if(runner.next == null) {
                runner.next = node;
                this.size++;
                return;
            }runner = runner.next;
        }
    }

    // console log the data of every node in the current list
    read() {
        var current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        // start at the head
        var runner = this.head;

        // while we have a runner
        while (runner) {

            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        return false;
    }

    // return true / false if current list contains a data equal to value
    // do not loop

    // function calls itself
    // base case that ends the recrusive call
    // change the inputs every time you call the function

    recursiveContains(val, current) {
        // if you didn't pass current, current should be the head
        if (current === undefined) current = this.head;

        // if current is null, return false up the call stack
        if (current === null) {
            return false;
        }

        // if runner.data === value, return true up the call stack
        if (current.data === val) return true;

        // otherwise return the result of contains for current.next
        return this.recursiveContains(val, current.next);
    }

    // myFirstSLL.recursiveContains(13);

    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return false;
    }

    addToFront(node) {
        node.next = this.head;
        this.head = node;
        this.size++
    }

    addDataToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}



var myNewSLL = new SLL();
myNewSLL.addToFront(new Node(5));
myNewSLL.addToFront(new Node(22));
myNewSLL.addToFront(new Node(17));
myNewSLL.read();
console.log("size is :",myNewSLL.size)
myNewSLL.addToBack(new Node(35))
myNewSLL.read();
console.log("size is: ",myNewSLL.size)
myNewSLL.removeFromFront();
console.log("size is: ",myNewSLL.size)


// var current = myNewSLL.head;

// while (current) {
//     console.log(current.data);
//     current = current.next;

//     if (current.next === null) {
//         console.log("this is the last node");
//     }
// }