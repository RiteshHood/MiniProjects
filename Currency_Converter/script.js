
// accessing the values 

const fromcountry = document.getElementById("fromCountry");
const toCountry = document.getElementById("toCountry");

// accessing the country flags
const fromcountryFlag = document.getElementById("fromCountryFlag");
const toCountryFlag = document.getElementById("toCountryFlag");

// accessing the exchange button
const getExchangeBtn = document.getElementById("ExchangeBtn");

// changing flag when From country is selected
fromcountry.addEventListener("change", () => {
    const selectedFromCountry = fromcountry.value;
    const fromcountryCode = countryList[selectedFromCountry];
    fromcountryFlag.src = `https://flagsapi.com/${fromcountryCode}/flat/64.png`
    console.log("selected Country", selectedFromCountry);
})

// changing flag when To country is selected
toCountry.addEventListener("change", () => {
    const selectedToCountry = toCountry.value;
    const toCountryCode = countryList[selectedToCountry];
    toCountryFlag.src = `https://flagsapi.com/${toCountryCode}/flat/64.png`
    console.log("selected Country", selectedToCountry);
})

// iterating over countryList and creating an option for each country
// object.keys iterate over only keys of an object
Object.keys(countryList).forEach(option => {
    const optionElement1 = document.createElement("option");
    optionElement1.value = option;
    optionElement1.text = option;

    // default currency selected
    if (option === "INR") {
        optionElement1.selected = true;
    }

    fromcountry.appendChild(optionElement1);

    //clone the option and append it to second dropdown

    const optionElement2 = optionElement1.cloneNode(true); // true copies node and its all children elements

    // default second currency
    if (option === "USD") optionElement2.selected = true;

    toCountry.appendChild(optionElement2);

})


// get exchange button logic here 

getExchangeBtn.addEventListener("click", async (event) => {

    // preventing from refresh
    event.preventDefault();

    try {
        getExchangeBtn.innerText = "Getting Exchange";

        // getting the amount
        const amount = parseFloat(document.getElementById("amntInput").value);

        const resultContainer = document.getElementById("resultContainer");
        const fromCurrency = fromcountry.value;
        const toCurrency = toCountry.value;

        // validating the amount
        if (isNaN(amount) || amount <= 0) {
            alert("Please input valid number");
            return;
            
        }

        // api url 
        const url = `https://v6.exchangerate-api.com/v6/7e06ece62ffa823f0a1d1507/latest/${fromCurrency}`;
        
        

        // fetching API url
        const response = await fetch(url);
        const data = await response.json();

        // getting conversion rate
        const conversionRate = data.conversion_rates[toCurrency];
        
        // calculating the Exchanged amount
        const ExchangedAmount = (amount*conversionRate).toFixed(2);
        
        getExchangeBtn.innerText = "Get Exchange";
        resultContainer.innerHTML="";
        
        const resultPara = document.createElement("p");
        resultPara.style.textAlign = "center";
        resultPara.textContent =`${amount} ${fromCurrency} is ${ExchangedAmount} ${toCurrency}`;
        resultContainer.appendChild(resultPara);


    }
    catch (error) {
        resultPara.textContent ="failed to fetch the exchange rates..! Try again";
    }
   
})
