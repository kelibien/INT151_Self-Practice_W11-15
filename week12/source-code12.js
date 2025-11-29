// 1. TODO LIST
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.addEventListener("click", () => li.remove());

  li.appendChild(del);
  todoList.appendChild(li);

  todoInput.value = "";
});


// 2. LIVE SEARCH FILTER
const searchBox = document.getElementById("searchBox");
const items = document.querySelectorAll("#nameList li");

searchBox.addEventListener("input", () => {
  const text = searchBox.value.toLowerCase();
  items.forEach(li => {
    const name = li.textContent.toLowerCase();
    li.style.display = name.includes(text) ? "" : "none";
  });
});


// 3. CHARACTER COUNTER
const textBox = document.getElementById("textBox");
const count = document.getElementById("count");
const limit = 50;

textBox.addEventListener("input", () => {
  const length = textBox.value.length;
  count.textContent = length;

  if (length >= limit - 5) {
    count.classList.add("warning");
  } else {
    count.classList.remove("warning");
  }
});


// 4. THEME SWITCHER
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});


// 5. FORM VALIDATION-
const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const age = document.getElementById("age");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value.trim().length < 3) {
    msg.textContent = "Username must be at least 3 characters.";
    return;
  }

  if (+age.value <= 0) {
    msg.textContent = "Age must be greater than 0.";
    return;
  }

  msg.textContent = "";
  alert("Form submitted successfully!");
});
