// 1. Two Sum
// Easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

twoSum = (nums, target) => {
    let temp = 0;
    let returnArr = []
    for(let i = 0; i<nums.length; i++) {
        console.log("nums at i :",nums[i])
        if(nums[i]<=target) {
            console.log("inside i if");
            temp = nums[i]
            for(let j = 0; j<nums.length;j++){
                console.log("nums at j :",nums[j])
                if(j==i){
                    console.log("inside i==j if");
                    continue;
                }
                else if(temp + nums[j] == target) {
                    console.log("inside j if");
                    returnArr.push(i,j)
                    return returnArr;
                }
            }
        }
        console.log("iterate i")
    }
    return "Target not found"
};

console.log(twoSum([-3,9],6));