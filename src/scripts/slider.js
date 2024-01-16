let images = [{
    url: "../src/img/banner.svg",
  }, {
    url: "../src/img/banner2.svg",
  }, {
    url: "../src/img/banner3.svg",
  },
];

function initSlider () {
    if (!images || !images.length) return

    let sliderImages = document.querySelector('.container_slider-img')
    let sliderDots = document.querySelector('.con_slid_dot')

    initImages()
    initDots()

    function initImages(){
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`
            sliderImages.innerHTML += imageDiv;
        }) 
    }

    function initDots () {
        images.forEach((image, index) => {
            let dot = `<circle cx="${index === 0? 12: coord(index)}" cy="6" r="6" fill="${index === 0? '#9E98DC' : '#EFEEF6'}" class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></circle>`;
            sliderDots.innerHTML += dot;
          });
        sliderDots.querySelectorAll('.slider__dots-item').forEach(dot => {
            dot.addEventListener('click', function(){
                moveSlider(this.dataset.index)
            })
        })
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");

        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");

        let circle = document.getElementsByTagName('circle')

        for (let i = 0; i < circle.length; i++){
          if (circle[i].classList.contains('active')){
            circle[i].setAttribute('fill', '#9E98DC')
          }else{
            circle[i].setAttribute('fill', '#EFEEF6')
          }
        }
      
      }

      function coord(ind){
        let circle = sliderDots.lastChild
        let x = circle.getAttribute('x')
        let arr = []
        images.forEach((images, index) => {
            x += 13
            arr.push(x)
        })
        
        return arr[ind]
        
      }

      function initAutoplay() {
        setInterval(() => {
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          moveSlider(nextNumber);
        }, 5000);
      }

      initAutoplay()

}

initSlider()