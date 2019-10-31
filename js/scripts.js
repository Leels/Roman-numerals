$(document).ready(function(){
  $("#roman-numerals").submit(function(){
    event.preventDefault()
    var userInput = $("input#input").val();
    var onesArr = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    var tensArr = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
    var hundredsArr = ['','C','CC','CCC','CD','D', 'DC', 'DCC','DCCC','CM']
    var thousandsArr = ['','M','MM','MMM']
    var bigArray = [onesArr, tensArr, hundredsArr, thousandsArr];
    var inputArray= (Array.from(userInput.toString()).map(Number)).reverse();
    var output= []


   for (i=0; i< inputArray.length; i ++) {
      output.push(bigArray[i][inputArray[i]]);
}

if (isNaN(userInput) || userInput > 3999) {
  alert("Please enter a number under 4000!");
}
    $(".result").text(output.reverse().join(""));


  });
});
