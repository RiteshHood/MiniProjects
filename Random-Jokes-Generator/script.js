    //API calls
        let url = "https://official-joke-api.appspot.com/jokes/random";

        const generateBtn = document.getElementById("generateBtn");
        const shareBtn = document.getElementById("shareJokeBtn");

        let currentJoke = "";

        const jokesPara = document.getElementById("jokes");

        // receiving data from an API is an asynchronous task(might take some time) so we use async function.
        // defining async function
        async function getJokes() {

            // show "loading..." while fetching joke
            generateBtn.innerText = "loading...";
            
            try{
            // getting response patiently( await ) from url
            let response = await fetch(url);                     // nowdays API returns the data in JSON format , before was in XML format.

            // opening the response in json to see the actual data.
            let data = await response.json()                   // json() is also a async object hence we use await keyword.

            // current joke 
            currentJoke = `${data.setup} - ${data.punchline}`;

            // show setup + punchline in paragraph
            jokesPara.innerHTML = `Setup : ${data.setup} <br> Punchline : ${data.punchline}`;
            
            }catch(error){
                jokesPara.innerText = " Failed to generate ! Please try again";
                currentJoke = "";
            }
            // change button inner Text to Generate Joke
            generateBtn.innerText = "Generate Joke";

        }

        getJokes();


        shareBtn.addEventListener("click",()=>{
            if(currentJoke){
            let whatsappUrl = `https://wa.me/?text=${currentJoke}`;

            window.open(whatsappUrl, "_blank");
        }
        else{
            alert("Generate the joke first");
        }
        })
