document.addEventListener("DOMContentLoaded", function () {
  // Init AOS if present
  try {
    AOS.init({ duration: 800, once: true });
  } catch (e) {}

  // Particles
  if (window.tsParticles) {
    tsParticles.load("particles-bg", {
      fpsLimit: 60,
      background: { color: "transparent" },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 120 },
          push: { quantity: 3 },
        },
      },
      particles: {
        number: { value: 60 },
        color: { value: ["#60a5fa", "#7dd3fc", "#7c3aed"] },
        shape: { type: "circle" },
        size: { value: { min: 2, max: 6 } },
        opacity: { value: { min: 0.22, max: 0.9 } },
        move: {
          enable: true,
          speed: 0.9,
          random: true,
          outModes: { default: "out" },
        },
        links: {
          enable: true,
          distance: 140,
          opacity: 0.06,
          color: "#7dd3fc",
        },
      },
    });
  }

  // GSAP animations
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // Animate core blocks
    gsap.utils
      .toArray(".card, .gallery-item, .hero-inner, .lead, .blob")
      .forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: i * 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

    // Parallax images
    gsap.utils.toArray("img").forEach((img) => {
      gsap.to(img, {
        y: -20,
        ease: "none",
        scrollTrigger: { trigger: img, scrub: 1 },
      });
    });

    // Gallery items stagger
    gsap.to(".gallery-item", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".gallery-item",
        start: "top 85%",
      },
    });

    // Make sure already visible items are shown
    ScrollTrigger.refresh();
  }

  // Hover video play/pause
  document.querySelectorAll("video[data-hover-play='true']").forEach((v) => {
    v.addEventListener("mouseenter", () => {
      v.play();
    });
    v.addEventListener("mouseleave", () => {
      v.pause();
    });
  });

  // Modal open
  document.querySelectorAll("[data-modal-open]").forEach((btn) => {
    btn.addEventListener("click", function () {
      var id = this.getAttribute("data-modal-open");
      var modal = document.getElementById(id);
      if (!modal) return;

      modal.classList.add("show");

      var mediaSrc = this.getAttribute("data-media");
      var container = modal.querySelector(".media");

      if (mediaSrc && container) {
        if (mediaSrc.endsWith(".mp4")) {
          container.innerHTML =
            '<video controls autoplay style="width:100%;height:100%;object-fit:cover"><source src="' +
            mediaSrc +
            '" type="video/mp4"></video>';
        } else if (
          mediaSrc.includes("youtube") ||
          mediaSrc.includes("youtu.be")
        ) {
          container.innerHTML =
            '<iframe src="' +
            mediaSrc +
            '" style="width:100%;height:480px;border:0" allowfullscreen></iframe>';
        } else {
          container.innerHTML =
            '<img src="' +
            mediaSrc +
            '" style="width:100%;height:auto;display:block"/>';
        }
      }
    });
  });

  // Modal close
  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").classList.remove("show");
    });
  });
});
