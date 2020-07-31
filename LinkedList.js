fuction LinkedList() {
    let length = 0;
    let head = null;

    let node = function (element) {
        this.element = element;
        this.next = null;
    }

    this.size = function () {
        return length;
    }

    this.head = function () {
        return head;
    }

    this.add = function (element) {
        let node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            var currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node;
        }
        length++;
    };

    this.remove = function (element) {
        let currentNode = head;
        let previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    };
    this.isEmpty = function () {
        return length === 0;
    }
    this.indexOf = function (element) {
        let currentNode = head;
        let index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    };

}