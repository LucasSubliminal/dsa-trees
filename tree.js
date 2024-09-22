class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    if (!this.root) return 0; // If there's no root, return 0

    function sumHelper(node) {
      let total = node.val; // Start with the value of the current node

      for (let child of node.children) {
        total += sumHelper(child); // Recursively sum the values of the children
      }

      return total;
    }

    return sumHelper(this.root); // Call helper function on root
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens() {
    if (!this.root) return 0;

    function countHelper(node) {
      let count = node.val % 2 === 0 ? 1 : 0; // Add 1 if the current node's value is even

      for (let child of node.children) {
        count += countHelper(child); // Recursively count even values in children
      }

      return count;
    }

    return countHelper(this.root); // Call helper function on root
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (!this.root) return 0;

    function greaterHelper(node) {
      let count = node.val > lowerBound ? 1 : 0; // Add 1 if the current node's value is greater than lowerBound

      for (let child of node.children) {
        count += greaterHelper(child); // Recursively count values greater than lowerBound in children
      }

      return count;
    }

    return greaterHelper(this.root); // Call helper function on root
  }
}

module.exports = { Tree, TreeNode };
