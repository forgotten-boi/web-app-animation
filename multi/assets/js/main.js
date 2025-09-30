document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS safely
  if (window.AOS) {
    try {
      AOS.init({ duration: 800, once: true });
    } catch (e) {}
  }

  // Initialize tsParticles
  if (window.tsParticles) {
    tsParticles.load("particles-bg", {
      fpsLimit: 60,
      background: { color: "transparent" },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 120 },
          push: { quantity: 3 }
        }
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
          outModes: { default: "out" }
        },
        links: {
          enable: true,
          distance: 140,
          opacity: 0.06,
          color: "#7dd3fc"
        }
      }
    });
  }

  // GSAP animations
  if (window.gsap) {
    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray(".card, .gallery-item, .hero-inner, .lead, .blob")
        .forEach((el, i) => {
          gsap.from(el, {
            opacity: 0,
            y: 40,
            duration: 0.9,
            delay: i * 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" }
          });
        });

      gsap.utils.toArray("img").forEach(img => {
        gsap.to(img, {
          y: -20,
          ease: "none",
          scrollTrigger: { trigger: img, scrub: 1 }
        });
      });

      // Gallery animation with stagger
      gsap.from(".gallery-item", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".gallery-item", start: "top 85%" }
      });
    }
  }

  // Hover-play videos
  document.querySelectorAll('video[data-hover-play="true"]').forEach(v => {
    v.addEventListener("mouseenter", () => v.play());
    v.addEventListener("mouseleave", () => v.pause());
  });

  // Modal open
  document.querySelectorAll("[data-modal-open]").forEach(btn => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-modal-open");
      const modal = document.getElementById(id);
      if (!modal) return;

      modal.classList.add("show");
      const mediaSrc = this.getAttribute("data-media");
      const container = modal.querySelector(".media");

      if (mediaSrc && container) {
        if (mediaSrc.endsWith(".mp4")) {
          container.innerHTML =
            `<video controls autoplay style="width:100%;height:100%;object-fit:cover">
               <source src="${mediaSrc}" type="video/mp4">
             </video>`;
        } else if (/youtube|youtu\.be/.test(mediaSrc)) {
          container.innerHTML =
            `<iframe src="${mediaSrc}" 
                     style="width:100%;height:480px;border:0" 
                     allowfullscreen></iframe>`;
        } else {
          container.innerHTML =
            `<img src="${mediaSrc}" style="width:100%;height:auto;display:block"/>`;
        }
      }
    });
  });

  // Modal close
  document.querySelectorAll(".modal-close").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      modal.classList.remove("show");

      // Clear media when modal is closed (avoid audio/video leaks)
      const container = modal.querySelector(".media");
      if (container) container.innerHTML = "";
    });
  });
});
