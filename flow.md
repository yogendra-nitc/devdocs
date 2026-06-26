# Content Flow for Adding a Subtopic

This document explains the complete flow for adding or editing content for one subtopic in this site.

Example used here: Java Generics
- Subtopic id: `java-generics`
- Chapter id: `java-language-part-3`
- Content file: `content/java/java-language-part-3/java-generics.html`

---

## 1. Define the subtopic in data.js

Open [data.js](data.js) and find the relevant topic section.

For Java, the structure looks like this:

```javascript
java: {
  label: "Java Tutorial",
  chapters: [
    {
      id: "java-language-part-3",
      title: "The Java Language - Part III",
      icon: "☕",
      subtopics: [
        { id: "java-generics", title: "Generics" },
        { id: "java-lambda-expressions", title: "Lambda Expressions" },
        { id: "java-modules", title: "Modules" }
      ]
    }
  ]
}
```

### Important points
- The `id` of the subtopic must match the filename.
- The chapter `id` is used to build the folder path.
- The title shown in the sidebar is taken from the `title` field.

---

## 2. Create or edit the HTML file for the subtopic

Create or update the file at:

```text
content/java/java-language-part-3/java-generics.html
```

This file contains the actual content that will be shown in the main panel.

Example structure:

```html
<p class="intro">Generics allow you to write reusable and type-safe code.</p>

<h2>What are Generics?</h2>
<p>Generics let you parameterize classes, interfaces, and methods with a type.</p>

<h2>Example</h2>
<div class="code-block">
  <span class="code-label">Java</span>
  <pre><code>class Box&lt;T&gt; {
  private T value;
  public void set(T value) { this.value = value; }
  public T get() { return value; }
}</code></pre>
</div>

<div class="info-box">
  <strong>Benefit:</strong> Generics provide compile-time type safety.
</div>
```

You can add:
- headings (`h2`, `h3`)
- paragraphs
- bullet lists
- code blocks
- info boxes / note boxes

---

## 3. How the app finds the content

When the user clicks the subtopic in the sidebar, the app calls `selectSubtopic()` from [app.js](app.js).

That function passes the subtopic id to `renderContent()`.

### Flow
1. User clicks the sidebar link for `Generics`
2. `selectSubtopic("java-generics", "Generics")` is called
3. `renderContent("java-generics")` runs
4. The app finds the matching chapter using `findChapterForSubtopic()`
5. It builds the path:

```text
content/java/java-language-part-3/java-generics.html
```

6. The file is fetched and inserted into the main content area

---

## 4. Loader path pattern

The site uses this pattern for content loading:

```text
content/{topic}/{chapter}/{subtopic}.html
```

### Examples
- Java:
  ```text
  content/java/java-language-part-3/java-generics.html
  ```
- Python:
  ```text
  content/python/py-advanced/py-generators.html
  ```

This means:
- `{topic}` = `java`, `python`, `springboot`, `sql`, `dsa`
- `{chapter}` = chapter id from `data.js`
- `{subtopic}` = subtopic id from `data.js`

---

## 5. What happens after the file is found

Once the HTML file is fetched:
- the content is stored in `window.CONTENT`
- the title is taken from `data.js`
- the page is injected into the main panel
- previous/next navigation is also built automatically

So editing the file automatically changes the visible content.

---

## 6. Quick checklist for adding any new subtopic

1. Add the subtopic entry in [data.js](data.js)
2. Create the matching HTML file under the correct chapter folder
3. Use the same subtopic id as the filename
4. Refresh the browser and click the subtopic

---

## 7. Example: Java Generics

If you want to edit the content for Java Generics:

- Open: [content/java/java-language-part-3/java-generics.html](content/java/java-language-part-3/java-generics.html)
- Update the HTML content there
- Save the file
- Refresh the browser

The page will render automatically when you click the Generics link in the sidebar.
