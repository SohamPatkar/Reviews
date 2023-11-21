// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const img = document.getElementById("person-img");
const job = document.getElementById("job");
const author = document.getElementById("author");
const info = document.getElementById("info");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

let currentitem = 0;

window.addEventListener("DOMContentLoaded",()=>{
  console.log("DOM Loaded");
  var item = reviews[currentitem];
  img.src = item.img;
  job.textContent = item.job;
  author.textContent = item.name;
  info.textContent = item.text;
})

function showperson(person){
  var item = reviews[person];
  img.src = item.img;
  job.textContent = item.job;
  author.textContent = item.name;
  info.textContent = item.text;
}

nextbtn.addEventListener("click",()=>{
  currentitem++;
  if(currentitem > reviews.length - 1){
    currentitem = 0;
  }
  showperson(currentitem);
})

prevbtn.addEventListener("click",()=>{
  currentitem--;
  if(currentitem < 0){
    currentitem = reviews.length -1;
  }
  showperson(currentitem);
})

randombtn.addEventListener("click",()=>{
  var randomitem = Math.floor(Math.random() * (reviews.length - 1));
  if(currentitem == randomitem){
    randomitem = Math.floor(Math.random() * (reviews.length - 1)) ;
  }
  showperson(randomitem);
})