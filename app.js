const age = parseInt(prompt("나이를 입력하세요."));

if (isNaN(age) || age < 0) {
  alert("진짜 나이를 입력하세요.");
} else if (age < 18) {
  console.log("금지");
} else if (age >= 18 && age <= 50) {
  console.log("가능");
} else {
  console.log("금지");
}
