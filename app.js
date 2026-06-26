// =============================================
// APP.JS – Tutorial Site Logic
// =============================================

(function () {

  // ---- State ----
  let currentTopic = "java";
  let currentSubtopic = null;
  let openChapters = new Set();

  // ---- DOM refs ----
  const topicNav     = document.getElementById("topicNav");
  const sidebarTitle = document.getElementById("sidebarTitle");
  const chapterNav   = document.getElementById("chapterNav");
  const contentInner = document.getElementById("contentInner");
  const sidebar      = document.getElementById("sidebar");
  const overlay      = document.getElementById("overlay");
  const hamburger    = document.getElementById("hamburger");

  // =============================================
  // TOPIC SELECTION
  // =============================================
  topicNav.addEventListener("click", (e) => {
    const btn = e.target.closest(".topic-btn");
    if (!btn) return;
    const topic = btn.dataset.topic;
    if (topic === currentTopic) return;

    // Update active state
    document.querySelectorAll(".topic-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentTopic   = topic;
    currentSubtopic = null;
    openChapters.clear();

    renderSidebar();
    renderWelcome();
    closeSidebar();
  });

  // =============================================
  // SIDEBAR RENDERING
  // =============================================
  function renderSidebar() {
    const data = TOPICS[currentTopic];
    if (!data) return;

    sidebarTitle.textContent = data.label;
    chapterNav.innerHTML = "";

    data.chapters.forEach((chapter, ci) => {
      const item = document.createElement("div");
      item.className = "chapter-item";
      if (openChapters.has(chapter.id)) item.classList.add("open");

      // Chapter header
      const header = document.createElement("div");
      header.className = "chapter-header";
      header.innerHTML = `
        <span class="chapter-arrow">&#9654;</span>
        <span class="chapter-icon">${chapter.icon}</span>
        <span class="chapter-label">${chapter.title}</span>
      `;
      header.addEventListener("click", () => toggleChapter(chapter.id, item));

      // Subtopic list
      const ul = document.createElement("div");
      ul.className = "subtopic-list";

      chapter.subtopics.forEach((sub) => {
        const link = document.createElement("a");
        link.className = "subtopic-link";
        link.textContent = sub.title;
        link.href = "#";
        if (currentSubtopic === sub.id) link.classList.add("active");

        link.addEventListener("click", async (e) => {
          e.preventDefault();
          await selectSubtopic(sub.id, sub.title);
          // On mobile: close sidebar after selecting
          if (window.innerWidth <= 768) closeSidebar();
        });

        ul.appendChild(link);
      });

      item.appendChild(header);
      item.appendChild(ul);
      chapterNav.appendChild(item);
    });
  }

  function toggleChapter(id, item) {
    if (openChapters.has(id)) {
      openChapters.delete(id);
      item.classList.remove("open");
    } else {
      openChapters.add(id);
      item.classList.add("open");
    }
  }

  // =============================================
  // CONTENT RENDERING
  // =============================================
  async function selectSubtopic(id, title) {
    currentSubtopic = id;

    // Update active link
    document.querySelectorAll(".subtopic-link").forEach(l => l.classList.remove("active"));
    const activeLink = [...document.querySelectorAll(".subtopic-link")]
      .find(l => l.textContent === title);
    if (activeLink) activeLink.classList.add("active");

    await renderContent(id);
  }

  async function renderContent(id) {
    // Try cached CONTENT first
    let page = (window.CONTENT && window.CONTENT[id]) ? window.CONTENT[id] : null;

    // If not available, load from the chapter-based path: /content/{topic}/{chapter}/{subtopic}.html
    if (!page) {
      try {
        const chapter = findChapterForSubtopic(id);
        console.log(`[renderContent] Loading content for ${id} (chapter: ${chapter ? chapter.id : 'N/A'})`);
        const path = chapter
          ? `content/${currentTopic}/${chapter.id}/${id}.html`
          : `content/${currentTopic}/${id}.html`;

        console.log(`[renderContent] Fetching: ${path}`);
        const resp = await fetch(path);
        console.log(`[renderContent] Status: ${resp.status}`);

        if (resp.ok) {
          const html = await resp.text();
          const sub = TOPICS[currentTopic].chapters.flatMap(c => c.subtopics).find(s => s.id === id);
          const title = sub ? sub.title : id;
          page = { title, topic: TOPICS[currentTopic].label, body: html };
          window.CONTENT = window.CONTENT || {};
          window.CONTENT[id] = page;
          console.log(`[renderContent] ✓ Loaded and cached ${id}`);
        }
      } catch (err) {
        console.error('Failed to load content file for', id, err);
      }
    }

    if (!page) {
      contentInner.innerHTML = `
        <div style="padding:40px 0; color:var(--text-muted); text-align:center;">
          <div style="font-size:48px; margin-bottom:16px;">📄</div>
          <h2 style="color:var(--text-muted); font-size:18px; margin-bottom:8px;">Content coming soon</h2>
          <p style="font-size:14px;">This page is not yet written. Add it as an HTML file inside the <code>content/${currentTopic}/</code> folder.</p>
        </div>`;
      scrollToTop();
      return;
    }

    // Find prev / next subtopics for navigation
    const { prev, next } = getAdjacentSubtopics(id);

    // const renderedBody = escapeCodeHtml(page.body);
    contentInner.innerHTML = `
      <span class="topic-tag">${page.topic}</span>
      <h1>${page.title}</h1>
      ${page.body}
      <div class="page-nav">
        ${prev ? `<a class="page-nav-btn" href="#" data-id="${prev.id}">
          <span class="nav-label">← Previous</span>
          <span class="nav-title">${prev.title}</span>
        </a>` : `<span></span>`}
        ${next ? `<a class="page-nav-btn next" href="#" data-id="${next.id}">
          <span class="nav-label">Next →</span>
          <span class="nav-title">${next.title}</span>
        </a>` : `<span></span>`}
      </div>`;

    // Auto-escape angle brackets in code blocks after render
    // escapeCodeBlocks();

    // Attach prev/next click handlers
    contentInner.querySelectorAll(".page-nav-btn[data-id]").forEach(btn => {
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        const targetId = btn.dataset.id;
        const targetTitle = btn.querySelector(".nav-title").textContent;

        // Open the parent chapter
        const chapter = findChapterForSubtopic(targetId);
        if (chapter) {
          openChapters.add(chapter.id);
          renderSidebar();
        }
        await selectSubtopic(targetId, targetTitle);
        scrollToTop();
      });
    });

    scrollToTop();
  }

  function renderWelcome() {
    const data = TOPICS[currentTopic];
    const topicEmojis = { java: "☕", python: "🐍", springboot: "🍃", sql: "🗃️", dsa: "📚" };
    const topicDescs = {
      java: "From basics to advanced Java — OOP, Collections, Streams, and more.",
      python: "Learn Python from scratch — syntax, data structures, OOP, and beyond.",
      springboot: "Build production-ready REST APIs with Spring Boot and Spring Data JPA.",
      sql: "Master SQL — querying, filtering, joins, and advanced techniques.",
      dsa: "Data Structures & Algorithms — arrays, trees, graphs, sorting, and searching."
    };

    contentInner.innerHTML = `
      <div class="welcome-screen">
        <span class="topic-tag">${data.label}</span>
        <h1>${topicEmojis[currentTopic]} ${data.label}</h1>
        <p class="intro">${topicDescs[currentTopic]}</p>
        <p style="color:var(--text-muted); font-size:14px;">Select a chapter from the left panel to get started.</p>
        <div class="welcome-cards">
          ${data.chapters.map(ch => `
            <div class="welcome-card" data-chapter="${ch.id}">
              <div class="welcome-card-icon">${ch.icon}</div>
              <div class="welcome-card-title">${ch.title}</div>
              <div class="welcome-card-sub">${ch.subtopics.length} topics</div>
            </div>`).join("")}
        </div>
      </div>`;

    // Click on welcome card → open that chapter
    contentInner.querySelectorAll(".welcome-card").forEach(card => {
      card.addEventListener("click", async () => {
        const chId = card.dataset.chapter;
        openChapters.add(chId);
        renderSidebar();

        // Auto-select first subtopic of that chapter
        const chapter = TOPICS[currentTopic].chapters.find(c => c.id === chId);
        if (chapter && chapter.subtopics.length) {
          const first = chapter.subtopics[0];
          await selectSubtopic(first.id, first.title);
        }
      });
    });
  }

  // =============================================
  // HELPERS
  // =============================================
  function getAdjacentSubtopics(id) {
    const chapters = TOPICS[currentTopic].chapters;
    const allSubs = chapters.flatMap(ch => ch.subtopics);
    const idx = allSubs.findIndex(s => s.id === id);
    return {
      prev: idx > 0 ? allSubs[idx - 1] : null,
      next: idx < allSubs.length - 1 ? allSubs[idx + 1] : null,
    };
  }

  function findChapterForSubtopic(subId) {
    return TOPICS[currentTopic].chapters.find(ch =>
      ch.subtopics.some(s => s.id === subId)
    );
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function escapeCodeBlocks() {
    // Find all code blocks and escape angle brackets so <T> displays correctly
    const codeBlocks = contentInner.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
      block.textContent = block.textContent
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    });
  }

  function escapeCodeHtml(html) {
    // Escape only content inside <pre><code> tags before injecting HTML.
    return html.replace(/<pre([^>]*)>\s*<code([^>]*)>([\s\S]*?)<\/code>\s*<\/pre>/gi, (match, preAttrs, codeAttrs, codeContent) => {
      const escaped = codeContent
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      return `<pre${preAttrs}><code${codeAttrs}>${escaped}</code></pre>`;
    });
  }

  // =============================================
  // MOBILE SIDEBAR
  // =============================================
  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("visible");
  });

  overlay.addEventListener("click", closeSidebar);

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("visible");
  }

  // =============================================
  // URL HASH NAVIGATION (bookmarkable links)
  // =============================================
  async function applyHash() {
    const hash = window.location.hash.slice(1); // e.g. "java/java-arraylist"
    if (!hash) return;
    const [topic, subId] = hash.split("/");
    if (TOPICS[topic]) {
      // Switch topic
      currentTopic = topic;
      document.querySelectorAll(".topic-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.topic === topic);
      });
      openChapters.clear();

      // Open the right chapter
      const chapter = TOPICS[topic].chapters.find(ch =>
        ch.subtopics.some(s => s.id === subId)
      );
      if (chapter) openChapters.add(chapter.id);

      renderSidebar();
      if (subId) {
        const sub = TOPICS[topic].chapters
          .flatMap(c => c.subtopics)
          .find(s => s.id === subId);
        if (sub) await selectSubtopic(sub.id, sub.title);
      } else {
        renderWelcome();
      }
    }
  }

  // Update hash on subtopic selection
  const origSelect = selectSubtopic;
  // Override to also update URL
  window.addEventListener("hashchange", applyHash);

  // =============================================
  // INIT
  // =============================================
  renderSidebar();

  // Open first chapter by default and show welcome
  if (TOPICS[currentTopic].chapters.length) {
    openChapters.add(TOPICS[currentTopic].chapters[0].id);
    renderSidebar();
  }

  if (window.location.hash) {
    applyHash();
  } else {
    renderWelcome();
  }

})();
