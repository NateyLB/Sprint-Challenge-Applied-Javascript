// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(headlineParam, authorParam, imgSrcParam){
    //select container for cards
    const cardContainer = document.querySelector(".cards-container");
    //create card
    const card = document.createElement('div');
    card.classList.add("card");
    cardContainer.appendChild(card);

    const headline = document.createElement('div');
    headline.classList.add("headline");
    headline.textContent = headlineParam
    card.appendChild(headline)

    const authorContainer = document.createElement('div');
    authorContainer.classList.add("author");
    card.appendChild(authorContainer);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add("img-container");
    authorContainer.appendChild(imgContainer);

    const img = document.createElement('img');
    img.setAttribute('src', imgSrcParam);
    imgContainer.appendChild(img);

    const author = document.createElement('span');
    author.textContent = `By ${authorParam}`
    authorContainer.appendChild(author);

    return card;
}
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        response.data.articles.javascript.forEach(element => {
            createCard(element.headline, element.authorName, element.authorPhoto);
        });
        response.data.articles.bootstrap.forEach(element => {
            createCard(element.headline, element.authorName, element.authorPhoto);
        });
        response.data.articles.technology.forEach(element => {
            createCard(element.headline, element.authorName, element.authorPhoto);
        });
        response.data.articles.jquery.forEach(element => {
            createCard(element.headline, element.authorName, element.authorPhoto);
        });
        response.data.articles.node.forEach(element => {
            createCard(element.headline, element.authorName, element.authorPhoto);
        });
    })
    .catch(err => {
        alert("No data coming in")
    })