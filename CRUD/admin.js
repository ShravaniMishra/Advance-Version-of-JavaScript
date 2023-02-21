async function addPost(){

    let id = document.getElementById("id").value
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value

    let send_data = {
        id,
        title,
        author
    }

    let res = await fetch(`http://localhost:3000/posts`,{
    method : "POST",

    body: JSON.stringify(send_data),

    headers: {
         "Content-Type":"application/json"
    },
    })

    let data = await res.json()
    console.log(data)
}

async function deletePost(){
    let id = document.getElementById("delete_id").value

    let res = await fetch(`http://localhost:3000/posts/${id}`,{
        method : "DELETE",
        headers : {
            "Content-Type":"application/json",
        },
    })
    let data = await res.json()
    console.log(data)
   
}