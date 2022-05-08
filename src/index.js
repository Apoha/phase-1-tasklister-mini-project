document.addEventListener("DOMContentLoaded", () => {
  // your code here

let form = document.querySelector("form")
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  //debugger
buildDescriptionToDo(e.target.querySelector('#new-task-description').value, e.target["color"].value)
form.reset()
//createLabelTag()
})
})


  function buildDescriptionToDo(toDo, color){
    let li= document.createElement('li')
    let btn = document.createElement('button')
    let edit = document.createElement('button')
    btn.addEventListener('click', handleDeleteTask)
    edit.addEventListener('click', handleEdit)
    btn.textContent = ' x'
    edit.textContent = ' edit'
    li.textContent = `${toDo}`
    li.appendChild(btn)
    li.appendChild(edit)
    document.querySelector("#tasks").appendChild(li)
    li.setAttribute('style', `color:${color};`)

    console.log(toDo)
  };

  function handleEdit(e){
/*roadMap
1- grab the li text using documentquerySe...
2- add text from li to the input field
3- remove the current li
*/
  console.log(e.target.parentNode.remove())

}

  function handleDeleteTask(e){
    e.target.parentNode.remove();
  }



  const colorSelection = document.querySelector("#color");
  console.log(colorSelection);
  colorSelection.addEventListener("change", colorSetting)


  function colorSetting(e){
    console.log("we are red, yellow and green")
    console.log(e)
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


