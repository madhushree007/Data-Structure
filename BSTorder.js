class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        }
        else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    }
                    else if (node.left != null) {
                        return searchTree(node.left);
                    }
                }
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                    }
                    else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                }
                else {
                    return null;
                }
            }
            return searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right
        }
        return current.data;
    }

    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data == current.data) return true;
            else if (data < current.data) current = current.left;
            else current = current.right;
        }
        return false;
    }

    remove(data) {
        let removeNode = function (current, data) {
            if (current == null) return null;
            if (current.data == data) {
                if (current.left == null && current.right == null) return null;
                if (current.left == null) return current.right;
                if (current.right == null) return current.left;

                var tempNode = current.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                current.data = tempNode.data;
                current.right = removeNode(current.left, data);
                return current;
            }
            else if (data < current.data) {
                current.left = removeNode(current.left, data);
                return current
            }
            else {
                current.right = removeNode(current.right, data);
                return current;
            }
        }
        this.root = removeNode(this.root, data);
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    inOrder() {
        if (this.root === null) {
            return null;
        } else {
            var result = [];
            function traversalInOrder(node) {
                node.left && traversalInOrder(node.left);
                result.push(node.data);
                node.right && traversalInOrder(node.right);
            }
            traversalInOrder(this.root);
            return result;
        };
    }
    preOrder() {
        if (this.root === null) {
            return null;
        } else {
            var result = [];
            function traversalInOrder(node) {
                result.push(node.data);
                node.left && traversalInOrder(node.left);
                node.right && traversalInOrder(node.right);
            }
            traversalInOrder(this.root);
            return result;
        };
    }
    postOrder() {
        if (this.root === null) {
            return null;
        } else {
            var result = [];
            function traversalInOrder(node) {
                node.left && traversalInOrder(node.left);
                node.right && traversalInOrder(node.right);
                result.push(node.data);
            }
            traversalInOrder(this.root);
            return result;
        };
    }
    levelOrder() {
        let result = [];
        let Q = [];
        if (this.root != null) {
            Q.push(this.root);
            while (Q.lenght > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                }
                if (node.right != null) {
                    Q.push(node.rihgt);
                }
            }
            return result;
        } else {
            return null;
        };
    };

}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());

console.log('In order: ' + bst.inOrder());
console.log('Pre order: ' + bst.preOrder());
console.log('Post order: ' + bst.postOrder());
console.log('Level order: ' + bst.levelOrder());
