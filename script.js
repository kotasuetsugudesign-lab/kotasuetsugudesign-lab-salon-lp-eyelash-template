/* =====================================================
   Luminous Eyelash Salon - Premium Template JS
   販売用フル強化版
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const header = document.querySelector("header");
  const fadeTargets = document.querySelectorAll(
    ".reason-grid > div, .flow-item, .voice-card, .gallery-item"
  );

  /* ===============================
     安全チェック
  ================================= */
  if (!hamburger || !nav) return;

  /* ===============================
     メニュー制御
  ================================= */

  function openMenu() {
    nav.classList.add("active");
    hamburger.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    nav.classList.remove("active");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }

  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.contains("active");
    isOpen ? closeMenu() : openMenu();
  });

  // メニューリンク押したら閉じる
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Escキーで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  /* ===============================
     ヘッダースクロール演出
  ================================= */

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
    } else {
      header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.03)";
    }
  });

  /* ===============================
     フェードインアニメーション
  ================================= */

  // 対象にクラス付与
  fadeTargets.forEach(el => {
    el.classList.add("fade-target");
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeTargets.forEach(el => observer.observe(el));

});