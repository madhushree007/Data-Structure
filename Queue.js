function Queue() {
    var collection = [];
    this.print = function () {
        console.log(collection);
    }
    this.enqueue = function (el) {
        collection.push(el);
    }
    this.dequeue = function () {
        return collection.shift();
    }
    this.front = function () {
        return collection[0];
    }
    this.size = function () {
        return collection.length;
    }
    this.isEmpty = function () {
        return (collection.length === 0);
    }
}

function PriorityQueue() {
    var collection = [];

    this.print = function () {
        console.log(collection);
    }

    this.enqueue = function (el) {
        if (this.isEmpty()) {
            collection.push(el)
        }
        else {
            var added = false;
            for (let i = 0; i < collection.length; i++) {
                if (el[1] < collection[i][1]) {
                    collection.splice(i, 0, el);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(el);
            }
        }
    };

    this.dequeue = function () {
        var value = collection.shift();
        return value;
    }
    this.front = function () {
        return collection[0];
    }
    this.size = function () {
        return collection.length;
    }
    this.isEmpty = function () {
        return (collection.length === 0);
    }

}

var pq = new PriorityQueue();

pq.enqueue(["Madhushree", 1]);

pq.print();