async function getData(url){
    try{
        let res = await fetch(url)

        let data = await res.json()
        return data
    }
    catch(err){
        console.log(err)
    }
}

function append(data,container){
data.map((element)=>{
    let div = document.createElement("div")

    let h3 = document.createElement("h3")
    h3.innerText=element.title


    let img = document.createElement("img")
    img.src = element.image
    img.style.width="40%"

    div.append(img,h3)
    container.append(div)
})
}

export {getData,append}