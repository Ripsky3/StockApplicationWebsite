const request = require("request");


function getStockPrice(userInput = "") {
    const url = "https://api.polygon.io/v1/open-close/" + userInput + "/2022-12-14?adjusted=true&apiKey=_2_pWjM70vdQ9zclpgb2XudoBfqtOp1p";
    request({url, json: true}, (err, res) => {
        if (err) return console.log(err);
        console.log(res.body)
    })
}

module.exports = getStockPrice;