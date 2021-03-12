// https://leetcode.com/problems/merge-two-sorted-lists/
// 21. Merge Two Sorted Lists
// Easy
// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
mergeTwoLists = (l1,l2) => {
    let newList = [];
    let len = 0;
    let i = 0;
    console.log("starting2")
    if(l1.length >= l2.length){
        console.log("inside len if")
        len = l1.length
    }else{ len = l2.length};
    console.log("len ",len)
    while(i<len) {
        console.log("inside while")
        if(i<l1.length){
            console.log("inside while if 1")
            let n = new ListNode()
            newList.push(new ListNode(l1[i],n))
            newList.push(new ListNode(l2[i]))
            i++
        }
        else if (i > l1.length && i < l2.length) {
            console.log("inside while if 2")
            newList.push(l2[i])
            i++
        }
    }
    return newList
}
console.log("starting")
console.log(mergeTwoLists([1,2,4],[1,3,4]))