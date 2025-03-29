
let SI = document.getElementById("simpleIntrest");  // Simple Intrest
let resetBtn = document.getElementById("reset");    // Reset btn


SI.addEventListener("click", function () {                                                // Event Listener for Simple Intrest
    let principalAmt = parseFloat(document.getElementById("amount").value);                // Input values
    let rate = parseFloat(document.getElementById("rate").value);                         
    let timeYrs = parseFloat(document.getElementById("time").value);


    // Validations for the inputs to check that all the inputs are positive numbers or not.

    if (isNaN(principalAmt) || isNaN(rate) || isNaN(timeYrs) || principalAmt <= 0 || rate <= 0 || timeYrs <= 0) {
        document.getElementById("result").textContent = "Please enter valid positive numbers.";
        return;
    }

    // Formula for Simple Intrest
    let simpleIntrest = (principalAmt * rate * timeYrs / 100);
    let totalAmt = principalAmt + simpleIntrest;

    let result = document.getElementById("result");
    
    // Displaying the result
    result.textContent = "Simple Intrest is " + simpleIntrest + "₹  and total amount is " + totalAmt + "₹";
    // Adding a class to the result section
    result.classList.add("resultSection");
})

let CI = document.getElementById("compoundIntrest");

// Event Listener for Compound Intrest
CI.addEventListener("click", function () {

    //input values
    let principalAmt = parseFloat(document.getElementById("amount").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let timeYrs = parseFloat(document.getElementById("time").value);

    // Validations for the inputs
    if (isNaN(principalAmt) || isNaN(rate) || isNaN(timeYrs) || principalAmt <= 0 || rate <= 0 || timeYrs <= 0) {
        document.getElementById("result").textContent = "Please enter valid positive numbers.";
        return;
    }

    // Formula for Compound Intrest
    let compoundIntrest = principalAmt * Math.pow(1 + rate / 100, timeYrs) - principalAmt;
    let totalAmt = principalAmt + compoundIntrest;

    let result = document.getElementById("result");

    // Displaying the result
    result.textContent = "Compound Intrest is " + compoundIntrest + "₹  and total amount is " + totalAmt + "₹";
    // Adding a class to the result section
    result.classList.add("resultSection");
})

// Event Listener for Reset
resetBtn.addEventListener("click", function () {

    // Resetting the values
    document.getElementById("amount").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("time").value = "";
    document.getElementById("result").textContent = "";
})
