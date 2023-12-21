// +=========================+ scroll sections +=========================+

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const education = document.querySelector('.education');
const skills = document.querySelector('.skills');

const smallOffset = 700;
const largeOffset = 250;

function handleSectionScroll(section, top) {
  const offset = section.offsetTop - 100;
  const height = section.offsetHeight;
  const id = section.getAttribute('id');

  if (top >= offset && top < offset + height) {
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });

    const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }

    // active sections from animation on scroll
    section.classList.add('show-animate');
  } else {
    section.classList.remove('show-animate');
  }
}

// +=========================+ Scroll +=========================+

const handleScroll = (section) => {
  return () => {
    const top = window.scrollY;
    const isMobile = window.innerWidth < 768; // Adjust the breakpoint as needed

    if (isMobile) {
      // Mobile screen specific behavior
      if (top >= section.offsetTop - smallOffset) {
        section.classList.add('show-ed-animate');
      } else {
        section.classList.remove('show-ed-animate');
      }
    } else {
      // Laptop or desktop screen specific behavior
      // Add your logic here for non-mobile screens
      if (top >= section.offsetTop - largeOffset) {
        section.classList.add('show-ed-animate');
      } else {
        section.classList.remove('show-ed-animate');
      }
    }
  };
};

window.addEventListener('scroll', () => {
  const top = window.scrollY;

  sections.forEach((sec) => {
    handleSectionScroll(sec, top);
  });
});

window.addEventListener('scroll', handleScroll(skills));
window.addEventListener('scroll', handleScroll(education));

// +=================+ sticky header +=========================+
window.onscroll = () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  //remove icon and navbar links
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// +=========================+ toggel icon navbar +=========================+

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', (e) => {
  e.preventDefault();
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// +==================+ Tybed JS +=========================+

const tybed = new Typed('.multiple-text', {
  strings: ['React js', 'Node js', 'Express.js','MongoDB'],
  typeSpeed: 80,
  backSpeed: 20,
  backDelay: 1000,
  loop: true,
});

// +==================+ Make call +=========================+

document.addEventListener('DOMContentLoaded', function () {
  var callButton = document.getElementById('call-button');
  var phoneNumber = '+971569802585';

  callButton.addEventListener('click', function () {
    window.location.href = 'tel:' + phoneNumber;
  });
});
// +==================+ ScrollReveal +=========================+

// ScrollReveal({
//   reset: true,
//   distance: '800px',
//   duration: 2000,
//   delay: 200,
// });

// const about = document.querySelector('.about');

// ScrollReveal().reveal('.heading', {
//   delay: 500,
//   reset: true,
//   distance: '900px',
// });
