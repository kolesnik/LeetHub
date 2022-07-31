/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    const map = new Map();
   
    let output = {
        val: 0,
        next: null
    };
    
    let currentNode = output;

    while(head) {
        if(head.next && head.val === head.next.val || map.has(head.val)) {
            map.set(head.val, true);
        } else {
            currentNode.next = {val: head.val, next: null};
            currentNode = currentNode.next;
        }
        
        head = head.next;
    }
    
    return output.next
};