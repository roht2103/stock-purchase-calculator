let buyPrice=document.getElementById("buy-price");
let stockQuantity=document.getElementById("stock-Quantity")
let currentPrice=document.getElementById("current-price")
let form=document.querySelector("form")
let img1=document.querySelector("#img1")
let img2=document.querySelector("#img2")
let img3=document.querySelector("#img3")
let img4=document.querySelector("#img4")
let img5=document.querySelector("#img5")
let img6=document.querySelector("#img6")

form.addEventListener("submit",formHandeller);



function formHandeller(e){
    e.preventDefault();
    // console.log("submitted")
    let init=Number(buyPrice.value);
    let qty=Number(stockQuantity.value);
    let curr=Number(currentPrice.value);
    calculateProfitAndLoss(init,qty,curr)
}

function calculateProfitAndLoss(initial,quantity,current){
    // console.log(initial)
    // console.log(quantity)
    // console.log(current)

    let totalAmountInvested=(initial*quantity);
    console.log("totalAmountInvested=" +totalAmountInvested)

    if (initial>current) {
        let loss=totalAmountInvested-(current*quantity)
        let lossPercentage=(loss/totalAmountInvested)*100
        let amount=current*quantity
        console.log("loss="+loss)
        console.log("lossPercentage"+lossPercentage+"%");
        console.log("amount="+amount);  
        if (lossPercentage<50) {
            img1.classList.add("off")
            img2.classList.remove("off")
            img3.classList.add("off")
            img4.classList.add("off")
            img5.classList.add("off")
            img6.classList.add("off")
        }
        else if (lossPercentage>50) {
            img1.classList.add("off")
            img2.classList.add("off")
            img3.classList.add("off")
            img4.classList.add("off")
            img5.classList.add("off")
            img6.classList.remove("off")
        }
        
    }
    else if (current>initial) {
        let profit=(current*quantity)-totalAmountInvested
        let profitPercentage=(profit/totalAmountInvested)*100
        let amount=current*quantity
        console.log("profitPercentage="+profitPercentage+"%");
        console.log("profit="+profit)
        console.log("amount="+amount);

        if (profitPercentage<50) {
            img1.classList.add("off")
            img2.classList.add("off")
            img3.classList.add("off")
            img4.classList.add("off")
            img5.classList.remove("off")
            img6.classList.add("off")
        }
        if (profitPercentage>50) {
            img1.classList.add("off")
            img2.classList.add("off")
            img3.classList.add("off")
            img4.classList.remove("off")
            img5.classList.add("off")
            img6.classList.add("off")
        }
    }
    else{
        img1.classList.add("off")
        img2.classList.add("off")
        img3.classList.remove("off")
        img4.classList.add("off")
        img5.classList.add("off")
        img6.classList.add("off")
        console.log("No pain no gain,No gain no pain")
    }
}