/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },

  lidOpen:false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  volumechange: function (newvolume){
    this.volume = newvolume;
  },
  pocketNumchange: function (newpocketnum){
    this.pocketNum = newpocketnum;
  },
};
console.log('backpack:', backpack)

console.log('befor volume:',backpack.volume);

backpack.volumechange(34);

console.log('after volume:',backpack.volume);


console.log('old pocketnum:',backpack.pocketNum);

backpack.pocketNumchange(21);

console.log('new pocketnum:',backpack.pocketNum);

console.log('befor right:',backpack.strapLength.right);

backpack.newStrapLength(1,2);

console.log('after right:',backpack.strapLength.right);

