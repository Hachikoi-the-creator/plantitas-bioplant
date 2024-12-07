const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Brown",
  "Black",
  "White",
  "Gray",
  "Cyan",
  "Magenta",
  "Teal",
  "Maroon",
  "Navy",
  "Beige",
  "Olive",
  "Lime",
  "Gold",
  "Silver",
  "Bronze",
  "Turquoise",
  "Coral",
  "Peach",
  "Lavender",
  "Mint",
  "Crimson",
  "Indigo",
  "Aqua",
];
const items = [
  "T-Shirts",
  "Shoes",
  "Hats",
  "Phones",
  "Cars",
  "Backpacks",
  "Sofas",
  "Curtains",
  "Watches",
  "Bicycles",
  "Notebooks",
  "Headphones",
  "Cups",
  "Plates",
  "Bedsheets",
  "Laptops",
  "Pillows",
  "Towels",
  "Candles",
  "Lamps",
  "Keyboards",
  "Chairs",
  "Pens",
  "Rugs",
  "Vases",
  "Jackets",
  "Handbags",
  "Gloves",
  "Swimwear",
  "Sneakers",
];

let daysObject = {
  1: { title: "Day 1's present", img: "" },
  2: { title: "Day 2's present", img: "" },
  3: { title: "Day 3's present", img: "" },
  4: { title: "Day 4's present", img: "" },
  5: { title: "Day 5's present", img: "" },
  6: { title: "Day 6's present", img: "" },
  7: { title: "Day 7's present", img: "" },
  8: { title: "Day 8's present", img: "" },
  9: { title: "Day 9's present", img: "" },
  10: { title: "Day 10's present", img: "" },
  11: { title: "Day 11's present", img: "" },
  12: { title: "Day 12's present", img: "" },
  13: { title: "Day 13's present", img: "" },
  14: { title: "Day 14's present", img: "" },
  15: { title: "Day 15's present", img: "" },
  16: { title: "Day 16's present", img: "" },
  17: { title: "Day 17's present", img: "" },
  18: { title: "Day 18's present", img: "" },
  19: { title: "Day 19's present", img: "" },
  20: { title: "Day 20's present", img: "" },
  21: { title: "Day 21's present", img: "" },
  22: { title: "Day 22's present", img: "" },
  23: { title: "Day 23's present", img: "" },
  24: { title: "Day 24's present", img: "" },
};

// helper functions
const fetchRandomImage = async () => {
  const randomIndex = getRandomIndex();
  try {
    const randomImage = `https://pixabay.com/api/?q=${colors[randomIndex]}+${items[randomIndex]}+gift&lang=en&key=47483578-c2f63a952c25ac9f78b6bf7b0`;
    const res = await fetch(randomImage);
    const resJson = await res.json();

    return resJson.hits.map((hit) => hit.webformatURL);
  } catch (error) {
    console.log("Error fetching image", error);
    return [
      "https://pixabay.com/get/g27f37790fca2553807a0405c26a90c76e0ab550c8d2752af56715f81edfbcbf425cfe7bf47ef2509dc7ec2d6765916682b9bca3d0228ca2876eef59e98251576_640.jpg",
    ];
  }
};

const getRandomItem = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const updateLocalStorage = (dayNum, imgSrc) => {
  const day = daysObject[dayNum];
  daysObject[dayNum] = { ...day, img: imgSrc };
  localStorage.setItem("data", JSON.stringify(daysObject));
};

const checkLocalStorage = () => {
  const data = localStorage.getItem("data");
  if (data) {
    daysObject = JSON.parse(data);
  }
};

const modalContainer = document.getElementById("modal-container");
const modalContent = document.getElementById("modal-content");
const closeModalButton = document.getElementById("close-modal-btn");
const modalDay = document.getElementById("modal-day");
const modalImg = document.getElementById("modal-img");

// handlers
const showModal = (dayNum, imgSrc) => {
  modalContainer.style.display = "block";
  modalImg.src = imgSrc;
  modalDay.innerHTML = `Day ${dayNum}'s present`;
};

const onDayClickHandler = async (dayNum) => {
  if (daysObject[dayNum].img) {
    return showModal(dayNum, daysObject[dayNum].img);
  }

  const res = await fetchRandomImage();
  const rndImage = getRandomItem(res);
  updateLocalStorage(dayNum, rndImage);
  showModal(dayNum, rndImage);
  renderCalendar();
};

const renderCalendar = () => {
  checkLocalStorage();
  const calendarContainer = document.getElementById("calendar");
  // reset calendar
  calendarContainer.innerHTML = "";

  for (let i = 1; i <= 24; i++) {
    const box = document.createElement("li");
    box.classList.add("calendar-box");
    box.addEventListener("click", () => onDayClickHandler(i));

    const number = document.createElement("p");
    number.innerHTML = i;

    const icon = document.createElement("i");
    if (daysObject[i].img) {
      icon.classList.add("fas", "fa-check");
      icon.classList.remove("fa-gift");
    } else {
      icon.classList.add("fas", "fa-gift");
      icon.classList.remove("fa-check");
    }

    const description = document.createElement("p");
    description.innerHTML = "Open me!";
    box.appendChild(number);
    box.appendChild(icon);
    box.appendChild(description);
    calendarContainer.appendChild(box);
  }
};

// modal setup
const getRandomIndex = () => {
  return Math.floor(Math.random() * 30);
};

modalContainer.addEventListener("click", (event) => {
  console.log("clicked");
  modalContainer.style.display = "none";
});

modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

closeModalButton.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

renderCalendar();
