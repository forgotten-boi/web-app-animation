// tsParticles background
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: { value: 40 },
    color: { value: ["#60a5fa", "#7dd3fc", "#06b6d4"] },
    shape: { type: "circle" },
    size: { value: { min: 2, max: 6 } },
    move: { enable: true, speed: 0.8 }
  }
});

// Global particle background
tsParticles.load("particles-bg", {
  fpsLimit: 60,
  background: { color: "transparent" },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: { repulse: { distance: 100 }, push: { quantity: 4 } }
  },
  particles: {
    number: { value: 60 },
    color: { value: ["#60a5fa", "#7dd3fc", "#06b6d4"] },
    shape: { type: "circle" },
    size: { value: { min: 2, max: 6 } },
    opacity: { value: { min: 0.3, max: 0.9 } },
    move: { enable: true, speed: 1, random: true }
  }
});


// GSAP scroll animations
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.glass').forEach(card => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: { trigger: card, start: "top 80%" }
  });
});

gsap.utils.toArray('.glass, img, video, form').forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
});

document.querySelectorAll('video').forEach(video => {
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => video.pause());
});

