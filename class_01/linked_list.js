"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.next = null;
        this.value = value;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    // Insert at the end
    LinkedList.prototype.insert = function (value) {
        var newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    };
    // Delete a node by value
    LinkedList.prototype.delete = function (value) {
        if (this.head === null)
            return;
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        var current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }
        if (current.next !== null) {
            current.next = current.next.next;
        }
    };
    // Traverse and print the list
    LinkedList.prototype.traverse = function () {
        var current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    };
    // Search for a node by value
    LinkedList.prototype.search = function (value) {
        var current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
// Example usage:
var list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.traverse(); // Output: 1 2 3
list.delete(2);
list.traverse(); // Output: 1 3
console.log(list.search(3)); // Output: Node { value: 3, next: null }
console.log(list.search(4)); // Output: null
