//Write a program that takes in an array of numbers and consoles the first four 
//items multiplied by itself  and the last two added by 10. Return the array with the new values




 
const arrays=[14,67,93,56,73,91,36,27,54]
function items(arrays){
    arrays.forEach((item,index)=>{
        if(index<4){
            items[index] = item*10;
        }
        else if(index >=items.length[-2]){
            items[index]=item +5;
        }
    });
    console.log(items);

}
 items(arrays)
 //Write a program that takes in the following array and use a while loop
 //to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
 
 
 let arrayNums = [1,2,3,4,5,6,7,8,9]
 while(arrayNums[4]){
   console.log(arrayNums)
   break;
 }
 //Write a function that takes in a an array of strings and use a continue statement 
 //when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

 function fruits(names){
   for(let j =0; j<names.length;j++){
      if(j==2){
         continue;
      }
      console.log(names)
   }
 }
 fruits(['apple','plum','banana','strawberries','kiwi'])
 
// Write a function that accepts an array of strings and console.logs each element using a for loop.
 function arrayStrings(words){
   for(let i =0; i<words.length;i++){
      console.log(words[i]);
   }
 }
arrayStrings["Esther","Violet","Laura","Magret"];

//Write a JavaScript function that takes a string as input and reverses it using a while
 //loop. The function should return the reversed string.
function takesString (name){
  let i=name.length;
  while(i--){
    console.log((name[i]))
  }
  }
  takesString("Esther")








 