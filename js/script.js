document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nextBtn = form.querySelector(".nextBtn");
  const backBtn = form.querySelector(".backBtn");
  const firstInputs = form.querySelectorAll(".form.first input, .form.first select");

  nextBtn.addEventListener("click", () => {
    let allFilled = true;
    firstInputs.forEach(input => {
      if (!input.value.trim()) {
        allFilled = false;
      }
    });

    if (allFilled) {
      form.classList.add("secActive");
    } else {
      alert("Please fill in all required fields.");
    }
  });

  backBtn.addEventListener("click", () => {
    form.classList.remove("secActive");
  });
});
