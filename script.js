//  Everything is in the Console only

let shownCards = document.getElementById("cards")

async function getMenu() {
    let response = await fetch("https://free-food-menus-api-production.up.railway.app/burgers")
    let result = await response.json()
    console.log(result)
    // resolve(result)
    result.map((item) => {
        cards.innerHTML += `
        <div class='indivual'>
            <img class='img' src=${item?.img} alt=""/>
            <h2>${item.name}</h2>
            <p>${item.country}</p>
            <p>${item.dsc}</p>
            <div class='price-rate'>
                <h5>Price: ${item.price}</h5>
                <h5>Rate: ${item.rate} &#9733;
                </h5>
            </div>
        </div>`
    })
}
getMenu()



async function takeOrder() {
    let response = await fetch("https://free-food-menus-api-production.up.railway.app/burgers")
    let result = await response.json()
    let array = []

    for (let i = 0; i < 3; i++) {
        let burgers = [Math.floor(Math.random() * result.length)];
        array.push(result[burgers])
        // console.log(burgers)
        // console.log(array)
    }
    let selectBurgers = { result: array }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(selectBurgers)
        }, 2500)
    })
}


let orderPreparation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 4500)
    })
}


let payOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true })
        }, 6000)
    })
}


let ThankYou = () => {
    // if (paid) {
    alert("Thank You for Order!")
    console.log("Thank You");
    // }
}

async function myAsyncFunction() {

    try {
        let order = await takeOrder()
        console.log("Your Order is Processing...")
        console.log(order)

        let order_status = await orderPreparation()
        if (order_status) {
            console.log("Processing Your Payment...")
            console.log(order_status)
        }
        let pay_order = await payOrder()
        console.log(pay_order)

        if (pay_order) {
            ThankYou();
        }
    }
    catch (e) {
        console.log(e)
    }
}

myAsyncFunction()

