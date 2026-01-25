let dayVal = document.querySelector(".dayVal");
let timeVal = document.querySelector(".timeVal");
const inputTask = document.querySelector('.inputTask');
const addBtn = document.querySelector('.addBtn');
const taskQueue = document.querySelector('.taskQueue');
const taskTime = document.querySelector('.taskTime');



let date = null;
let time = null;


// Shows current time and date 
const dateFunc = () => {
  let myDate = new Date();
  let customDate = myDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });


  return customDate;

};


const timeFunc = () => {

  let myTime = new Date;

  const hours = String(myTime.getHours()).padStart(2, "0");
  const minutes = String(myTime.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;

}


// Update current date and time in the application
setInterval(() => {
  dayVal.innerText = dateFunc();
  timeVal.innerText = timeFunc();
})




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
  task.innerHTML = `
  <div class="border-1 px-1 py-2 flex justify-around items-center">
              <div>
                <p class=" text-md font-semibold text-gray-900">
                  ${inputTask.value}
                </p>
                <span class="taskTime text-[11px] font-semibold text-gray-600"
                  >${dateFunc()} at ${timeFunc()}</span
                >
              </div>

              <div class="">
                <input type="checkbox" class="border-1" />
              </div>
            </div>`;

  taskQueue.appendChild(task);
}






