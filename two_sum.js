const numsArray = [3,12,9,7,5,18,3];
const targetToFind = 6;

const findTwoSum = function(nums, target) {
  const numsMap = {};
  
  for(let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];

    if(currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }

  return null;
}

console.log(findTwoSum(numsArray, targetToFind));