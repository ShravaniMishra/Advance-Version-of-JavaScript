let h2=document.getElementById("timer")
let count=0
function counter(){
    count++
    h2.innerText="Count-Down : "+count

    if(count===60){
        clearInterval(x)
    }
}
let x = setInterval(counter,1000)