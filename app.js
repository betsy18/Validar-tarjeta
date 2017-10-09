//intetanto realizar el for inverso
function isValidCard(Card){
    var array =[1,2,3,4,5,6,7,8,9,10];  
    //array = NumberOfCard;

  for (var i = 0; i < array.length; i++) {
    var item = array.pop();
    array.splice(i, 0, item);
    console.log (array);
  }
}; 