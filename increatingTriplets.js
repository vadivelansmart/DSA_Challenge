/**
 * @param {i[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var minNum = nums[0];
    var midNum = Number.MAX_SAFE_INTEGER;
    for (let i of nums) {
      if(i <= minNum) minNum = i
      else if(i <= midNum) midNum = i
      else return true;
    }
    return false
};
console.log(increasingTriplet([1,2,3,4,5]))