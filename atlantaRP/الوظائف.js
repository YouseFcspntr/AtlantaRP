const boxes = document.querySelectorAll('.box');
const scrollButton = document.querySelector('.scroll-to-top');
const section2 = document.querySelector('#section2');

window.addEventListener('scroll', () => {
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const triggerBottom = window.innerHeight * 0.9;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    }
  });


  
const navbar = document.querySelector('.navbar');
const triggerHeight = 200; // متى يظهر الشريط

window.addEventListener('scroll', () => {
  if (window.scrollY > triggerHeight) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
});



  if (window.scrollY + window.innerHeight >= section2.offsetTop + 100) {
    scrollButton.style.display = 'block';
    scrollButton.style.animation = 'slideUp 0.5s ease-out forwards';
    scrollButton.style.opacity = 1;
  } else {
    scrollButton.style.display = 'none';
    scrollButton.style.opacity = 0;
  }

  if (window.scrollY === 0) {
    scrollButton.style.display = 'none';
  }
 
//هنا صندوق حالة 

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

let players = []; // هنا يتم تحديث قائمة اللاعبين

// endpoint يرجع قائمة اللاعبين
app.get('/players', (req, res) => {
  res.json(players);
});

// محاكاة تحديث اللاعبين كل فترة (في الحقيقة هنا لازم تجيبهم من FiveM)
setInterval(() => {
  // مثال عشوائي
  players = [
    {
      name: "Ali#1234",
      connectedTime: Math.floor(Math.random() * 600),
      ping: Math.floor(Math.random() * 100)
    },
    {
      name: "Sara#9988",
      connectedTime: Math.floor(Math.random() * 1000),
      ping: Math.floor(Math.random() * 80)
    }
  ];
}, 5000);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

  
  
});


