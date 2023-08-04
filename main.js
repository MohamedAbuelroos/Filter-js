let lis = document.querySelectorAll("ul li");
let imgs = Array.from(document.images);

lis.forEach(function (li) {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

function removeActive() {
  lis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active")
  });
}

function manageImgs () {
    imgs.forEach((img) => {
        img.style.display = "none"
    })
    document.querySelectorAll(this.dataset.filter).forEach((el) => {
        el.style.display = "block"
    })
}

