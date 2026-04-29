/* Simyu Cleantech - App Logic */

// Real team data from simyu.tech
const teamMembers = [
  {
    name: 'RAJEEV THORAT',
    role: 'President & CEO',
    bio: 'Serial Entrepreneur | Founder | Inventor | Patent Owner',
    img: 'https://img1.wsimg.com/isteam/ip/be1fcaf7-ad77-4e21-b36a-15d33abe8392/%20RAJEEV%20THORAT.webp/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg=true'
  },
  {
    name: 'ALOK PANDIT',
    role: 'Co-founder & Board Member',
    bio: 'Serial Entrepreneur | Process Control & Optimization Expert',
    img: 'https://img1.wsimg.com/isteam/ip/be1fcaf7-ad77-4e21-b36a-15d33abe8392/AlokPandit.jpg/:/cr=t:1.16%25,l:2.61%25,w:94.78%25,h:89.29%25/rs=w:365,h:365,cg=true,m'
  },
  {
    name: 'PRASHANT KULKARNI',
    role: 'Co-founder & Board Member',
    bio: 'Software Technology Leader | Digital Infrastructure Strategist | Investor',
    img: 'https://img1.wsimg.com/isteam/ip/be1fcaf7-ad77-4e21-b36a-15d33abe8392/PrashantKulkarni.jpg/:/cr=t:8.97%25,l:22.72%25,w:60.24%25,h:45.18%25/rs=w:365,h:365,cg=true,m'
  },
  {
    name: 'ANANT PANVALKAR',
    role: 'Board Member',
    bio: 'Regional Manager @ MP Engineers | Renewables Expert | Entrepreneur | Investor',
    img: 'https://img1.wsimg.com/isteam/ip/be1fcaf7-ad77-4e21-b36a-15d33abe8392/anant.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg=true'
  },
  {
    name: 'CHETAN CHAUDHARI',
    role: 'Board Member',
    bio: 'Principal Product Manager @ PegaSystems | Technologist | Entrepreneur | Investor',
    img: 'https://img1.wsimg.com/isteam/ip/be1fcaf7-ad77-4e21-b36a-15d33abe8392/chetan-5e54816.jpg/:/cr=t:11%25,l:0%25,w:100%25,h:70.29%25/rs=w:365,h:365,cg=true'
  },
  {
    name: 'LALIT SHINDE',
    role: 'Board Member',
    bio: 'CRO @ Sequretek | Entrepreneur | Executive Coach | Technology Leader | Investor',
    img: 'https://img1.wsimg.com/isteam/ip/be1fcaf7-ad77-4e21-b36a-15d33abe8392/Lalit.jpg/:/cr=t:11.79%25,l:5.36%25,w:89.29%25,h:69.03%25/rs=w:365,h:365,cg=true,m'
  },
  {
    name: 'ADAM LEAVER',
    role: 'Director - UK',
    bio: 'Finance Expert | Business Strategy Specialist | Entrepreneur',
    img: 'https://img1.wsimg.com/isteam/ip/be1fcaf7-ad77-4e21-b36a-15d33abe8392/ADAM%20LEAVER%20-%20AMBCS.webp/:/cr=t:5.36%25,l:5.36%25,w:89.29%25,h:89.29%25/rs=w:365,h:365,cg=true,m'
  },
  {
    name: 'SANTOSH SALVI',
    role: 'Director - USA',
    bio: 'Serial Entrepreneur | Investor | NH State Rep | Educationist | Career Coach',
    img: 'https://img1.wsimg.com/isteam/ip/be1fcaf7-ad77-4e21-b36a-15d33abe8392/santosh_salvi.jpg/:/cr=t:2.83%25,l:2.83%25,w:94.34%25,h:94.34%25/rs=w:365,h:365,cg=true,m'
  },
  {
    name: 'ASHA THOTANGARE',
    role: 'Director - USA',
    bio: 'Product Manager | SaaS Technologist | Data Management | Investor',
    img: 'https://img1.wsimg.com/isteam/ip/be1fcaf7-ad77-4e21-b36a-15d33abe8392/Studio-Project.png/:/cr=t:1.96%25,l:0%25,w:100%25,h:75%25/rs=w:365,h:365,cg=true'
  },
  {
    name: 'SUBODH RAUTMARE',
    role: 'Director - India',
    bio: 'Innovative Technology Solutions Expert | IOT and Power Electronics Pioneer',
    img: 'https://img1.wsimg.com/isteam/ip/be1fcaf7-ad77-4e21-b36a-15d33abe8392/subodh.png/:/cr=t:12.28%25,l:8.63%25,w:80.65%25,h:73.52%25/rs=w:365,h:365,cg=true,m'
  },
  {
    name: 'PRADIP DUBHASHI',
    role: 'Advisor',
    bio: 'Business Development Consultant | Technology Expert',
    img: 'https://img1.wsimg.com/isteam/ip/be1fcaf7-ad77-4e21-b36a-15d33abe8392/pradip.jpg/:/cr=t:3.69%25,l:4.8%25,w:76.21%25,h:73.53%25/rs=w:365,h:365,cg=true,m'
  },
  {
    name: 'HIMANSHU BHAVE',
    role: 'Consultant',
    bio: 'Business Strategy Specialist | Investment Advisor',
    img: 'https://img1.wsimg.com/isteam/ip/be1fcaf7-ad77-4e21-b36a-15d33abe8392/bhave2.jpeg/:/cr=t:23.85%25,l:13.24%25,w:73.53%25,h:42.51%25/rs=w:365,h:365,cg=true,m'
  }
];

function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;
  grid.innerHTML = teamMembers.map(m => `
    <div class="col-md-6 col-lg-3">
      <div class="team-card">
        <img src="${m.img}" class="team-img" alt="${m.name}" loading="lazy">
        <h5 class="fw-bold mb-1 brand-dark">${m.name}</h5>
        <small class="text-success fw-semibold">${m.role}</small>
        <p class="text-muted small mt-2">${m.bio}</p>
      </div>
    </div>
  `).join('');
}

// Global smooth scroll for all anchor links with dynamic navbar offset
function smoothScrollTo(targetId, event) {
  event.preventDefault();
  const target = document.getElementById(targetId);
  const navbar = document.getElementById('navbarMain');
  if (!target) return;
  
  const navbarHeight = navbar ? navbar.offsetHeight : 80;
  const offset = navbarHeight + 30; // Extra buffer
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
  
  // Close dropdown if present
  const dropdown = document.querySelector('.contact-dropdown');
  if (dropdown && dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
    const toggle = event.target.closest('[data-bs-toggle="dropdown"]') || document.querySelector('.contact-dropdown-toggle');
    if (toggle) {
      const inst = bootstrap.Dropdown.getInstance(toggle);
      if (inst) inst.hide();
    }
  }
  
  // Close mobile menu
  const navMenu = document.getElementById('navMenu');
  if (navMenu && navMenu.classList.contains('show')) {
    bootstrap.Collapse.getInstance(navMenu)?.hide();
  }
}

// Navbar scroll effect
function initNavbar() {
  const navbar = document.getElementById('navbarMain');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Scroll reveal
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));
}

// Active nav link on scroll
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) cur = s.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + cur) a.classList.add('active');
    });
  });
}

// Mobile menu: close on link click
// Global anchor click handler
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        smoothScrollTo(href.substring(1), e);
      }
    });
  });
}

// Mobile menu: close on link click (now handled by smoothScrollTo)
function initMobileMenu() {
  // Legacy support, but smoothScrollTo handles it
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderTeam();
  initNavbar();
  initReveal();
  initActiveNav();
  initSmoothScroll(); // Global smooth scrolling
  initMobileMenu();
});
