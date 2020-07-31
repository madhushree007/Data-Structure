function mySet() {
    var collection = [];

    this.has = function (el) {
        return (collection.indexOf(el) !== -1)
    }

    this.value = function () {
        return collection;
    }

    this.add = function (el) {
        if (!this.has(el)) {
            collection.push(el);
            return true;
        }
        return false;
    }

    this.delete = function (el) {
        if (!this.has(el)) return false;

        else {
            var index = collection.indexOf(el);
            collection.splice(index, 1);
            return true;
        }
    }

    this.size = function () {
        return collection.length;
    };

    this.union = function (otherSet) {
        let unionSet = new Set();
        let firstSet = this.value();
        let secondSet = otherSet.value();

        firstSet.forEach(el => {
            unionSet.add(el);
        });
        secondSet.forEach(el => {
            unionSet.add(el);
        });
        return unionSet;
    }

    this.intersection = function (otherSet) {
        let intersectionSet = new Set();
        let firstSet = this.value();
        firstSet.forEach(el => {
            if (otherSet.has(el))
                intersectionSet.add(el);
        });
        return intersectionSet;
    }
}