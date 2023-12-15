// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

let MainImg = document.getElementById('MainImg');
const smallImgGroup = document.querySelectorAll('.small-img-group');
const productContainer = document.querySelectorAll('.pro-container');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}
smallImgGroup.forEach((img) => {
  img.addEventListener('click', (e) => {
    MainImg.src = e.target.src;
  })
})
productContainer.forEach(product => {
  product.addEventListener('click', () => {
    window.location.href='sproduct.html'
  })
})
/*
let currentPage = 1
let limit = 8;

const pro = document.querySelectorAll('.pro');
pro.forEach(el => {
  console.log(el)
})
console.log(pro)
const list = document.querySelectorAll('#product1 .pro-container');
console.log(list)
const loadItem = () => {
  let beginGet = limit * (currentPage - 1);
  let endGet = limit * currentPage - 1;
  list.forEach((item, key) => {
    console.log(key)
    if (key >= beginGet && key <= endGet) {
      item.style.display = 'flex';
      console.log(item, key)
    } else {
      item.style.display = 'none';
    }
  })
}
loadItem()
*/