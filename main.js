const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.section');

let currentSection = 'Pocetna';

window.addEventListener('scroll', () => {
  sectionEls.forEach(sectionEl => {
    if (window.scrollY >= (sectionEl.offsetTop - 200)) {
      currentSection = sectionEl.id;
    }
  });

  navLinkEls.forEach(navLinkEl => {
    if (navLinkEl.href.includes(currentSection)) {
      const activeLink = document.querySelector('.active');
      if (activeLink) {
        activeLink.classList.remove('active');
      }
      navLinkEl.classList.add('active');
    }
  });
});

const navigation = document.querySelector(".primary-navigation");


if (navigation) {
  const navigationHeight = navigation.clientHeight;
  document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px");
}

const header = document.querySelector('header');
const threshold = 60;

window.onscroll = function () {
  if (window.scrollY > threshold) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}

window.addEventListener('load', scrollToTop);

function showMore(contentId) {
  var content = document.getElementById(contentId);
  var btnText = document.querySelector('#' + contentId + ' + .read-more-btn'); 
  var currentSection = content.closest('section'); 

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    btnText.innerHTML = 'Prikaži manje...';
    window.scrollBy(0, 200); 
  } else {
    content.classList.add('hidden');
    btnText.innerHTML = 'Prikaži više...';
    currentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}




function scrollToTopWithDelay() {
  setTimeout(function() {
    scrollToTop();
  }, 5); 
}

window.addEventListener('load', scrollToTopWithDelay);


const heartDOMs = document.querySelectorAll('.js-heart');

const likedStates = Array.from(heartDOMs).map(() => false);


heartDOMs.forEach((heartDOM, index) => {
  heartDOM.onclick = (event) => {
    
    likedStates[index] = !likedStates[index]; 


    const target = event.currentTarget;

    if (likedStates[index]) {

      target.classList.remove('far');
      target.classList.add('fas', 'pulse');
    } else {
  
      target.classList.remove('fas');
      target.classList.add('far');
    }
  };


  heartDOM.addEventListener('animationend', (event) => {
    event.currentTarget.classList.remove('pulse');
  });
});

// Dohvaćanje elemenata
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav_list');

// Dodavanje event listenera na hamburger ikonu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// Dohvaćanje svih elemenata s klasom .nav_link i dodavanje event listenera na svaki od njih
document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    });
});
