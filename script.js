const addBtn = document.querySelector(".addBtn");

let dayVal = document.querySelector(".dayVal");
// dayVal.classList.add('text-[28px], font-bold')

let timeVal = document.querySelector(".timeVal");
// timeVal.classList.add('text-[28px], font-bold')

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

setInterval(timeDate, 100);


