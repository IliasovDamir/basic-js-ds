const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    return this.rootNode
  }

  add(data) {
    this.rootNode = addItem(this.rootNode, data)
    // выдает ошибку при data === null
    function addItem(rootNode, data) {
      if (!rootNode) {
        return new Node(data)
      }
      if (rootNode.data === data) {
        return rootNode
      }
      if (data < rootNode.data) {
        rootNode.left = addItem(rootNode.left, data)
      } else {
        rootNode.right = addItem(rootNode.right, data)
      }
      return rootNode
    }
  }

  has(data) {
    return searchItem(this.rootNode, data)

    function searchItem(rootNode, data) {
      if (!rootNode) {
        return false
      }
      if (rootNode.data === data) {
        return true
      }
      if (data < rootNode.data) {
        return searchItem(rootNode.left, data)
      }
      if (data > rootNode.data) {
        return searchItem(rootNode.right, data)
      }
    }
  }

  find(data) {
    return findItem(this.rootNode, data);

    function findItem(rootNode, data) {
      if (!rootNode) {
        return null;
      }
      if (rootNode.data === data) {
        return rootNode;
      }
      if (data < rootNode.data) {
        return findItem(rootNode.left, data);
      }
      if (data > rootNode.data) {
        return findItem(rootNode.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeItem(this.rootNode, data)

    function removeItem(rootNode, data) {
      if (!rootNode) {
        return null
      }
      if (data < rootNode.data) {
        rootNode.left = removeItem(rootNode.left, data)
        return rootNode
      } else if (data > rootNode.data) {
        rootNode.right = removeItem(rootNode.right, data)
        return rootNode
      } else {
        if (!rootNode.left && !rootNode.right) {
          // нет потомков? искомый эл и есть лист. замещаем лист значением null
          return null
        }
        if (!rootNode.left) {
          // есть правое поддерево. замещаем удаляемый эл поднимая поддерево
          rootNode = rootNode.right
          return rootNode
        }
        if (!rootNode.right) {
          // есть левое поддерево. замещаем удаляемый эл поднимая поддерево
          rootNode = rootNode.left
          return rootNode
        }
        // вариант, когда есть 2 поддерева/ ищем минимум среди правого поддерева
        let minItem = rootNode.right
        while (minItem.left) {
          // начинаем искать с корня правого поддерева. ищем слева. т к значения меньше
          minItem = minItem.left
        }
        // найдя минимальное значение. замещаем им удаленное значение в корне        
        rootNode.data = minItem.data
        // удаляем рекурсивно мин значение с правго поддерева, которое станет новым корнем для него
        rootNode.right = removeItem(rootNode.right, minItem.data)
        return rootNode
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    // объяв переменную. начинаем искать с корня и перезаписывать. если есть кто-то левее
    let node = this.rootNode
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let node = this.rootNode
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};
