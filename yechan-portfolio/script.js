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
    e.preventDefault();

    const match = btn.getAttribute("onclick").match(/#\w+/);
    if (!match) return;

    const id = match[0];
    const target = document.querySelector(id);

    if (target) {
      const offsetTop = target.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      history.pushState(null, null, id);
    }
  });
});

// ===== 햄버거 메뉴 =====
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

// 햄버거 버튼 클릭 → 열기/닫기
hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // 이벤트 전파 막음
  mobileMenu.classList.toggle("active");
});

// 메뉴 링크 클릭하면 자동 닫기 (원하면 유지 가능)
const menuLinks = document.querySelectorAll(".mobile-menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// 화면 다른 곳 클릭하면 닫기
document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("active") && // 메뉴 열려있을 때만
    !mobileMenu.contains(e.target) && // 메뉴 영역 클릭 아님
    !hamburger.contains(e.target) // 햄버거 버튼 클릭 아님
  ) {
    mobileMenu.classList.remove("active");
  }
});
