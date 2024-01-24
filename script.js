'use strict';

const images = [
    { 'id': '1', 'url':'./assets/chrono.jpg' },
    { 'id': '2', 'url':'./assets/inuyasha.jpg' },
    { 'id': '3', 'url':'./assets/tenchi.jpg' },
    { 'id': '4', 'url':'./assets/tenjhotenge.jpg' },
    { 'id': '5', 'url':'./assets/yuyuhakusho.jpg' },
    { 'id': '6', 'url':'./assets/ippo.png' },
]

const containerItems = document.querySelector('#container-items');


const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
        <img src='${image.url}'>
        </div>
        `
    })
}
loadImages(images, containerItems)
let items = document.querySelectorAll('.item');

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#next').addEventListener('click', next);