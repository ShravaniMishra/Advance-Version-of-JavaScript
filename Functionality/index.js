const prev = document.getElementById('prev');
const next = document.getElementById('next');
const current = document.getElementById('current');
const AsO = document.getElementById('AsO');
const DsO = document.getElementById('DsO');


let arr = []
AsO.addEventListener('click', () => {
arr.sort((a,b)=>{
    if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
append(arr)
    
})

DsO.addEventListener('click', () => {
    arr.sort((a,b)=>{
        if (a.title < b.title) {
            return 1;
          }
          if (a.title > b.title) {
            return -1;
          }
          return 0;
    })
    append(arr)
})



let page = 1
prev.addEventListener('click', () => {
    if(page>1){
        page--
        getData(page)
        current.innerHTML = page
    }
})

next.addEventListener('click', () => {
    page++
    getData(page)
    current.innerHTML = page
})


async function getData(page=1){
    try{
        let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?page=${page}&limit=8`);
        let data = await res.json()
        console.log(data)
        append(data.data)
        arr=data.data


    }
    catch(err){
        console.log(err)
    }
}
getData(page)
let box = document.getElementById("box")
function append(data){
box.innerHTML=""
data.map((elem)=>{
    
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = elem.image;

    let title = document.createElement("h2")
    title.innerHTML=elem.title;

    let price = document.createElement("p")
    price.innerHTML=elem.price;

    let description = document.createElement("p")
    description.innerHTML=elem.description;

    div.append(img,title,description,price)
    box.append(div)

})

}