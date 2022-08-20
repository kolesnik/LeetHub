/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const results = [];
    
    let queue = [root];
    while(queue.length) {
        const level = [];
        const newqueue = [];
        for(const node of queue) {
            level.push(node.val); 
            if(node.left) newqueue.push(node.left);
            if(node.right) newqueue.push(node.right);
        }
        results.push(level);
        queue = newqueue;
    }
    
    return results;
};