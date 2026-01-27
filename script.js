const addTaskCant = document.querySelector('.addTaskCant');
const addIconCant = document.querySelector('.addIconCant');
const taskAddIcon = document.querySelector('.taskAddIcon');
let dayVal = document.querySelector(".dayVal");
let timeVal = document.querySelector(".timeVal");
const inputTask = document.querySelector(".inputTask");
const addBtn = document.querySelector(".addBtn");
const taskQueue = document.querySelector(".taskQueue");
const taskTime = document.querySelector(".taskTime");
const QueueText = document.querySelector(".QueueText");

let date = null;
let time = null;
let isEmpty = true;

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
  let myTime = new Date();

  const hours = String(myTime.getHours()).padStart(2, "0");
  const minutes = String(myTime.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};

// Update current date and time in the application
setInterval(() => {
  dayVal.innerText = dateFunc();
  timeVal.innerText = timeFunc();
});




taskAddIcon.addEventListener('click', () => {
  console.log("456123");
  addTaskCant.classList.remove('hidden');
  addIconCant.classList.add('hidden');
})

addBtn.addEventListener("click", () => {
  console.log("Click");

  if (inputTask.value.trim() === "") {
    alert("Please Enter some task!!!");
    inputTask.value = "";
  } else {
    addTask(inputTask.value.trim());
    inputTask.value = "";
  }
});

const addTask = (val) => {
  console.log("clicked");
  const task = document.createElement("li");
  task.innerHTML = `
  <div
              class="shadow-xl border-1 relative border-gray-300 px-3 py-3 flex items-center justify-around"
            >
              <div class="">
                <input type="checkbox" class="border-1" />
              </div>

              <div class="w-[80%] ">
                <p class="text-md font-semibold bg-gray-100 p-2 text-gray-900">
                  ${inputTask.value}
                </p>
                <span class="taskTime text-[11px] font-semibold text-gray-600"
                  >${dateFunc()} at ${timeFunc()}</span
                >
              </div>

              <div class="w-[10%] p-1 flex flex-col items-center justify-around ">
                <li class=" ">
                  <i
                    class="fa-solid fa-trash text-xl font-light text-red-600"></i>
                </li>

                <li>
                  <i class="fa-regular fa-keyboard"></i>
                </li>
              </div>`;

  isEmpty = false;
  isEmptyFunction();

  addTaskCant.classList.add('hidden');
  addIconCant.classList.remove('hidden');

  taskQueue.appendChild(task);

};

function isEmptyFunction() {
  if (isEmpty) {
    QueueText.innerText = "Please add some Task :)";
  } else {
    QueueText.innerText = "";
    QueueText.classList.add('hidden')
  }
}


isEmptyFunction();