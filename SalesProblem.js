let productProfits = [
    { name: "Product A", profit: -75 },
    { name: "Product B", profit: -70 },
    { name: "Product C", profit: 93 },
    { name: "Product D", profit: -5 },
    { name: "Product E", profit: 5 },
    { name: "Product F", profit: 29 }
];


function topProduct(productProfitArray) {
    let maxProfit = '';
    let topProduct = 0;
    
    if (productProfitArray == 0){
        topProduct = "No Data";
    }else{
        for (let i = 0; i < productProfitArray.length; i++) {
            let { name, profit } = productProfitArray[i];
    
            if (profit > maxProfit) {
                maxProfit = profit;
                topProduct = name;
            }
        }
    }
    console.log(topProduct);
};
topProduct(productProfits);

function bottomProduct(productProfitArray) {
    let minProfit = '';
    let bottomProduct = 0;

    if (productProfitArray.length == 0){
        bottomProduct = "No Data";
    } else {
        for (let i = 0; i < productProfitArray.length; i++) {
            let { name, profit } = productProfitArray[i];
    
            if (profit < minProfit) {
                minProfit = profit;
                bottomProduct = name;
            }
        }
    }
    console.log(bottomProduct);
}
bottomProduct(productProfits);

function zeroProfitProduct(producINFINItProfitArray) {
    let closestToZero = Number.POSITIVE_TY;
    let zeroProduct = '';

    if (productProfitArray.length === 0) {
        zeroProduct = "No Data";
    } else {
        for (let i = 0; i < productProfitArray.length; i++) {
            let { name, profit } = productProfitArray[i];

            if (Math.abs(profit) < Math.abs(closestToZero) ||
                (Math.abs(profit) === Math.abs(closestToZero) && profit > 0)
            ) {
                closestToZero = profit;
                zeroProduct = name;
            }
        }
    }
    console.log(zeroProduct);
}

zeroProfitProduct(productProfits);

