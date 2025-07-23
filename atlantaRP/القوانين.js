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
 
  
});


const circleContainer = document.querySelector('.animated-circles');

function createFloatingCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');

  const size = Math.random() * 40 + 20; // حجم بين 20 و60 بكسل
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  circle.style.left = `${Math.random() * 100}%`;
  circle.style.top = `${Math.random() * 100}%`;
  circle.style.animationDuration = `${Math.random() * 20 + 20}s`; // حركة بطيئة
  circle.style.animationDelay = `${Math.random() * 5}s`;

  circleContainer.appendChild(circle);

  // إزالة بعد 45 ثانية
  setTimeout(() => {
    circle.remove();
  }, 45000);
}

// توليد عدد قليل من الكرات
for (let i = 40; i < 50; i++) {
  createFloatingCircle();
}

// إنشاء كرة جديدة كل 8 ثوانٍ فقط
setInterval(() => {
  createFloatingCircle();
}, 8000);

function toggleRule(box) {
  const content = box.querySelector('.rule-content');
  content.classList.toggle('open');
}
