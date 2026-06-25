# DevDocs – Tutorial Website

A clean, tutorial site you can host on **GitHub Pages** for free.

## 📁 File Structure

```
tutorial-site/
├── index.html      ← Main HTML structure
├── style.css       ← All styling
├── data.js         ← All tutorial content (topics, chapters, pages)
├── app.js          ← Navigation and rendering logic
└── README.md       ← This file
```

---

## 🚀 Deploy to GitHub Pages

### Step 1 – Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in.
2. Click **"New repository"**.
3. Name it `devdocs` (or anything you like).
4. Keep it **Public**.
5. Click **"Create repository"**.

### Step 2 – Upload Files

**Option A – via GitHub web UI (easiest):**
1. Click **"uploading an existing file"** on the repo page.
2. Drag and drop all 4 files (`index.html`, `style.css`, `data.js`, `app.js`).
3. Click **"Commit changes"**.

**Option B – via Git CLI:**
```bash
git init
git add .
git commit -m "Initial tutorial site"
git remote add origin https://github.com/YOUR_USERNAME/devdocs.git
git push -u origin main
```

### Step 3 – Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages** (left sidebar).
2. Under **"Source"**, select branch `main` and folder `/ (root)`.
3. Click **Save**.
4. Your site will be live at:  
   `https://YOUR_USERNAME.github.io/devdocs/`

> It may take 1–2 minutes to go live the first time.

---

## ✏️ How to Add Your Own Content

### Add a New Topic (e.g. "React")

In `data.js`, add to the `TOPICS` object:

```js
react: {
  label: "React Tutorial",
  chapters: [
    {
      id: "react-intro",
      title: "Introduction",
      icon: "⚛️",
      subtopics: [
        { id: "react-what-is", title: "What is React?" },
        { id: "react-setup",   title: "Setup & Create App" },
      ]
    },
  ]
}
```

Then add a button in `index.html`:
```html
<button class="topic-btn" data-topic="react">React</button>
```

### Add Page Content

In `data.js`, add to the `CONTENT` object:

```js
"react-what-is": {
  title: "What is React?",
  topic: "React",
  body: `
    <p class="intro">React is a JavaScript library for building user interfaces...</p>
    <h2>Key Concepts</h2>
    <ul>
      <li>Components</li>
      <li>JSX</li>
      <li>State & Props</li>
    </ul>
  `
},
```

### Supported HTML Elements in `body`

| Element | Class | Usage |
|---|---|---|
| `<p class="intro">` | intro | Lead paragraph with blue left border |
| `<h2>` | — | Section heading |
| `<h3>` | — | Sub-section heading |
| `<div class="code-block">` | code-block | Dark code block |
| `<div class="note-box">` | note-box | Yellow warning box |
| `<div class="info-box">` | info-box | Blue info box |
| `<table>` | — | Styled comparison table |
| `<ul>` / `<ol>` | — | Bullet/numbered list |

---

## 🎨 Customizing Colors

Edit the CSS variables at the top of `style.css`:

```css
:root {
  --accent:    #2563eb;   /* Change to your brand color */
  --text:      #1a1d23;   /* Main text color */
  --bg:        #f7f8fa;   /* Page background */
  --surface:   #ffffff;   /* Card / sidebar background */
}
```

---

## 📱 Responsive

The site is fully responsive:
- **Desktop** – Fixed sidebar + scrollable content
- **Mobile** – Hamburger menu opens/closes the sidebar
