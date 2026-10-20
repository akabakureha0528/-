/*
 * 赤刃亭 is — 差し替えガイド
 * 作品・YouTube・Xの情報は、下の配列だけを編集すれば更新できます。
 * URLが未設定の項目は仮リンクのままなので、公開前に必ず確認してください。
 */
const works = [
  { title: "作品タイトル 01", image: "assets/work-01.svg", description: "作品の説明をここに入力してください。制作意図や使用ツールなどを短く紹介できます。" },
  { title: "作品タイトル 02", image: "assets/work-02.svg", description: "作品の説明をここに入力してください。" },
  { title: "作品タイトル 03", image: "assets/work-03.svg", description: "作品の説明をここに入力してください。" },
  { title: "作品タイトル 04", image: "assets/work-04.svg", description: "作品の説明をここに入力してください。" },
  { title: "作品タイトル 05", image: "assets/work-05.svg", description: "作品の説明をここに入力してください。" },
  { title: "作品タイトル 06", image: "assets/work-06.svg", description: "作品の説明をここに入力してください。" },
  { title: "作品タイトル 07", image: "assets/work-07.svg", description: "作品の説明をここに入力してください。" },
  { title: "作品タイトル 08", image: "assets/work-08.svg", description: "作品の説明をここに入力してください。" },
  { title: "作品タイトル 09", image: "assets/work-09.svg", description: "作品の説明をここに入力してください。" }
];

const youtubeAccounts = [
  { name: "YouTube アカウント 01", description: "チャンネルの紹介文を入力してください。", url: "https://www.youtube.com/" },
  { name: "YouTube アカウント 02", description: "チャンネルの紹介文を入力してください。", url: "https://www.youtube.com/" }
];

const socialAccounts = [
  { name: "X アカウント 01", description: "メインアカウントなど、用途を入力", url: "https://x.com/" },
  { name: "X アカウント 02", description: "サブアカウントなど、用途を入力", url: "https://x.com/" },
  { name: "GitHub", description: "制作物・ソースコード", url: "https://github.com/" }
];

// CONTACTのDM誘導先にするXアカウントURLを設定してください。
const contactUrl = "https://x.com/";

// --- ここから下は基本的に編集不要です ---
const worksGrid = document.querySelector("#works-grid");
const modal = document.querySelector("#work-modal");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalCount = document.querySelector("#modal-count");
let activeWork = 0;

function renderWorks() {
  worksGrid.innerHTML = "";
  works.forEach((work, index) => {
    const button = document.createElement("button");
    button.className = "work-card";
    button.type = "button";
    button.setAttribute("aria-label", `${work.title}の詳細を表示`);
    button.innerHTML = `
      <div class="work-thumb"><img src="${work.image}" alt="${escapeHtml(work.title)}" loading="lazy"></div>
      <div class="work-meta"><strong>${escapeHtml(work.title)}</strong><span>WORK ${String(index + 1).padStart(2, "0")}</span></div>
    `;
    button.addEventListener("click", () => openWork(index));
    worksGrid.appendChild(button);
  });
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}
function openWork(index) {
  activeWork = (index + works.length) % works.length;
  const work = works[activeWork];
  modalImage.src = work.image;
  modalImage.alt = work.title;
  modalTitle.textContent = work.title;
  modalDescription.textContent = work.description;
  modalCount.textContent = `WORK ${String(activeWork + 1).padStart(2, "0")} / ${String(works.length).padStart(2, "0")}`;
  if (!modal.open) {
    modal.showModal();
    document.body.classList.add("modal-open");
  }
}
function closeModal() {
  if (modal.open) modal.close();
  document.body.classList.remove("modal-open");
}
document.querySelector("#modal-close").addEventListener("click", closeModal);
document.querySelector("#modal-prev").addEventListener("click", () => openWork(activeWork - 1));
document.querySelector("#modal-next").addEventListener("click", () => openWork(activeWork + 1));
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});
modal.addEventListener("close", () => document.body.classList.remove("modal-open"));
document.addEventListener("keydown", event => {
  if (!modal.open) return;
  if (event.key === "ArrowLeft") openWork(activeWork - 1);
  if (event.key === "ArrowRight") openWork(activeWork + 1);
});

function renderYouTube() {
  const list = document.querySelector("#youtube-list");
  list.innerHTML = "";
  youtubeAccounts.forEach((account, index) => {
    const article = document.createElement("article");
    article.className = "feature-card";
    article.innerHTML = `<span class="feature-number">0${index + 1}</span>
      <h3>${escapeHtml(account.name)}</h3>
      <p>${escapeHtml(account.description)}</p>
      <a class="text-link" href="${account.url}" target="_blank" rel="noopener noreferrer">チャンネルを見る ↗</a>`;
    list.appendChild(article);
  });
}
function renderSocialLinks() {
  const list = document.querySelector("#social-links");
  list.innerHTML = "";
  socialAccounts.forEach(account => {
    const link = document.createElement("a");
    link.className = "social-link";
    link.href = account.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerHTML = `<span><strong>${escapeHtml(account.name)}</strong><small>${escapeHtml(account.description)}</small></span><span class="arrow" aria-hidden="true">↗</span>`;
    list.appendChild(link);
  });
}
document.querySelector("#contact-link").href = contactUrl;
document.querySelector("#year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// 控えめな紅葉。動きを減らす設定が有効な場合は生成しません。
const leafLayer = document.querySelector("#leaf-layer");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const colors = ["#8b2635", "#a33a32", "#b77938", "#c8a45d"];
  for (let i = 0; i < 8; i++) {
    const leaf = document.createElement("span");
    leaf.className = "leaf";
    leaf.style.left = `${Math.random() * 100}%`;
    leaf.style.setProperty("--size", `${7 + Math.random() * 8}px`);
    leaf.style.setProperty("--duration", `${18 + Math.random() * 16}s`);
    leaf.style.setProperty("--delay", `${-Math.random() * 30}s`);
    leaf.style.setProperty("--sway", `${-35 + Math.random() * 70}px`);
    leaf.style.setProperty("--leaf-color", colors[Math.floor(Math.random() * colors.length)]);
    leafLayer.appendChild(leaf);
  }
}
renderWorks();
renderYouTube();
renderSocialLinks();
