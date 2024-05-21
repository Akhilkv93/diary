const array = [
  {
    year: 2024,
    month: "January",
    id: 1,
    heading: "New Year Resolutions",
    content: "This year I will focus on my health and career goals...",
  },
  {
    year: 2024,
    month: "February",
    id: 2,
    heading: "Valentine’s Day",
    content: "Spent a wonderful day with my loved ones...",
  },
  {
    year: 2024,
    month: "March",
    id: 3,
    heading: "Spring Break",
    content: "Went on a trip to the mountains with friends...",
  },
  {
    year: 2024,
    month: "April",
    id: 4,
    heading: "Easter Celebration",
    content: "Had an amazing Easter with family, lots of fun and food...",
  },
  {
    year: 2024,
    month: "May",
    id: 5,
    heading: "Work Milestone",
    content: "Achieved a major milestone at work, feeling proud...",
  },
  {
    year: 2024,
    month: "June",
    id: 6,
    heading: "Summer Vacation",
    content: "Visited the beach and enjoyed a relaxing vacation...",
  },
  {
    year: 2024,
    month: "July",
    id: 7,
    heading: "Independence Day",
    content: "Celebrated Independence Day with fireworks and BBQ...",
  },
  {
    year: 2024,
    month: "August",
    id: 8,
    heading: "Back to School",
    content: "Kids are back to school, busy with preparations...",
  },
  {
    year: 2024,
    month: "September",
    id: 9,
    heading: "Autumn Begins",
    content: "Started to feel the crisp autumn air, enjoying the change...",
  },
  {
    year: 2024,
    month: "October",
    id: 10,
    heading: "Halloween",
    content: "Had a spooky Halloween party with friends...",
  },
];

let diaries = document.querySelector(".diaries");
let container = document.querySelector("body");
let themeButtons = document.querySelectorAll(".theme-button");
let image = document.querySelector(".img");

let newButton = document.querySelector(".new-button");
let modelContainer = document.querySelector(".model-container");
let model = document.querySelector(".model");
let closeButton = document.querySelector(".close");
let modelOpen = false;

// DOM content loaded
window.addEventListener("DOMContentLoaded", () => {
  image.style.background = `url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`;
  image.style.backgroundSize = "cover";
  image.style.backgroundPosition = "top";
  createDiary();
});

// Theme button
themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.dataset.theme) {
      case "blue":
        btn.classList.toggle("active");
        container.style.backgroundColor = "#51a0cb";
        image.style.background = `url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`;
        break;
      case "red":
        btn.classList.toggle("active");
        container.style.backgroundColor = "rgb(189, 95, 110)";
        image.style.background = `url('https://images.unsplash.com/photo-1508020268086-b96cf4f4bb2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBpbmslMjBza3l8ZW58MHx8MHx8fDA%3D')`;

        image.style.backgroundSize = "cover";
        image.style.backgroundPosition = "center";
        break;
      case "grey":
        btn.classList.toggle("active");
        container.style.backgroundColor = "gray";
        image.style.background = `url('https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXklMjBza3l8ZW58MHx8MHx8fDA%3D')`;
        image.style.backgroundSize = "cover";
        image.style.backgroundPosition = "top";
        break;
      default:
        break;
    }
  });
});

newButton.addEventListener("click", () => {
  modelContainer.style.display = "block";
  model.style.display = "flex";
});

modelContainer.addEventListener("click", () => {
  closeModel();
});

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  closeModel();
});

model.addEventListener("submit", (e) => {
  e.preventDefault();
  var title = e.target[1].value;
  var entry = e.target[2].value;

  e.target[1].value = null;
  e.target[2].value = null;

  let year = 2024;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[new Date().getMonth()];

  let obj = {
    year: 2024,
    month: month,
    id: 6,
    heading: title,
    content: entry,
  };
  array.push(obj);

  closeModel();
  createDiary();
});

function closeModel() {
  modelContainer.style.display = "none";
  model.style.display = "none";
}

function createDiary() {
  array.map((item) => {
    var template = `<div class="diary">
              <div class="date">
                <h2>${item.heading}</h2>
              </div>
              <div class="content">
                <h4>${item.year} <span>${item.month}</span></h4>  
                <p>${item.content}</p>
              </div>
            </div>`;
    diaries.innerHTML = template + diaries.innerHTML;
  });
}
