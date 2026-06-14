function checkCode() {
  let code = document.getElementById("code").value;
  let result = document.getElementById("result");

  if (code.length !== 5) {
    result.innerText = "❌ Please enter 5-digit code";
  } else {
    result.innerText = "✅ Demo verification successful (fake UI)";
  }
}