// API ที่ใช้ฝึก
const API = "https://jsonplaceholder.typicode.com/users";

// Elements
const loadBtn = document.getElementById("loadBtn");
const userList = document.getElementById("userList");
const loading = document.getElementById("loading");

const searchBox = document.getElementById("searchBox");
const searchResult = document.getElementById("searchResult");

const addUserBtn = document.getElementById("addUserBtn");
const newName = document.getElementById("newName");
const newEmail = document.getElementById("newEmail");
const addMsg = document.getElementById("addMsg");

const errorBtn = document.getElementById("errorBtn");
const errMsg = document.getElementById("errMsg");

// 1. GET data + Loading + Render
loadBtn.addEventListener("click", async () => {
  loading.textContent = "Loading...";
  userList.innerHTML = "";

  try {
    const res = await fetch(API);
    const data = await res.json();

    loading.textContent = "";

    data.forEach(u => {
      const li = document.createElement("li");
      li.textContent = `${u.name} (${u.email})`;
      userList.appendChild(li);
    });

  } catch (err) {
    loading.textContent = "Failed to load data.";
  }
});

// 2. Search (filter) users
searchBox.addEventListener("input", async () => {
  const text = searchBox.value.toLowerCase();

  const res = await fetch(API);
  const data = await res.json();

  const filtered = data.filter(user =>
    user.name.toLowerCase().includes(text)
  );

  searchResult.innerHTML = "";

  filtered.forEach(u => {
    const li = document.createElement("li");
    li.textContent = u.name;
    searchResult.appendChild(li);
  });
});

// 3. POST: Add new user
addUserBtn.addEventListener("click", async () => {
  if (newName.value.trim() === "" || newEmail.value.trim() === "") {
    addMsg.textContent = "Please fill all fields.";
    return;
  }

  const newUser = {
    name: newName.value,
    email: newEmail.value
  };

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    });

    const result = await res.json();
    addMsg.textContent = `User added: ID ${result.id}`;

  } catch (err) {
    addMsg.textContent = "Failed to add user.";
  }
});

// 4. Error Handling
errorBtn.addEventListener("click", async () => {
  errMsg.textContent = "";

  try {
    const bad = await fetch("https://jsonplaceholder.typicode.com/xxx");
    if (!bad.ok) throw new Error("API failed");

  } catch (err) {
    errMsg.textContent = "API error: cannot fetch data.";
  }
});
