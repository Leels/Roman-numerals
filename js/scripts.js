$(document).ready(function(){
  $("#roman-numerals").submit(function(){
    event.preventDefault()
    var onesArr = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    var tensArr = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
    var hundredsArr = ['C','CC','CCC','CD','D', 'DC', 'DCC','DCCC','CM']
    var thousandsArr = ['M','MM','MMM']
    var userInputArr = parseInt($("input#input").val());
    var romanEmptyArr=[];

    // for (var i = string.length -1; i >= 0; i--)


    if (userInput <= 3999 && userInput >= 1000) {
        var thousands = Math.floor(userInput / 1000);
        console.log(thousands);
        totalMs = numeralsArr[6].repeat(thousands)
        console.log(totalMs);
        return totalMs
      }



    if (isNaN(userInput) || userInput > 3999) {
      alert("Please enter a number under 4000!");
    }


  });
});
