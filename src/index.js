document.addEventListener("DOMContentLoaded", () => {
  // your code here

let form = document.querySelector("form")
form.addEventListener("submit", (e)=>{
  e.preventDefault()
buildDescriptionToDo(e.target.querySelector('#new-task-description').value)
form.reset()
//createLabelTag()
})
})


  function buildDescriptionToDo(toDo){
    let li= document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDeleteTask)
    btn.textContent = ' x'
    li.textContent = `${toDo}`
    li.appendChild(btn)
    document.querySelector("#tasks").appendChild(li)
    // li.setAttribute('style', 'color')
    // if(li === High){
    //   li.setAttribute('style', 'red')
    // }
    console.log(toDo)
  };


  function handleDeleteTask(e){
    e.target.parentNode.remove();
  }

/*
function createLabelTag(){
  let label = document.createElement('label')
  label.textContent = "Priority"
  document.querySelector("#new-task-description").append(label)
  label.setAttribute('for', 'color')
} */



//   function buildSubmitButton(){
//     let btn = document.createElement("button")
//     btn.textContent ='submit'
//     document.querySelector("#create-task-form").appendChild(btn)
//   }
  // As a user, I should be able to type a task into the input field.
  // As a user, I should be able to click some form of a submit button.
  // As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.


