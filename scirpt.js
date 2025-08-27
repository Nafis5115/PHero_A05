const callButtons = document.querySelectorAll("#call-btn");
callButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest("#card");
    const title = card.querySelector("#title").innerText;
    const number = card.querySelector("#number").innerText;
    alert(`📞 Calling ${title}  ${number}...`);
  });
});

const heartButtons = document.querySelectorAll("#heart-btn");
heartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let heartCount = document.getElementById("heart-count").innerText++;
  });
});
