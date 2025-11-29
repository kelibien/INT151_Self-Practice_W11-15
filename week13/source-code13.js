// 1. CLICK EVENT
const clickBtn = document.getElementById("clickMe");
const clickResult = document.getElementById("clickResult");

clickBtn.addEventListener("click", function () {
  clickResult.textContent = "Button clicked!";
});


// 2. INPUT EVENT
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("input", () => {
  liveOutput.textContent = liveInput.value;
});


// 3. KEYBOARD EVENTS
const keyBox = document.getElementById("keyBox");
const keyInfo = document.getElementById("keyInfo");

keyBox.addEventListener("keydown", (event) => {
  keyInfo.textContent = `Key pressed: ${event.key}`;
});


// 4. CHANGE EVENT (Select)
const colorSelect = document.getElementById("colorSelect");
const colorBox = document.getElementById("colorBox");

colorSelect.addEventListener("change", () => {
  const color = colorSelect.value;
  colorBox.style.background = color || "gray";
});

// 5. SUBMIT EVENT
const form = document.getElementById("myForm");
const nameBox = document.getElementById("formName");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nameBox.value.trim() === "") {
    formMsg.textContent = "Please enter your name.";
    return;
  }

  formMsg.textContent = `Hello, ${nameBox.value}!`;
});


// 6. EVENT BUBBLING & CAPTURING
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const bubbleInfo = document.getElementById("bubbleInfo");

outer.addEventListener("click", () => {
  bubbleInfo.textContent = "OUTER clicked (bubbling)";
});
inner.addEventListener("click", () => {
  bubbleInfo.textContent = "INNER clicked (bubbling)";
});

outer.addEventListener(
  "click",
  () => {
    console.log("OUTER capturing");
  },
  true
);


// 7. EVENT DELEGATION
const itemList = document.getElementById("itemList");
const itemInfo = document.getElementById("itemInfo");

itemList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const id = event.target.dataset.id;
    itemInfo.textContent = `You clicked item ID: ${id}`;
  }
});
