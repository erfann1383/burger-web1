const dots = document.querySelector(".dots") as HTMLSpanElement;
const moreText = document.querySelector(".more-text") as HTMLSpanElement;
const btn = document.querySelector(".see-more-btn") as HTMLSpanElement;

btn?.addEventListener("click", () => {
  if (moreText?.style.display === "inline") {
    moreText.style.display = "none";
    dots.style.display = "inline";
    btn.innerText = "see more";
  } else {
    moreText.style.display = "inline";
    dots.style.display = "none";
    btn.innerText = "see less";
  }
});


const colors = ["#fad7f1" , "#c6d7f3" , "#c8f0f7" , "c0f8de" , "fec5b8" , "fec5ce"];

let index = 0;

setInterval(()=>{
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}, 1000)
