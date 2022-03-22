const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
      this.mainRoot = null
  }
  root() {
      return this.mainRoot
  }

  add(data) {
      const node = this.mainRoot
      if (node === null) {
          this.mainRoot = new Node(data)
          return
      } else {
          const searchTree = function(node) {
              if (data < node.data) {
                  if (node.left === null) {
                      node.left = new Node(data)
                      return
                  } else if (node.left !== null) {
                      return searchTree(node.left)
                  }
              } else if (data > node.data) {
                  if (node.right === null) {
                      node.right = new Node(data)
                      return
                  } else if (node.right !== null) {
                      return searchTree(node.right)
                  }
              } else {
                  return null
              }
          }
          return searchTree(node)
      }
  }

  has(data) {
      let currNode = this.mainRoot

      while (currNode) {
          if (data === currNode.data) {
              return true
          }
          if (data < currNode.data) {
              currNode = currNode.left
          } else {
              currNode = currNode.right
          }
      }

      return false
  }

  find(data) {
      let curr = this.mainRoot
      while(curr.data !== data) {
          if (data < curr.data) {
              curr = curr.left
          } else {
              curr = curr.right
          }
          if (curr === null) {
            return null
          }
      }

      return curr
  }

  remove(data) {
      const removData = function(node, data) {
          if (node === null) {
              return null
          }

          if (data === node.data) {
              if (node.left === null && node.right === null) {
                  return null
              }

              if (node.left === null) {
                  return node.right
              }
              if (node.right === null) {
                  return node.left
              }

              let tempNode = node.right
              while(tempNode.left !== null) {
                  tempNode = tempNode.left
              }
              node.data = tempNode.data
              node.right = removData(node.right, tempNode.data)
              return node
          } else if (data < node.data) {
              node.left = removData(node.left, data) 
              return node
          } else {
              node.right = removData(node.right, data)
              return node
          }
      }
      this.mainRoot = removData(this.mainRoot, data)
  }

  min() {
      let currelem = this.mainRoot
      
      while(currelem.left !== null) {
          currelem = currelem.left
      }
      return currelem.data
  }

  max() {
      let currelem = this.mainRoot
      
      while(currelem.right !== null) {
          currelem = currelem.right
      }
      return currelem.data
  }
}

module.exports = {
  BinarySearchTree
};