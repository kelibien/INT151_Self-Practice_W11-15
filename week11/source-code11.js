/* เขียนฟังก์ชันรับคะแนนเป็นจำนวนเท่าใดก็ได้ (ไม่ fix จำนวน) แล้วคืนค่า: ผลรวม ค่าเฉลี่ย คะแนนสูงสุด คะแนนต่ำสุด ส่งกลับเป็น object */
function analyzeScores(...scores) {
  if (scores.length === 0) return { error: "No scores" };

  let sum = 0;
  let max = scores[0];
  let min = scores[0];

  for (let score of scores) {
    sum += score;
    if (score > max) max = score;
    if (score < min) min = score;
  }

  return {
    sum: sum,
    average: sum / scores.length,
    max: max,
    min: min
  };
}

console.log(analyzeScores(10, 20, 30, 40, 50));

/* เขียนฟังก์ชันเช็คความแข็งแรงของรหัสผ่านต้องมีครบตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก ตัวเลขอักขระพิเศษยาว ≥ 8 ตัว*/
function validatePassword(password) {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNum = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const longEnough = password.length >= 8;

  return {
    upper: hasUpper,
    lower: hasLower,
    number: hasNum,
    special: hasSpecial,
    length: longEnough,
    isStrong: hasUpper && hasLower && hasNum && hasSpecial && longEnough
  };
}

console.log(validatePassword("Test@123"));

/*รับประโยคมา 1 อัน → ลบคำซ้ำ → คืนประโยคใหม่*/
function removeDuplicateWords(sentence) {
  let words = sentence.toLowerCase().split(" ");
  let uniqueWords = [...new Set(words)];
  return uniqueWords.join(" ");
}

console.log(removeDuplicateWords("I love code love javascript code"));

/* สร้างเครื่องคิดเลขที่ทำได้ */
const calculator = {
  add(a, b) { return a + b; },
  subtract(a, b) { return a - b; },
  multiply(a, b) { return a * b; },
  divide(a, b) { 
    if (b === 0) return "Error: Divide by zero";
    return a / b; 
  }
};

console.log(calculator.multiply(7, 8));

/* เขียนฟังก์ชันสร้าง OTP ความยาว N */
function generateOTP(length) {
  let result = "";
  const digits = "0123456789";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * digits.length);
    result += digits[randomIndex];
  }

  return result;
}

console.log(generateOTP(6));

/*เขียนฟังก์ชัน copy object แบบ deep clone*/
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let user = { name: "Panita", scores: [10, 20, 30] };
let copy = deepClone(user);

copy.scores[0] = 99;

console.log(user.scores); // ไม่ถูกเปลี่ยน
console.log(copy.scores); 

/* มีรายชื่อใน array ให้ค้นหาชื่อที่ตรงกับ keyword */
function searchName(names, keyword) {
  return names.filter(n => n.toLowerCase().includes(keyword.toLowerCase()));
}

console.log(searchName(["Panita", "Somchai", "Ploy", "Pann"], "pan"));

/* ปีนั้นเป็น leap year หรือไม่
กฎ: หาร 4 ลงตัว → leap
แต่ถ้าหาร 100 ลงตัว ต้องหาร 400 ลงตัวด้วย */
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

console.log(isLeapYear(2024));

/* มี array ของงาน (task) ให้แสดงเฉพาะงานที่ยังไม่เสร็จ และ sort ตามความสำคัญ*/
function getPendingTasks(tasks) {
  return tasks
    .filter(t => t.done === false)
    .sort((a, b) => b.priority - a.priority);
}

const tasks = [
  { task: "Study JS", done: false, priority: 3 },
  { task: "Sleep", done: true, priority: 1 },
  { task: "Project", done: false, priority: 5 },
];

console.log(getPendingTasks(tasks));
