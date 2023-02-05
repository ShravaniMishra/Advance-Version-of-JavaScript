let container = document.getElementById("container")
async function getData(){
    try{
        let res = await fetch('https://fakestoreapi.com/products')
        let data = await res.json()

        append(data)
    }
    catch(err){
        console.log(err)
    }
}
getData()

function append(data){

data.map(function(elem){
    let div = document.createElement("div")
    
    let title = document.createElement("h1")
    title.innerText=elem.title

    let image = document.createElement("img")
    image.src=elem.image
    image.style.width="60%"


    let price = document.createElement("p")
    price.innerText=elem.price

    div.append(title,image,price)
    container.append(div)
})
}
