let Stack = function () {
    this.count = 0;
    this.storage = {};

    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function () {
        if (this.count === 0) return undefined;

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function () {
        return this.count;
    }

    this.peek = function () {
        return this.storage[this.count - 1];
    }
}

let mystack = new Stack();

mystack.push(1);
mystack.push(2);
console.log(mystack.peek());
console.log(mystack.pop());
console.log(mystack.peek());
mystack.push("Madhu");
console.log(mystack.size());
console.log(mystack.peek());
console.log(mystack.pop());
console.log(mystack.peek());
