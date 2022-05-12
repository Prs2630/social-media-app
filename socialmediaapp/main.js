let form = document.getElementById("form");//to target form in html
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts"); 
form.addEventListener("submit", (e) => {
    e.preventDefault();//to avoid automatically refresh
    console.log("button clicked")
    formValidation()
})
let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "post cannot be blank"
        console.log("failure")

    }
    else {
        msg.innerHTML = ""
        console.log("success")
        acceptData()

    }
}
let data = {};//print data here
let acceptData = () => {//collect data here
    data["text"] = input.value;
    console.log(data)
    createPost()
}
let createPost = () => { //   uses this to target only one pieces
    posts.innerHTML += `
    <div>
            <p>${data.text}</p>
            <span class="options">
              <i onClick="editPost(this)" class="fa-regular fa-pen-to-square"></i>
              <i onClick="deletePost(this)"class="fa-solid fa-trash"></i>
           
            </span>
          </div>`
          input.value=""

}
let deletePost=(e)=>{
    e.parentElement.parentElement.remove()

}
let editPost=(e)=>{
   input.value=e.parentElement.previousElementSibling.innerHTML
   e.parentElement.parentElement.remove()

}