const form = document.getElementById('form');
const input = document.getElementById('input');
const msg = document.getElementById('errorMsg');
const posts = document.getElementById('posts');

form.addEventListener("submit", (e) => {
    e.preventDefault()
    operation()
})



let operation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be empty!"

    }
    else {
        msg.innerHTML = ""
        acceptData()

    }

}

// * storing data in an object

const data = {};

const acceptData = () => {
    data["post"] = input.value;
    // console.log(data);
    createPost()

}

// * create post function

const createPost = () => {
    posts.innerHTML +=

        `<div>
    <p>${data.post}</p>
    <span class="options">
      <i onClick = "updatePost(this)" class="fa-solid fa-pen-to-square"></i>
      <i onClick = "deletePost(this)" class="fa-solid fa-trash"></i>
    </span>
  </div>
    `
    input.value = ""

}

// * delete function 

const deletePost = (e) => {
    console.log('deletePost');
    e.parentElement.parentElement.remove()
}


// * update post


const updatePost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove()

}