const form = document.querySelector(".form1")
const jokeDisplay = document.querySelector(".joke")

async function getChnJk() {
    try {
        const params = {
            headers: {
                accept: 'application/json',
                'x-rapidapi-key': 'ec902dcfe6msh7830455c2201bdep1c8b22jsnb372a33c149d',
                'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
            }
        };
        const res = await axios.get("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", params)
        return res.data.value
    } catch (error) {
        console.log(error)
    }
}

const showJoke = () => {
    
    async () => {
        const joke = await getChnJk();
        jokeDisplay.innerText = joke
        console.log(joke)
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    showJoke();
})
