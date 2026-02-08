import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fromUp = { y: 48, opacity: 0 };
const tweenDefaults = { duration: 0.6, ease: "power2.out" };

export function useScrollAnimations() {
  useEffect(() => {
    // Hero: animate on load (no scroll)
    gsap.from(".hero-badge", { ...fromUp, duration: 0.6, delay: 0.1 });
    gsap.from(".hero-title", { ...fromUp, duration: 0.8, delay: 0.25 });
    gsap.from(".hero-subtitle", { ...fromUp, duration: 0.7, delay: 0.45 });
    gsap.from(".hero-cta", { ...fromUp, duration: 0.6, delay: 0.65 });

    // About section
    gsap.from(".about-badge", {
      ...fromUp,
      scrollTrigger: { trigger: ".about-section", start: "top 85%" },
      ...tweenDefaults,
    });
    gsap.from(".about-title", {
      ...fromUp,
      scrollTrigger: { trigger: ".about-section", start: "top 85%" },
      ...tweenDefaults,
      delay: 0.1,
    });
    gsap.from(".about-text", {
      ...fromUp,
      scrollTrigger: { trigger: ".about-section", start: "top 85%" },
      ...tweenDefaults,
      delay: 0.2,
    });
    gsap.from(".about-list", {
      ...fromUp,
      scrollTrigger: { trigger: ".about-section", start: "top 85%" },
      ...tweenDefaults,
      delay: 0.35,
    });

    // Services section
    gsap.from(".services-badge", {
      ...fromUp,
      scrollTrigger: { trigger: ".services-section", start: "top 85%" },
      ...tweenDefaults,
    });
    gsap.from(".services-title", {
      ...fromUp,
      scrollTrigger: { trigger: ".services-section", start: "top 85%" },
      ...tweenDefaults,
      delay: 0.1,
    });
    gsap.fromTo(
      ".services-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: ".services-section", start: "top 80%" },
      }
    );

    // Reviews section
    gsap.from(".reviews-badge", {
      ...fromUp,
      scrollTrigger: { trigger: ".reviews-section", start: "top 85%" },
      ...tweenDefaults,
    });
    gsap.from(".reviews-title", {
      ...fromUp,
      scrollTrigger: { trigger: ".reviews-section", start: "top 85%" },
      ...tweenDefaults,
      delay: 0.1,
    });
    gsap.fromTo(
      ".reviews-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".reviews-section", start: "top 80%" },
      }
    );

    // Contact section
    gsap.from(".contact-badge", {
      ...fromUp,
      scrollTrigger: { trigger: ".contact-section", start: "top 85%" },
      ...tweenDefaults,
    });
    gsap.from(".contact-title", {
      ...fromUp,
      scrollTrigger: { trigger: ".contact-section", start: "top 85%" },
      ...tweenDefaults,
      delay: 0.1,
    });
    gsap.from(".contact-text", {
      ...fromUp,
      scrollTrigger: { trigger: ".contact-section", start: "top 85%" },
      ...tweenDefaults,
      delay: 0.2,
    });
    gsap.from(".contact-cta", {
      ...fromUp,
      scrollTrigger: { trigger: ".contact-section", start: "top 85%" },
      duration: 0.5,
      delay: 0.35,
      ease: "power2.out",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
}
