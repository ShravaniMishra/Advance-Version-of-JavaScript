const Prev = document.getElementById("Prev")
const next = document.getElementById("next")
const Current = document.getElementById("Current")
const As = document.getElementById("As")
const Ds = document.getElementById("Ds")
const Fs = document.getElementById("Fs")


let arr = []

Fs.addEventListener("click", () => {
    let FsArr = arr.filter(elem => elem.id > 25)
    renderData(FsArr)

})

As.addEventListener("click", () => {
    arr.sort((a, b) => {
        return a.id - b.id;
    })
    renderData(arr)
})

Ds.addEventListener("click", () => {
    arr.sort((a, b) => {
        return b.id - a.id;
    })
    renderData(arr)

})


let page = 1
Prev.addEventListener('click', () => {
    if(page>1){
        page--
        Current.textContent = page;
        getData(page)
    }

})

next.addEventListener('click', () => {
    page++
    Current.textContent = page; 
    getData(page)
})

async function getData(page=1){
    const response = await fetch(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=10`);
    const data = await response.json();
    arr = data.data

    console.log(data)
    renderData(data.data)
}
getData(page)

let container = document.getElementById('container');


function renderData(data){
    container.innerHTML=""
  data.map((el)=>{
    const player = document.createElement('div');
     let p = document.createElement('p');
     p.textContent = el.id;

     let f = document.createElement('h2');
     f.textContent = el.first_name;

     let l = document.createElement('h3');
     l.textContent = el.last_name;

    player.append(p,f,l);

    container.append(player);
    
    })
}