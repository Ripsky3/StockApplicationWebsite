

const submitButton = document.querySelector("#submit-button");
const userInput = document.querySelector("#input");
const output = document.querySelector("#output");

submitButton.addEventListener("click", (e)=> {
    e.preventDefault();
    
    fetch("https://api.polygon.io/v1/open-close/" + userInput.value + "/2022-12-14?adjusted=true&apiKey=_2_pWjM70vdQ9zclpgb2XudoBfqtOp1p").then((response) => {
        response.json().then(data => {
            if (data.error) {
                output.innerHTML = "Can't connect to servers";
            }
            else if (data.status == "NOT_FOUND") {
                output.innerHTML = "Enter valid ticker symbol";
            } else {
                output.innerHTML = "";
                const symbol = document.createElement("p");
                symbol.innerHTML = "Ticker: " + data.symbol;
                const from = document.createElement("p");
                from.innerHTML = "Date: " + data.from;
                const high = document.createElement("p");
                high.innerHTML = "High Price: " + data.high;
                const low = document.createElement("p");
                low.innerHTML = "Low Price: " + data.low;
                console.log(data);
                output.appendChild(symbol);
                output.appendChild(from);
                output.appendChild(high);
                output.appendChild(low);
            }
            
        })
    })
    
})