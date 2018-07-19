var shopper = {
    shopperName: "Dillon",
    groceryCart: ["apples", "bananas", "candy", "soda"],
    quantity: 7,
    paid: true,
    sentence:
    function (){
        return this.shopperName + " " + "purchased" + this.groceryCart[0];
    }

};

console.log(shopper)
console.log(shopper.sentence())