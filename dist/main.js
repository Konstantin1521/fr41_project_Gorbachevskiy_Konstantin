(()=>{var s={67:()=>{const s=document.querySelector(".main_element_book-list"),t=document.querySelectorAll(".aside_container-li"),e=document.querySelector(".aside_container-ul"),r=document.querySelector(".footer-btn"),n="AIzaSyCusl7IG5u49vROD01UcD0lnz5Pcyl8gjE";function i(s,t,e=12){const r=new XMLHttpRequest;r.open("GET",`https://www.googleapis.com/books/v1/volumes?q="subject:${s}"&key${n}&printType=books&startIndex=0&maxResults=${e}&langRestrict=en`),r.addEventListener("load",(()=>{const s=JSON.parse(r.response);t(s)})),r.addEventListener("error",(()=>{console.log("error")})),r.send()}function a(t){s.textContent="";let e="";t.items.forEach((s=>{const t=function(s){let t=[],e=`<button class="buy_btn" data-id="${s.id}">buy now</button>`;return localStorage.getItem("in_the_cart")&&(t=JSON.parse(localStorage.getItem("in_the_cart")),t.forEach((t=>{t==s.id&&(e=`<button class="buy_btn clickBtn" data-id="${s.id}">in the cart</button>`)}))),`\n    <div class="main_books-element">\n        <img class="main_books_img" src="${s.volumeInfo.imageLinks?.thumbnail||"https://www.raumplus.ru/upload/iblock/3db/Skoro-zdes-budet-foto.jpg"}">\n        <div class="main_books-element_info">\n          <p class='books-element_info-authors'>${s.volumeInfo.authors}</p>\n            <h3 class="books-element_info-head">${s.volumeInfo.title}</h3>\n        \n\n            <div class="grade">\n                <div class="stars"></div>\n                <p class="number_and_text"> ${function(s,t){return 1==s?`\n      <div class='img_stars-container'>\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_emptiness.svg">\n        <img class="img_stars" src="../src/img/star_emptiness.svg">\n        <img class="img_stars" src="../src/img/star_emptiness.svg">\n        <img class="img_stars" src="../src/img/star_emptiness.svg">\n        <p>${t} review</p>\n      </div>\n      `:2==s?`\n      <div class='img_stars-container'>\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_emptiness.svg">\n        <img class="img_stars" src="../src/img/star_emptiness.svg">\n        <img class="img_stars" src="../src/img/star_emptiness.svg">\n        <p>${t} review</p>\n      </div>\n      `:3==s?`\n      <div class='img_stars-container'>\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_emptiness.svg">\n        <img class="img_stars" src="../src/img/star_emptiness.svg">\n        <p>${t} review</p>\n      </div>\n      `:4==s?`\n      <div class='img_stars-container'>\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_emptiness.svg">\n        <p>${t} review</p>\n      </div>\n      `:5==s?`\n      <div class='img_stars-container'>\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <img class="img_stars" src="../src/img/star_full.svg">\n        <p>${t} review</p>\n      </div>\n      `:void 0}(s.volumeInfo?.averageRating,s.volumeInfo?.ratingsCount)||""}</p>\n            </div>\n\n            <p class="discription">\n            ${r=s.volumeInfo.description,70,(r=String(r)).length>70&&r?r=r.substring(0,69)+"...":"скоро будет описание"}\n            </p>\n\n            <p class="price">${s.saleInfo.retailPrice?.amount||""} ${s.saleInfo.retailPrice?.currencyCode||""}</p>\n\n            ${e}\n\n            </div>\n        </div>\n    `;var r}(s);e+=t})),s.insertAdjacentHTML("afterbegin",e)}t.forEach((s=>{s.dataset.id=s.getAttribute("value")})),e.addEventListener("click",(function(s){s.preventDefault(),s.target.dataset.id&&(i(s.target.dataset.id,a),c=12)})),function(s){const t=new XMLHttpRequest;t.open("GET",`https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key${n}&printType=books&startIndex=0&maxResults=12&langRestrict=en`),t.addEventListener("load",(()=>{const e=JSON.parse(t.response);s(e)})),t.addEventListener("error",(()=>{console.log("error")})),t.send()}(a),r.addEventListener("click",(function(){c+=6,t.forEach((s=>{s.classList.contains("active_li")&&i(s.dataset.id,a,c)}))}));let c=12;window.addEventListener("beforeunload",(function(s){localStorage.clear(),s.preventDefault(),s.returnValue=""}))},485:()=>{let s=[{url:"../src/img/banner.svg"},{url:"../src/img/banner2.svg"},{url:"../src/img/banner3.svg"}];!function(){if(!s||!s.length)return;let t=document.querySelector(".container_slider-img"),e=document.querySelector(".con_slid_dot");function r(s){t.querySelector(".active").classList.remove("active"),t.querySelector(".n"+s).classList.add("active"),e.querySelector(".active").classList.remove("active"),e.querySelector(".n"+s).classList.add("active");let r=document.getElementsByTagName("circle");for(let s=0;s<r.length;s++)r[s].classList.contains("active")?r[s].setAttribute("fill","#9E98DC"):r[s].setAttribute("fill","#EFEEF6")}s.forEach(((e,r)=>{let n=`<div class="image n${r} ${0===r?"active":""}" style="background-image:url(${s[r].url});" data-index="${r}"></div>`;t.innerHTML+=n})),s.forEach(((t,r)=>{let n=`<circle cx="${0===r?12:function(t){let r=e.lastChild.getAttribute("x"),n=[];return s.forEach(((s,t)=>{r+=13,n.push(r)})),n[t]}(r)}" cy="6" r="6" fill="${0===r?"#9E98DC":"#EFEEF6"}" class="slider__dots-item n${r} ${0===r?"active":""}" data-index="${r}"></circle>`;e.innerHTML+=n})),e.querySelectorAll(".slider__dots-item").forEach((s=>{s.addEventListener("click",(function(){r(this.dataset.index)}))})),setInterval((()=>{let e=+t.querySelector(".active").dataset.index;r(e===s.length-1?0:e+1)}),5e3)}()},819:()=>{const s=document.querySelector(".main_element_book-list"),t=document.querySelectorAll(".aside_container-li"),e=document.querySelector(".aside_container-ul"),r=(document.querySelector(".container_header-nav_icons"),document.querySelector(".red"));let n=0;e.addEventListener("click",(function(s){var e;s.preventDefault(),s.target.dataset.id&&(e=s.target,t.forEach((s=>{s.classList.contains("active_li")&&s.classList.remove("active_li")})),e.classList.add("active_li"))})),s.addEventListener("click",(function(s){s.preventDefault();const t=s.target;let e=[];var i;localStorage.getItem("in_the_cart")&&(e=JSON.parse(localStorage.getItem("in_the_cart"))),"BUTTON"===t.tagName&&(e.push(s.target.dataset.id),localStorage.setItem("in_the_cart",JSON.stringify(e)),(i=t).classList.contains("clickBtn")?(i.textContent="buy now",i.classList.remove("clickBtn"),n-=1,r.textContent=n,0==n&&(r.classList.remove("circleRed"),r.textContent="")):(i.textContent="in the cart",i.classList.add("clickBtn"),n+=1,r.classList.add("circleRed"),r.textContent=n))}))}},t={};function e(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return s[r](i,i.exports,e),i.exports}e.n=s=>{var t=s&&s.__esModule?()=>s.default:()=>s;return e.d(t,{a:t}),t},e.d=(s,t)=>{for(var r in t)e.o(t,r)&&!e.o(s,r)&&Object.defineProperty(s,r,{enumerable:!0,get:t[r]})},e.o=(s,t)=>Object.prototype.hasOwnProperty.call(s,t),(()=>{"use strict";e(485),e(67),e(819)})()})();