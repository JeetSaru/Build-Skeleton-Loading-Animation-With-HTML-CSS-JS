/*
Skeleton Loading Animation With HTML, CSS & JS.
By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const loadings = document.querySelectorAll('.loading');
const card_imgs = document.querySelectorAll('.card figure img');
const card_desp = document.querySelector(".card-description");

function renderCard() {

    for (loading of loadings) {
        loading.classList.remove('loading');
    }

    for (card_img of card_imgs) {
        card_img.style.visibility = 'visible';
    }

    card_desp.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorem ullam non enim veniam, officia magnam expedita maiores saepe ea, praesentium quasi nobis explicabo ducimus hic exercitationem in tenetur aliquid?";
}

window.onload = () => {
    renderCard();
}
