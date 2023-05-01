function getInputValue() {
    let inputValue = document.getElementById("petrol_cost").value;
    document.getElementById("output")
    .innerHTML = inputValue + "L of petrol is equal to " + inputValue*1.72 + "$.";
  }

  function getInputValue2() {
    let inputValue = document.getElementById("petrol_purchase").value;
    document.getElementById("output2")
    .innerHTML = inputValue  + "L has been purchased, which cost " + inputValue*1.72 + "$.";
  }