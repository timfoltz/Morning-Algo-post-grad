// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// let l1 = [9,9,9,9,9,9,9];
// let l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

var addTwoNumbers = function(l1, l2) {
    let len = 0;
    if(l1.length>=l2.length){
        len = l1.length
    }else{len = l2.length}
    console.log("length", len)
    let newArr = [];
    temp = 0;
    console.log("test")
    let i = 0;
    while(i<len) {
        if(l1[i]+l2[i]>=10){
            newArr.push(l1[i]+l2[i]-10+temp);
            temp = Math.round((l1[i]+l2[i]-10)/10);
            console.log("temp in both have val  ",temp)
            console.log("newArr both have val  ",newArr)
            i++
            
        }
        else if(l1[i] ==undefined) {
            console.log("l1 empty ",l2+temp-0)
            if(l2+temp-10 == 0){
                newArr.push(0)
                temp = 1
                i++
            }
            console.log("temp in empty l1 ",temp)
            console.log("newArr in empty l1  ",newArr)
        }
        else if(l2[i] == undefined) {
            console.log("l2 empty ",l1+temp-0)
            if(l1+temp-10 == 0){
                newArr.push(0)
                temp = 1
                i++
            }
            console.log("temp in empty l2 ",temp)
            console.log("newArr in empty l2  ",newArr)
        }i++
    

    }
    return newArr;
};

console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))