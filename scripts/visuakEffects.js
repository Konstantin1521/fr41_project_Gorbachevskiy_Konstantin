const container = document.querySelector('.main_element_book-list')
const listCategory = document.querySelectorAll('.aside_container-li')
const categoryList = document.querySelector('.aside_container-ul')
const navEl = document.querySelector('.container_header-nav_icons')
const p = document.querySelector('.red')

let count = 0

categoryList.addEventListener('click', getCategoryBook)

function getCategoryBook(e){
    e.preventDefault()
  if (e.target.dataset.id){
    let el = e.target
    activeClass(el)
  }
}

function getBuyBtn(e){
  e.preventDefault()

  const target = e.target

  let arrId = [];

  if(localStorage.getItem('in_the_cart')){
    arrId = JSON.parse(localStorage.getItem('in_the_cart'));
  }

  if(target.tagName === 'BUTTON'){
    arrId.push(e.target.dataset.id);
    localStorage.setItem("in_the_cart", JSON.stringify(arrId));
    newClass(target);
  }
}

function activeClass(el){
    listCategory.forEach(btn => {
        if(btn.classList.contains('active_li')){
            btn.classList.remove('active_li')        }
    });
    el.classList.add('active_li')

}

container.addEventListener('click', getBuyBtn)

function newClass(el){
  if (el.classList.contains('clickBtn')){
    el.textContent = 'buy now'
    el.classList.remove('clickBtn')
    count -= 1
    p.textContent = count
    if(count == 0){
      p.classList.remove('circleRed')
      p.textContent = ''
    }
  }else{
    el.textContent = 'in the cart'
    el.classList.add('clickBtn')
    
    count += 1
    
    p.classList.add('circleRed')
    p.textContent = count
  }
}






