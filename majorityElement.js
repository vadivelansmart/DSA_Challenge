/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   
    var hash ={};
    var majority =0;
    var res =0;
    for(n of nums) {
        hash[n] = 1+(hash[n] || 0)
        if(hash[n] > majority) {
            majority = hash[n];
            res =n
        }
    }
    return res;
};