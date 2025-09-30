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
