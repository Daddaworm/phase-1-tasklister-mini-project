document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById('new-task-description');
  const submitButton = input.nextElementSibling;
  const ul = document.getElementById('tasks');

submitButton.addEventListener('click', function(e){
  const li = document.createElement('li'); // creates <li></li>
  const inputText = input.value;
  li.innerHTML = inputText
  ul.appendChild(li);
  e.preventDefault()
})

})






//### Deliverables

//* As a user, I should be able to type a task into the input field.
///* As a user, I should be able to click some form of a submit button.
//* As a user, I expect to see the task string that I provided appear in the DOM
//  after the submit button has been activated
