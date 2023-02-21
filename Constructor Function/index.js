function NikePrdoduct(n,p){
    this.name=n;
    this.price=p;
}

let arr=[]
function Product(e){
    e.preventDefault();
    let x = document.querySelector("#Const")
    let name=form.name.value;
    let price=form.price.value;
    let prod1=new NikePrdoduct(name,price)
    arr.push(prod1)
    console.log(arr)
    
}