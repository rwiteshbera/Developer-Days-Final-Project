// Grab the news-accordion element
const newsAccordion = document.getElementById("news-accordion");

// Parameters for the request
let source = 'bbc-news';
const apiKey = "c34f8fddeb7f4354971002c49add355b";

// Ajax request
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines/sources=${source}&apiKey=${apiKey}`, true);
xhr.getResponseHeader("Content-Type", "application/json");

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let jsonData = JSON.parse(this.responseText);
        console.log(jsonData);
    }
    else {
        console.log("Some error occured");
    }
}
xhr.send();

let news = `<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingOne">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
    Accordion Item #1
  </button>
</h2>
<div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
  data-bs-parent="#accordionFlushExample">
  <div class="accordion-body">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, iure. Veniam facilis molestiae
    dolorem reiciendis laborum eveniet, numquam laboriosam. Aperiam quae fugit ipsum cum pariatur blanditiis,
    itaque nobis totam. Voluptatibus dicta beatae voluptates voluptas nulla officiis dignissimos perspiciatis
    alias, iure ipsum amet placeat at, accusamus adipisci a ratione blanditiis libero rem suscipit, eos quam.
    Quaerat, natus molestiae minus a animi sapiente reiciendis libero aliquam minima quibusdam at quia,
    inventore aperiam dolore, facilis eius error ex nam necessitatibus perspiciatis ad officia nobis nisi
    repellendus. Perspiciatis voluptas reprehenderit deleniti nulla voluptate, numquam rem repudiandae aut
    quas maiores quaerat nam necessitatibus ad aperiam.
  </div>
</div>`;
