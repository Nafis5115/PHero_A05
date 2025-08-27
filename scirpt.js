const callButtons = document.querySelectorAll("#call-btn");
callButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest("#card");
    const title = card.querySelector("#title").innerText;
    const number = card.querySelector("#number").innerText;

    let coin = document.getElementById("coin").innerText;

    if (coin == 0) {
      alert("❌ You don't have enough coin");
    } else {
      document.getElementById("coin").innerText =
        document.getElementById("coin").innerText - 20;
      alert(`📞 Calling ${title}  ${number}...`);
    }
  });
});

const heartButtons = document.querySelectorAll("#heart-btn");
heartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("heart-count").innerText++;
  });
});

const copyButtons = document.querySelectorAll("#copy-btn");
copyButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = this.closest("#card");
    const numberText = card.querySelector("#number").innerText.trim();
    const textarea = document.createElement("textarea");
    textarea.value = numberText;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  });
});
