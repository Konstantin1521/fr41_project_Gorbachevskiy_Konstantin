const container = document.querySelector('.main_element_book-list')
const listCategory = document.querySelectorAll('.aside_container-li')
const categoryList = document.querySelector('.aside_container-ul')
const btnFooter = document.querySelector('.footer-btn')

const apiKey = `AIzaSyCusl7IG5u49vROD01UcD0lnz5Pcyl8gjE`
const urlApi = `https://www.googleapis.com/books/v1/`

listCategory.forEach(list =>{
    list.dataset.id = list.getAttribute('value')
})

categoryList.addEventListener('click', getCategoryBook)


function getCategoryBook(e){
    e.preventDefault()

  if (e.target.dataset.id){
    getCategoryInfoHTTP(e.target.dataset.id, renderBooks)
    i = 12
  }
}

function getCategoryInfoHTTP(id, cb, n = 12){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q="subject:${id}"&key${apiKey}&printType=books&startIndex=0&maxResults=${n}&langRestrict=en`)

    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.response);
        cb(response);
      });

      xhr.addEventListener('error', () => {
        console.log('error');
      });
    
    xhr.send();
}


function getBooks(cb){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key${apiKey}&printType=books&startIndex=0&maxResults=12&langRestrict=en`)

    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.response);
        cb(response);
      });

      xhr.addEventListener('error', () => {
        console.log('error');
      });
    
    xhr.send();
}

function renderBooks(response){
    container.textContent = ''
    console.log(response);
    let fragment = ''
    response.items.forEach( book => {
        const card = cardTemplate(book)
        fragment += card
    })

    container.insertAdjacentHTML('afterbegin', fragment);
}

function cardTemplate(book){
  let arrId = [];
  let btn =  `<button class="buy_btn" data-id="${book.id}">buy now</button>`
  if(localStorage.getItem('in_the_cart')){
    arrId = JSON.parse(localStorage.getItem('in_the_cart'));
    arrId.forEach(el => {
      if( el == book.id){
        btn = `<button class="buy_btn clickBtn" data-id="${book.id}">in the cart</button>`;
      }
    })
  }
    return `
    <div class="main_books-element">
        <img class="main_books_img" src="${book.volumeInfo.imageLinks?.thumbnail || 'https://www.raumplus.ru/upload/iblock/3db/Skoro-zdes-budet-foto.jpg'}">
        <div class="main_books-element_info">
          <p class='books-element_info-authors'>${book.volumeInfo.authors}</p>
            <h3 class="books-element_info-head">${book.volumeInfo.title}</h3>
        

            <div class="grade">
                <div class="stars"></div>
                <p class="number_and_text"> ${ratingsTemplate(book.volumeInfo?.averageRating, book.volumeInfo?.ratingsCount) || ''}</p>
            </div>

            <p class="discription">
            ${truncateString(book.volumeInfo.description, 70)}
            </p>

            <p class="price">${ book.saleInfo.retailPrice?.amount || ''} ${ book.saleInfo.retailPrice?.currencyCode || ''}</p>

            ${btn}

            </div>
        </div>
    `
}

function truncateString(str, maxLength) {

    str = String(str)
    if (str.length > maxLength && str) {
      str = str.substring(0, maxLength - 1) + "...";
      return str;
    }else{
      return 'скоро будет описание'
    }

    
  }

  function ratingsTemplate(num, str){
    if(num == 1){
      return `
      <div class='img_stars-container'>
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_emptiness.svg">
        <img class="img_stars" src="../src/img/star_emptiness.svg">
        <img class="img_stars" src="../src/img/star_emptiness.svg">
        <img class="img_stars" src="../src/img/star_emptiness.svg">
        <p>${str} review</p>
      </div>
      `
    }else if(num == 2){
      return `
      <div class='img_stars-container'>
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_emptiness.svg">
        <img class="img_stars" src="../src/img/star_emptiness.svg">
        <img class="img_stars" src="../src/img/star_emptiness.svg">
        <p>${str} review</p>
      </div>
      `
    }else if(num == 3){
      return `
      <div class='img_stars-container'>
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_emptiness.svg">
        <img class="img_stars" src="../src/img/star_emptiness.svg">
        <p>${str} review</p>
      </div>
      `
    }else if(num == 4){
      return `
      <div class='img_stars-container'>
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_emptiness.svg">
        <p>${str} review</p>
      </div>
      `
    }else if(num == 5){
      return `
      <div class='img_stars-container'>
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_full.svg">
        <img class="img_stars" src="../src/img/star_full.svg">
        <p>${str} review</p>
      </div>
      `
    }
  }

getBooks(renderBooks)

btnFooter.addEventListener('click', getMoreBook)
let i = 12
function getMoreBook(){
  
  i += 6
  listCategory.forEach(btn => {
    if(btn.classList.contains('active_li')){
      getCategoryInfoHTTP(btn.dataset.id, renderBooks, i);
    }
});
}

window.addEventListener('beforeunload', function(event) {
  localStorage.clear();
  event.preventDefault();
  event.returnValue = ''; 
});

