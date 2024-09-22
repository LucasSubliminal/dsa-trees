/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0; // If the tree is empty, return 0
  
    function minDepthHelper(node) {
      if (!node) return Infinity; // If we reach a null node, return a large number
      if (!node.left && !node.right) return 1; // If it's a leaf node, return 1
      
      // Recurse for both children and add 1 to account for the current node
      return Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1;
    }
  
    return minDepthHelper(this.root);
  }
  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0; // If the tree is empty, return 0
  
    function maxDepthHelper(node) {
      if (!node) return 0; // Base case for null node
      if (!node.left && !node.right) return 1; // If it's a leaf node, return 1
  
      // Recurse for both children and add 1 to account for the current node
      return Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1;
    }
  
    return maxDepthHelper(this.root);
  }
  

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = { maxSum: 0 }; // Use an object to track the max sum globally
  
    function maxSumHelper(node) {
      if (!node) return 0;
  
      // Recursively get the maximum path sum for the left and right subtrees
      const leftMax = Math.max(maxSumHelper(node.left), 0); // Don't consider negative paths
      const rightMax = Math.max(maxSumHelper(node.right), 0);
  
      // Calculate the maximum path sum with the current node
      const currentMax = node.val + leftMax + rightMax;
  
      // Update the global maxSum if necessary
      result.maxSum = Math.max(result.maxSum, currentMax);
  
      // Return the maximum sum path that can be extended to the parent
      return node.val + Math.max(leftMax, rightMax);
    }
  
    maxSumHelper(this.root);
    return result.maxSum;
  }
  

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
  
    let closest = null;
  
    function nextLargerHelper(node) {
      if (!node) return;
  
      if (node.val > lowerBound) {
        // If the node's value is greater than the lower bound, update the closest value
        if (closest === null || node.val < closest) {
          closest = node.val;
        }
      }
  
      // Recursively search in the left and right subtrees
      nextLargerHelper(node.left);
      nextLargerHelper(node.right);
    }
  
    nextLargerHelper(this.root);
    return closest;
  }
  

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
