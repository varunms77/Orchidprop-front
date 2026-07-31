import { useEffect } from 'react';

export function useRevealOnScroll() {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    }
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
    return () => window.removeEventListener('scroll', reveal);
  }, []);
}

export function useParallax(imageId) {
  useEffect(() => {
    function handleScroll() {
      const heroImg = document.getElementById(imageId);
      if (heroImg) {
        const scrollValue = window.scrollY;
        heroImg.style.transform = `scale(1.1) translateY(${scrollValue * 0.4}px)`;
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [imageId]);
}

export function useNavbarScroll() {
  useEffect(() => {
    function handleScroll() {
      const nav = document.getElementById('main-nav');
      if (!nav) return;
      if (window.scrollY > 100) {
        nav.classList.add('shadow-md');
        nav.style.backdropFilter = 'blur(20px)';
        nav.style.height = '64px';
      } else {
        nav.classList.remove('shadow-md');
        nav.style.backdropFilter = '';
        nav.style.height = '80px';
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
