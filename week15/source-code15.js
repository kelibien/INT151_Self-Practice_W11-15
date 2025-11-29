//1) แสดงวัน-เวลา ปัจจุบัน
document.getElementById("showNowBtn").addEventListener("click", () => {
  let now = new Date();
  let result = `
    Year: ${now.getFullYear()}<br>
    Month: ${now.getMonth() + 1}<br>
    Day: ${now.getDate()}<br>
    Time: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}
  `;
  document.getElementById("nowResult").innerHTML = result;
});

// 2) แปลงวันเกิดเป็นอายุ
document.getElementById("calcAgeBtn").addEventListener("click", () => {
  let birth = new Date(document.getElementById("birthInput").value);
  if (!document.getElementById("birthInput").value) {
    document.getElementById("ageResult").innerText = "กรุณากรอกวันเกิด";
    return;
  }

  let today = new Date();
  let age = today.getFullYear() - birth.getFullYear();

  let hasNotBirthday =
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());

  if (hasNotBirthday) age--;

  document.getElementById("ageResult").innerText = `อายุ: ${age} ปี`;
});

//  3) คำนวณจำนวนวันระหว่างวันที่สองวัน 
document.getElementById("calcDaysBtn").addEventListener("click", () => {
  let d1 = new Date(document.getElementById("d1").value);
  let d2 = new Date(document.getElementById("d2").value);

  if (!document.getElementById("d1").value || !document.getElementById("d2").value) {
    document.getElementById("daysDiffResult").innerText = "กรุณาเลือกวันที่ให้ครบ";
    return;
  }

  let diffMs = Math.abs(d2 - d1);
  let diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  document.getElementById("daysDiffResult").innerText = `ต่างกัน: ${diffDays} วัน`;
});

//  4) Clock (อัปเดตทุกวินาที) 
function updateClock() {
  let now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString("th-TH");
}
setInterval(updateClock, 1000);
updateClock();

// 5) Countdown 
document.getElementById("startCountdown").addEventListener("click", () => {
  let target = new Date(document.getElementById("targetTime").value);

  if (!document.getElementById("targetTime").value) {
    document.getElementById("countdownResult").innerText = "กรุณากรอกเวลา";
    return;
  }

  let interval = setInterval(() => {
    let now = new Date();
    let diff = target - now;

    if (diff <= 0) {
      document.getElementById("countdownResult").innerText = "เวลาเริ่มแล้ว!";
      clearInterval(interval);
      return;
    }

    let sec = Math.floor(diff / 1000) % 60;
    let min = Math.floor(diff / 1000 / 60) % 60;
    let hrs = Math.floor(diff / 1000 / 60 / 60) % 24;
    let days = Math.floor(diff / 1000 / 60 / 60 / 24);

    document.getElementById("countdownResult").innerText =
      `${days}d ${hrs}h ${min}m ${sec}s`;
  }, 1000);
});

//  6) Stopwatch
let swInterval = null;
let swSec = 0;

function formatTime(sec) {
  let s = sec % 60;
  let m = Math.floor(sec / 60) % 60;
  let h = Math.floor(sec / 3600);

  return (
    String(h).padStart(2, "0") +
    ":" +
    String(m).padStart(2, "0") +
    ":" +
    String(s).padStart(2, "0")
  );
}

document.getElementById("startSW").addEventListener("click", () => {
  if (swInterval) return;
  swInterval = setInterval(() => {
    swSec++;
    document.getElementById("stopwatch").innerText = formatTime(swSec);
  }, 1000);
});

document.getElementById("stopSW").addEventListener("click", () => {
  clearInterval(swInterval);
  swInterval = null;
});

document.getElementById("resetSW").addEventListener("click", () => {
  swSec = 0;
  document.getElementById("stopwatch").innerText = "00:00:00";
});
