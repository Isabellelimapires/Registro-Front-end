window.addEventListener("DOMContentLoaded", () => {
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  
    // Cabeçalho animado
    gsap.from(".header h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".header p", { duration: 1, delay: 0.3, y: -30, opacity: 0, ease: "power2.out" });
  
    // Imagem flutuante e girando
    gsap.to(".product-img", { y: -15, rotation: 5, repeat: -1, yoyo: true, ease: "sine.inOut", duration: 3 });
  
    // Botão pulsando
    gsap.to("#cta-btn", { scale: 1.1, repeat: -1, yoyo: true, ease: "power1.inOut", duration: 1.5 });
  
    // Lista de funcionalidades e rodapé (ScrollTrigger)
    if (typeof ScrollTrigger !== "undefined") {
      gsap.from(".features li", {
        opacity: 0,
        x: -50,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".features", start: "top 80%" }
      });
  
      gsap.from(".footer", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".footer", start: "top 90%" }
      });
    }
  });
  