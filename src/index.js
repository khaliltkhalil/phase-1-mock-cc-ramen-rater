// write your code here

fetchData();
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.name.value);
  const data = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target["new-comment"].value,
  };
  renderRamen(data);
});

function fetchData() {
  fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((data) => {
      data.forEach(renderRamen);
    });
}

function renderRamen(ramen) {
  const ramenMenu = document.querySelector("#ramen-menu");
  const ramenImg = document.createElement("img");
  ramenImg.src = ramen.image;
  ramenImg.addEventListener("click", () => {
    document.querySelector("#ramen-detail img").src = ramen.image;
    document.querySelector("#ramen-detail h2").textContent = ramen.name;
    document.querySelector("#ramen-detail h3").textContent = ramen.restaurant;
    document.querySelector("#rating-display").textContent = ramen.rating;
    document.querySelector("#comment-display").textContent = ramen.comment;
  });
  ramenMenu.appendChild(ramenImg);
}
