class SortedList {
  constructor(counter) {
   this.items = [];
   this.length = 0;
  }
  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b){return a-b});
    this.length += 1;
  }
  get(pos) {
    
    return this.items[pos-1];
    
  }
  max() {
  if (this.items.length === 0){
    throw new Error("EmptySortedList");
   }
  return this.items[this.length - 1];
  // let currentHighest = this.items[0];
  // for (let i = 0; i < this.items.length; i++) {
    
  //   if (currentHighest < this.items[i]){
  //       currentHighest = this.items[i];
  //   }
    
  // }
  // return currentHighest; 

  }

  min() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
  return this.items[0]
    // let currentLowest = this.items[0];
    // for (let i = 0; i < this.items.length; i++) {
    //   if (currentLowest > this.items[i]){
    //      currentLowest = this.items[i];
    //   }
    // }
    // return currentLowest; 
  }
  average() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (this.items.reduce(reducer) / this.items.length) 
  
  }

  sum() {
    if(this.items.length === 0){
      return 0
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
   return this.items.reduce(reducer);
  }
};

let sortedList1 = new SortedList;
module.exports = SortedList;
