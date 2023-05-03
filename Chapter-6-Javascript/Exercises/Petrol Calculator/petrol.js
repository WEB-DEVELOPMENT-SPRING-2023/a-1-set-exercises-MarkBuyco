//JS code to for petrol calculator

/*A function that will get input from the users and display it into the output, inside a paragraph
and will multiply the output to 1.72, which is the cost of the petrol per litter.*/
function getInputValue() {
    let inputValue = document.getElementById("petrol_cost").value;
    document.getElementById("output")
    .innerHTML = inputValue + "L of petrol is equal to " + inputValue*1.72 + "$.";
  }

  /*Almost the same function but different input and output values. A confirmation for the purchase, 
  rather than information like the first function, but they are identical technically.*/
  function getInputValue2() {
    let inputValue = document.getElementById("petrol_purchase").value;
    document.getElementById("output2")
    .innerHTML = inputValue  + "L has been purchased, which cost " + inputValue*1.72 + "$.";
  }