

const _ = {

  clamp(num, low, up){
    if(num>up){
      num=up;
      return (num);
    }
    else if(num<low){
      num=low;
      return(num);
    }
    else{
      return(num);
    }
  },


  inRange(num, start, end){
    if(end===undefined){
      end = start;
      start = 0;
    }
    if(start>end){
      let temp = end;
      end = start;
      start= temp;
    }
    if(num>=start && num<end){
      return(true);
    }
    else{
      return(false);
    }
  },


  words(string){
    const wordArray = string.split(' ');
    return(wordArray);
  },

  pad(string, length){
    if(string.length >= length){
      return(string);
    }
    else{
      let padLength=(length-string.length);
      let padLengthL = Math.floor(padLength/2);
      let padLengthR = Math.ceil(padLength/2);
      const padder = " ";
      return(padder.repeat(padLengthL) + string + padder.repeat(padLengthR));
    }
  },

  has(object, key){
    return(object.key != undefined);
  },

  invert(object){
    const objectInverted = {}
    for(key in object){
      let originalValue = object.key;
      objectInverted.originalValue = key;
    }
    return(objectInverted)
  },

  findKey(object, pFunction){
    for(key in object){
      if(pFunction(object.key)){
        return(value);
      }
    }
    return(undefined);
  },

  drop(arr, num){
    if(num === undefined){
      num = 1;
    }
    const newArr = arr;
    return(newArr.slice(num));
  },

  dropWhile(arr, predicate){
    const cb = (element, index) => {
      return(!predicate(element, index, arr));
    }
    let dropNum = arr.findIndex(cb);
    let droppedArray = this.drop(arr, dropNum);
    return(droppedArray);
  },

  chunk(array, size){
    if(size === undefined){
      size = 1;
    }
    newArray = [];
    let temp = 0;
    for(i=0; i<array.length; i=i+size){
      arrayChunk = i+size;
      newArray.push(array.slice(i, arrayChunk));
    }
    return(newArray);
  }


};//this is the end of the lodash object
let temp = [1,2,3,4,5,6,7,8]
console.log(_.chunk(temp, 3)); //

// Do not write or modify code below this line.
module.exports = _;
