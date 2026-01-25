let dayVal = document.querySelector(".dayVal");
let timeVal = document.querySelector(".timeVal");
const inputTask = document.querySelector('.inputTask');
const addBtn = document.querySelector('.addBtn');
const taskQueue = document.querySelector('.taskQueue');




// Shows current time and date 
const timeDate = () => {
  let myDate = new Date();
  let customDate = myDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  const hours = String(myDate.getHours()).padStart(2, "0");
  const minutes = String(myDate.getMinutes()).padStart(2, "0");

  dayVal.innerText = customDate;
  timeVal.innerText = `${hours}:${minutes}`;

};


addBtn.addEventListener('click', () => {
  console.log('Click')

  if (inputTask.value.trim() === "") {
    alert('Please Enter some task!!!')
    inputTask.value = "";
  } else {
    addTask(inputTask.value.trim());
    inputTask.value = "";
  }

})


const addTask = (val) => {
  console.log("clicked");
  const task = document.createElement('li');
  task.classList.add('border-1','p-2')
  task.innerText = val;
  taskQueue.appendChild(task);
}



// Calling timeDate function at every mileseconds
setInterval(timeDate, 100);


