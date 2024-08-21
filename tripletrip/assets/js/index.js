document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom is ready");
  const heart = document.querySelector(".heart");
  heart.addEventListener("click", () => {
    // console.log(heart.classList.value);
    if (heart.classList.value.includes("red")) {
      heart.classList.remove("red");
    } else {
      heart.classList.add("red");
    }
  });
});
