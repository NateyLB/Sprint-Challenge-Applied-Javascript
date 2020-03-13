/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel(){
  //select the carousel container
  const carouselContainer = document.querySelector(".carousel-container")
  //create the carousel
  const carousel = document.createElement('div');
  carousel.classList.add("carousel");
  carouselContainer.appendChild(carousel);

  const leftButton = document.createElement('div');
  leftButton.classList.add("left-button");
  leftButton.textContent = "<";
  carousel.appendChild(leftButton);
  //display the first image
  const img1 = document.createElement('img');
  img1.setAttribute('src', "./assets/carousel/mountains.jpeg");
  img1.style.display = 'block';
  carousel.appendChild(img1);

  const img2 = document.createElement('img');
  img2.setAttribute('src', "./assets/carousel/computer.jpeg");
  carousel.appendChild(img2);

  const img3 = document.createElement('img');
  img3.setAttribute('src', "./assets/carousel/trees.jpeg");
  carousel.appendChild(img3);

  const img4 = document.createElement('img');
  img4.setAttribute('src', "./assets/carousel/turntable.jpeg");
  carousel.appendChild(img4);

  const rightButton = document.createElement('div');
  rightButton.classList.add("right-button");
  rightButton.textContent = ">"
  carousel.appendChild(rightButton);

  const imgArray = [
    img1,
    img2,
    img3,
    img4
  ];
  //set index equal to zero
  var i = 0;
  //event listener for right click, increases index of img variable array, advances to the next image
  rightButton.addEventListener('click', (event) => {
    if(i>=3){
      i = 3;
    }
    else {
      ++i
      imgArray[i].style.display = 'block';
    let f = i-1;
    imgArray[f].style.display = 'none';
    console.log(`${i} inside of right`)
    }
  });
  //event listener for left click, decreases index of img variable array, goes bac to the previous image

  leftButton.addEventListener('click', (event) => {
   if(i<=0){
    i = 0;
   }

   else{
     --i
     let f = i+1
    imgArray[i].style.display = 'block';
    imgArray[f].style.display = 'none';
    console.log(`${i} inside of left`)   }
   });

  return carousel
}

createCarousel();