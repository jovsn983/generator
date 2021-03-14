const picApi = document.querySelector("#pic");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

const getPicture = () => {
  fetch("https://picsum.photos/1400/1000").then((res) => {
    picApi.innerHTML = `<img src=${res.url} alt="img-picsum">`;
  });
};

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `<em>${"- " + data.author}</em>`;
      author.innerHTML = `<p>${data.content}</p>`;
    });
};

quote.addEventListener("click", () => getQuote());
document.body.addEventListener("click", () => getPicture());

getPicture();
getQuote();

// FETCH DE BASE
// fetch('https://api.quotable.io/random')
//   .then((res) => response.json())
//   .then(data =>
//     console.log(data))
