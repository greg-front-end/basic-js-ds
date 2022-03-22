const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // create temp node lists with -1 value -> Node{value: -1, next: null}
  let list = new ListNode(-1)
  // next ref equal value of 'l'
  list.next = l
  // temp prev node values of list
  let prev = list 
  // temp current node values of list
  let cur = l

  while(cur) {
    if (cur.value === k) {
      // if curr node value equal 'k' we change ref prev next to cur next
      // prev = {value: -1, next: Node {value: 1, next: Node {value: 2, next: null}}}
      // prev = {value: 1, next: Node {value: 2, next: ...}}
      prev.next = cur.next
      // and cur asign to the next 
      // cur = {value: 1, next: Node {value: 2, next: ...}}
      // cur = {value: 2, next: Node {value: 3, next: ...}}
      cur = cur.next
    } else {
      // Else just skip values of node lists
      prev = cur
      cur = cur.next
    }
  }
  // return list next, because we have -1 in the head list
  return list.next 
}

module.exports = {
  removeKFromList
};
