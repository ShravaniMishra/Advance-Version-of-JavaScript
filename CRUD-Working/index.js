const container = document.querySelector("#container");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let daa = Object.fromEntries(formData);
    console.log(daa)
    addData(daa)
})


const getData = async () => {
  let res = await fetch(`https://my-mock-server-tnse.onrender.com/books`);
  let data = await res.json();
  console.log(data);
  appendData(data);
};



const addData = async (data) => {
  let res = await fetch(`https://my-mock-server-tnse.onrender.com/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let resData = await res.json();
  console.log(resData);
  getData();
};

const deleteData = async (id) => {
    let res = await fetch(`https://my-mock-server-tnse.onrender.com/books/${id}`, {
      method: "DELETE"
      });
    let resData = await res.json();
    console.log(resData);
    getData();
  };

  const putData = async (id) => {
    let res = await fetch(`https://my-mock-server-tnse.onrender.com/books/${id}`, {
      method: "PUT"
      });
    let resData = await res.json();
    console.log(resData);
    getData();
  };

  
function appendData(data) {
  container.innerHTML = "";
  data.map((elem)=>{
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerText=elem.book_name;

    let p = document.createElement("p");
    p.innerText=elem.cost;

    let button = document.createElement("button");
    button.innerText="Delete";
    button.addEventListener("click",()=>{
      deleteData(elem.id)
    })
    div.append(h2,p,button)
    container.append(div);
  })
}
getData();
