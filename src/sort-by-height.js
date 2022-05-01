const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let pos = [];
  arr.forEach((it ,i)=>{
    if(it === -1){
      pos.push(i)
    }
  })
  arr = arr.filter(it => it !== -1 ? true : false).sort((a,b)=> a-b);
  pos.forEach(it => {arr.splice(it, 0, -1)})
  return arr
}

module.exports = {
  sortByHeight
};
