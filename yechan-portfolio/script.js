// Fade-in Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // 다시 보일 때 재실행 가능
      }
    });
  },
  { threshold: 0.2 }
);

document
  .querySelectorAll(".fade-section")
  .forEach((el) => observer.observe(el));

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// 모달 열기/닫기
function openModal(id) {
  document.getElementById(id + "Modal").style.display = "block";
}
function closeModal(id) {
  document.getElementById(id + "Modal").style.display = "none";
}

// 아코디언 토글
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-btn");
  accordions.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const content = btn.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });
});
function openImageModal(imgElement) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

function closeImageModal() {
  document.getElementById("imgModal").style.display = "none";
}
// 사이드바 버튼 스크롤 (부드럽게 + 해시 갱신)
document.querySelectorAll(".sidebar button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // 기본 점프 막기

    // 버튼에 걸린 onclick 속성에서 id(#projects 같은거) 추출
    const match = btn.getAttribute("onclick").match(/#\w+/);
    if (!match) return;

    const id = match[0]; // #projects
    const target = document.querySelector(id);

    if (target) {
      const offsetTop = target.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth", // 부드럽게 이동
      });

      // 주소창 해시도 갱신
      history.pushState(null, null, id);
    }
  });
});
function toggleMenu() {
  const menu = document.querySelector(".mobile-menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

// 새로고침 시 무조건 닫힌 상태 유지
mobileMenu.classList.remove("active");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
