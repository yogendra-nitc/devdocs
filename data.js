// =============================================
// TUTORIAL CONTENT DATA
// Add your own topics, chapters, and content here
// =============================================

const TOPICS = {

  // ==================== JAVA ====================
  java: {
    label: "Java Tutorial",
    chapters: [
      {
        id: "java-intro",
        title: "Introduction",
        icon: "☕",
        subtopics: [
          { id: "java-what-is", title: "What is Java?" },
          { id: "java-history", title: "History of Java" },
          { id: "java-setup",  title: "Setup & Installation" },
          { id: "java-hello",  title: "Hello World" },
        ]
      },
      {
        id: "java-basics",
        title: "Java Basics",
        icon: "📌",
        subtopics: [
          { id: "java-syntax",     title: "Syntax & Structure" },
          { id: "java-variables",  title: "Variables & Data Types" },
          { id: "java-operators",  title: "Operators" },
          { id: "java-strings",    title: "Strings" },
          { id: "java-conditionals", title: "If / Else / Switch" },
          { id: "java-loops",      title: "Loops" },
        ]
      },
      {
        id: "java-oop",
        title: "OOP Concepts",
        icon: "🧱",
        subtopics: [
          { id: "java-classes",       title: "Classes & Objects" },
          { id: "java-inheritance",   title: "Inheritance" },
          { id: "java-polymorphism",  title: "Polymorphism" },
          { id: "java-abstraction",   title: "Abstraction" },
          { id: "java-encapsulation", title: "Encapsulation" },
          { id: "java-interfaces",    title: "Interfaces" },
        ]
      },
      {
        id: "java-collections",
        title: "Collections",
        icon: "📦",
        subtopics: [
          { id: "java-list",       title: "List" },
          { id: "java-arraylist",  title: "ArrayList" },
          { id: "java-linkedlist", title: "LinkedList" },
          { id: "java-set",        title: "Set & HashSet" },
          { id: "java-map",        title: "Map & HashMap" },
          { id: "java-queue",      title: "Queue & Deque" },
          { id: "java-iterator",   title: "Iterator" },
        ]
      },
      {
        id: "java-exceptions",
        title: "Exception Handling",
        icon: "⚠️",
        subtopics: [
          { id: "java-try-catch",  title: "try / catch / finally" },
          { id: "java-throw",      title: "throw & throws" },
          { id: "java-custom-ex",  title: "Custom Exceptions" },
        ]
      },
      {
        id: "java-advanced",
        title: "Advanced Java",
        icon: "🚀",
        subtopics: [
          { id: "java-generics",  title: "Generics" },
          { id: "java-lambda",    title: "Lambda Expressions" },
          { id: "java-streams",   title: "Streams API" },
          { id: "java-threads",   title: "Multithreading" },
          { id: "java-io",        title: "File I/O" },
        ]
      },
    ]
  },

  // ==================== PYTHON ====================
  python: {
    label: "Python Tutorial",
    chapters: [
      {
        id: "py-intro",
        title: "Introduction",
        icon: "🐍",
        subtopics: [
          { id: "py-what-is",  title: "What is Python?" },
          { id: "py-setup",    title: "Setup & pip" },
          { id: "py-hello",    title: "Hello World" },
        ]
      },
      {
        id: "py-basics",
        title: "Python Basics",
        icon: "📌",
        subtopics: [
          { id: "py-variables",  title: "Variables & Types" },
          { id: "py-strings",    title: "Strings" },
          { id: "py-lists",      title: "Lists" },
          { id: "py-tuples",     title: "Tuples" },
          { id: "py-dicts",      title: "Dictionaries" },
          { id: "py-sets",       title: "Sets" },
          { id: "py-loops",      title: "Loops" },
          { id: "py-functions",  title: "Functions" },
        ]
      },
      {
        id: "py-oop",
        title: "OOP in Python",
        icon: "🧱",
        subtopics: [
          { id: "py-classes",     title: "Classes & Objects" },
          { id: "py-inheritance", title: "Inheritance" },
          { id: "py-magic",       title: "Magic Methods" },
        ]
      },
      {
        id: "py-advanced",
        title: "Advanced Python",
        icon: "🚀",
        subtopics: [
          { id: "py-comprehensions", title: "Comprehensions" },
          { id: "py-decorators",     title: "Decorators" },
          { id: "py-generators",     title: "Generators" },
          { id: "py-async",          title: "Async / Await" },
        ]
      },
    ]
  },

  // ==================== SPRING BOOT ====================
  springboot: {
    label: "Spring Boot Tutorial",
    chapters: [
      {
        id: "sb-intro",
        title: "Introduction",
        icon: "🍃",
        subtopics: [
          { id: "sb-what-is",  title: "What is Spring Boot?" },
          { id: "sb-setup",    title: "Project Setup" },
          { id: "sb-structure", title: "Project Structure" },
        ]
      },
      {
        id: "sb-core",
        title: "Core Concepts",
        icon: "🔧",
        subtopics: [
          { id: "sb-di",          title: "Dependency Injection" },
          { id: "sb-beans",       title: "Beans & ApplicationContext" },
          { id: "sb-annotations", title: "Key Annotations" },
        ]
      },
      {
        id: "sb-rest",
        title: "REST APIs",
        icon: "🌐",
        subtopics: [
          { id: "sb-controller",  title: "@RestController" },
          { id: "sb-request",     title: "Request Mappings" },
          { id: "sb-response",    title: "ResponseEntity" },
        ]
      },
      {
        id: "sb-data",
        title: "Spring Data JPA",
        icon: "🗄️",
        subtopics: [
          { id: "sb-entity",     title: "Entities & @Table" },
          { id: "sb-repository", title: "JpaRepository" },
          { id: "sb-queries",    title: "Custom Queries" },
        ]
      },
    ]
  },

  // ==================== SQL ====================
  sql: {
    label: "SQL Tutorial",
    chapters: [
      {
        id: "sql-intro",
        title: "Introduction",
        icon: "🗃️",
        subtopics: [
          { id: "sql-what-is",  title: "What is SQL?" },
          { id: "sql-rdbms",    title: "RDBMS Concepts" },
        ]
      },
      {
        id: "sql-basics",
        title: "Basic Commands",
        icon: "📝",
        subtopics: [
          { id: "sql-select",  title: "SELECT" },
          { id: "sql-where",   title: "WHERE & Filters" },
          { id: "sql-insert",  title: "INSERT" },
          { id: "sql-update",  title: "UPDATE" },
          { id: "sql-delete",  title: "DELETE" },
        ]
      },
      {
        id: "sql-joins",
        title: "Joins",
        icon: "🔗",
        subtopics: [
          { id: "sql-inner",   title: "INNER JOIN" },
          { id: "sql-left",    title: "LEFT / RIGHT JOIN" },
          { id: "sql-full",    title: "FULL OUTER JOIN" },
        ]
      },
      {
        id: "sql-advanced",
        title: "Advanced SQL",
        icon: "🚀",
        subtopics: [
          { id: "sql-groupby",    title: "GROUP BY & HAVING" },
          { id: "sql-subqueries", title: "Subqueries" },
          { id: "sql-indexes",    title: "Indexes" },
        ]
      },
    ]
  },

  // ==================== DSA ====================
  dsa: {
    label: "DSA Tutorial",
    chapters: [
      {
        id: "dsa-intro",
        title: "Introduction",
        icon: "📚",
        subtopics: [
          { id: "dsa-what-is",    title: "What is DSA?" },
          { id: "dsa-complexity",  title: "Time & Space Complexity" },
        ]
      },
      {
        id: "dsa-arrays",
        title: "Arrays & Strings",
        icon: "🔢",
        subtopics: [
          { id: "dsa-arrays-basics", title: "Arrays Basics" },
          { id: "dsa-two-pointer",   title: "Two Pointer Technique" },
          { id: "dsa-sliding-window", title: "Sliding Window" },
        ]
      },
      {
        id: "dsa-linked",
        title: "Linked Lists",
        icon: "🔗",
        subtopics: [
          { id: "dsa-singly",   title: "Singly Linked List" },
          { id: "dsa-doubly",   title: "Doubly Linked List" },
        ]
      },
      {
        id: "dsa-trees",
        title: "Trees",
        icon: "🌳",
        subtopics: [
          { id: "dsa-bst",  title: "Binary Search Tree" },
          { id: "dsa-bfs",  title: "BFS Traversal" },
          { id: "dsa-dfs",  title: "DFS Traversal" },
        ]
      },
      {
        id: "dsa-sorting",
        title: "Sorting Algorithms",
        icon: "🔀",
        subtopics: [
          { id: "dsa-bubble",  title: "Bubble Sort" },
          { id: "dsa-merge",   title: "Merge Sort" },
          { id: "dsa-quick",   title: "Quick Sort" },
        ]
      },
    ]
  },

};

// =============================================
// PAGE CONTENT
// =============================================
const CONTENT = {

  // ----------- JAVA -----------

  "java-what-is": {
    title: "What is Java?",
    topic: "Java",
    body: `
      <p class="intro">Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It follows the principle of <strong>"Write Once, Run Anywhere" (WORA)</strong>.</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Platform Independent</strong> – Java bytecode runs on any machine with a JVM.</li>
        <li><strong>Object-Oriented</strong> – Everything in Java is an object, making code modular and reusable.</li>
        <li><strong>Strongly Typed</strong> – Every variable must be declared with a type.</li>
        <li><strong>Automatic Memory Management</strong> – Java has a built-in Garbage Collector.</li>
        <li><strong>Multithreading</strong> – Java supports concurrent execution of multiple threads.</li>
        <li><strong>Rich Standard Library</strong> – Java ships with a huge collection of built-in classes.</li>
      </ul>

      <h2>How Java Works</h2>
      <p>Java source code (.java files) is compiled by the <strong>Java Compiler (javac)</strong> into platform-independent <strong>bytecode</strong> (.class files). The bytecode is then interpreted and executed by the <strong>Java Virtual Machine (JVM)</strong>.</p>

      <div class="info-box">
        <strong>JDK vs JRE vs JVM</strong><br/>
        <strong>JDK</strong> (Java Development Kit) – Tools to write and compile Java programs.<br/>
        <strong>JRE</strong> (Java Runtime Environment) – Tools to run Java programs.<br/>
        <strong>JVM</strong> (Java Virtual Machine) – The engine that executes Java bytecode.
      </div>

      <h2>Java Editions</h2>
      <table>
        <thead><tr><th>Edition</th><th>Use Case</th></tr></thead>
        <tbody>
          <tr><td>Java SE (Standard Edition)</td><td>Desktop and general-purpose applications</td></tr>
          <tr><td>Java EE / Jakarta EE</td><td>Enterprise web applications</td></tr>
          <tr><td>Java ME (Micro Edition)</td><td>Mobile and embedded systems</td></tr>
        </tbody>
      </table>

      <h2>Where is Java Used?</h2>
      <ul>
        <li>Android app development</li>
        <li>Web back-end services (Spring Boot, Jakarta EE)</li>
        <li>Big Data tools (Hadoop, Kafka)</li>
        <li>Enterprise applications (banking, insurance, e-commerce)</li>
        <li>Desktop GUI applications (JavaFX, Swing)</li>
      </ul>
    `
  },

  "java-hello": {
    title: "Hello World in Java",
    topic: "Java",
    body: `
      <p class="intro">The classic first program — printing "Hello, World!" — teaches you the minimal structure of a Java program.</p>

      <h2>The Code</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code><span style="color:#81a1c1">public class</span> <span style="color:#8fbcbb">HelloWorld</span> {
    <span style="color:#81a1c1">public static void</span> <span style="color:#88c0d0">main</span>(String[] args) {
        System.out.println(<span style="color:#a3be8c">"Hello, World!"</span>);
    }
}</code></pre>
      </div>

      <h2>Breaking It Down</h2>
      <table>
        <thead><tr><th>Part</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td><code>public class HelloWorld</code></td><td>Defines a class named HelloWorld. File must be named HelloWorld.java</td></tr>
          <tr><td><code>public static void main(String[] args)</code></td><td>Entry point of every Java program</td></tr>
          <tr><td><code>System.out.println()</code></td><td>Prints a line to the console</td></tr>
        </tbody>
      </table>

      <h2>Running the Program</h2>
      <div class="code-block">
        <span class="code-label">Terminal</span>
        <pre><code># Step 1: Compile
javac HelloWorld.java

# Step 2: Run
java HelloWorld

# Output
Hello, World!</code></pre>
      </div>

      <div class="note-box">
        <strong>Note:</strong> The class name must exactly match the filename (case-sensitive). A file <code>HelloWorld.java</code> must contain a class called <code>HelloWorld</code>.
      </div>
    `
  },

  "java-variables": {
    title: "Variables & Data Types",
    topic: "Java",
    body: `
      <p class="intro">A variable is a named container for storing data. Java is a statically-typed language, meaning every variable must be declared with a specific type before use.</p>

      <h2>Declaring Variables</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code><span style="color:#81a1c1">int</span> age = <span style="color:#b48ead">25</span>;
<span style="color:#81a1c1">double</span> price = <span style="color:#b48ead">99.99</span>;
<span style="color:#81a1c1">char</span> grade = <span style="color:#a3be8c">'A'</span>;
<span style="color:#81a1c1">boolean</span> isActive = <span style="color:#81a1c1">true</span>;
String name = <span style="color:#a3be8c">"Alice"</span>;</code></pre>
      </div>

      <h2>Primitive Data Types</h2>
      <table>
        <thead><tr><th>Type</th><th>Size</th><th>Range / Example</th></tr></thead>
        <tbody>
          <tr><td><code>byte</code></td><td>1 byte</td><td>-128 to 127</td></tr>
          <tr><td><code>short</code></td><td>2 bytes</td><td>-32,768 to 32,767</td></tr>
          <tr><td><code>int</code></td><td>4 bytes</td><td>-2.1B to 2.1B</td></tr>
          <tr><td><code>long</code></td><td>8 bytes</td><td>Very large integers (use L suffix)</td></tr>
          <tr><td><code>float</code></td><td>4 bytes</td><td>Decimal numbers (use f suffix)</td></tr>
          <tr><td><code>double</code></td><td>8 bytes</td><td>Higher-precision decimals</td></tr>
          <tr><td><code>char</code></td><td>2 bytes</td><td>Single character e.g. 'A'</td></tr>
          <tr><td><code>boolean</code></td><td>1 bit</td><td>true / false</td></tr>
        </tbody>
      </table>

      <h2>Type Casting</h2>
      <p><strong>Widening</strong> (automatic): smaller → larger type. <strong>Narrowing</strong> (manual): larger → smaller type.</p>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code>// Widening (automatic)
int i = 42;
double d = i;   // 42.0

// Narrowing (explicit cast)
double pi = 3.14;
int n = (int) pi;  // 3  (decimal truncated)</code></pre>
      </div>

      <h2>Constants</h2>
      <p>Use <code>final</code> keyword to declare a constant — its value cannot be changed once assigned.</p>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code><span style="color:#81a1c1">final double</span> PI = <span style="color:#b48ead">3.14159</span>;
PI = <span style="color:#b48ead">3</span>;  <span style="color:#616e88">// ❌ Compile error: cannot assign a value to final variable</span></code></pre>
      </div>
    `
  },

  "java-arraylist": {
    title: "ArrayList in Java",
    topic: "Java",
    body: `
      <p class="intro"><code>ArrayList</code> is a resizable array implementation of the <code>List</code> interface. It dynamically grows and shrinks as elements are added or removed.</p>

      <h2>Import & Create</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code><span style="color:#81a1c1">import</span> java.util.ArrayList;

ArrayList&lt;String&gt; fruits = <span style="color:#81a1c1">new</span> ArrayList&lt;&gt;();</code></pre>
      </div>

      <h2>Common Methods</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code>fruits.add(<span style="color:#a3be8c">"Apple"</span>);          <span style="color:#616e88">// Add element</span>
fruits.add(<span style="color:#a3be8c">"Banana"</span>);
fruits.add(<span style="color:#b48ead">1</span>, <span style="color:#a3be8c">"Mango"</span>);    <span style="color:#616e88">// Insert at index 1</span>

String first = fruits.get(<span style="color:#b48ead">0</span>);  <span style="color:#616e88">// "Apple"</span>
fruits.set(<span style="color:#b48ead">0</span>, <span style="color:#a3be8c">"Grapes"</span>);     <span style="color:#616e88">// Replace at index 0</span>
fruits.remove(<span style="color:#b48ead">1</span>);            <span style="color:#616e88">// Remove by index</span>
fruits.remove(<span style="color:#a3be8c">"Banana"</span>);     <span style="color:#616e88">// Remove by value</span>

<span style="color:#81a1c1">int</span> size = fruits.size();    <span style="color:#616e88">// Number of elements</span>
<span style="color:#81a1c1">boolean</span> has = fruits.contains(<span style="color:#a3be8c">"Apple"</span>);
fruits.clear();              <span style="color:#616e88">// Remove all elements</span></code></pre>
      </div>

      <h2>Iterating</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code><span style="color:#616e88">// For-each loop (recommended)</span>
<span style="color:#81a1c1">for</span> (String fruit : fruits) {
    System.out.println(fruit);
}

<span style="color:#616e88">// Using index</span>
<span style="color:#81a1c1">for</span> (<span style="color:#81a1c1">int</span> i = <span style="color:#b48ead">0</span>; i &lt; fruits.size(); i++) {
    System.out.println(fruits.get(i));
}

<span style="color:#616e88">// Java 8 Lambda</span>
fruits.forEach(f -&gt; System.out.println(f));</code></pre>
      </div>

      <h2>ArrayList vs Array</h2>
      <table>
        <thead><tr><th>Feature</th><th>Array</th><th>ArrayList</th></tr></thead>
        <tbody>
          <tr><td>Size</td><td>Fixed at creation</td><td>Dynamic (auto-resize)</td></tr>
          <tr><td>Type</td><td>Primitives & Objects</td><td>Objects only (use wrappers)</td></tr>
          <tr><td>Performance</td><td>Slightly faster</td><td>Slightly slower (boxing overhead)</td></tr>
          <tr><td>Methods</td><td>Limited (length only)</td><td>Rich API (add, remove, contains…)</td></tr>
        </tbody>
      </table>

      <div class="note-box">
        <strong>Tip:</strong> Use <code>ArrayList</code> when you don't know the size in advance. Use a regular array when the size is fixed and performance is critical.
      </div>
    `
  },

  "java-map": {
    title: "Map & HashMap",
    topic: "Java",
    body: `
      <p class="intro">A <code>Map</code> stores data as <strong>key-value pairs</strong>. Each key is unique. <code>HashMap</code> is the most commonly used Map implementation — it gives O(1) average-time lookup.</p>

      <h2>Create a HashMap</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code><span style="color:#81a1c1">import</span> java.util.HashMap;
<span style="color:#81a1c1">import</span> java.util.Map;

Map&lt;String, Integer&gt; scores = <span style="color:#81a1c1">new</span> HashMap&lt;&gt;();</code></pre>
      </div>

      <h2>Common Operations</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code>scores.put(<span style="color:#a3be8c">"Alice"</span>, <span style="color:#b48ead">95</span>);
scores.put(<span style="color:#a3be8c">"Bob"</span>, <span style="color:#b48ead">82</span>);
scores.put(<span style="color:#a3be8c">"Charlie"</span>, <span style="color:#b48ead">78</span>);

<span style="color:#81a1c1">int</span> aliceScore = scores.get(<span style="color:#a3be8c">"Alice"</span>);   <span style="color:#616e88">// 95</span>
scores.remove(<span style="color:#a3be8c">"Bob"</span>);                  <span style="color:#616e88">// Remove Bob</span>
<span style="color:#81a1c1">boolean</span> has = scores.containsKey(<span style="color:#a3be8c">"Alice"</span>); <span style="color:#616e88">// true</span>
<span style="color:#81a1c1">int</span> size = scores.size();               <span style="color:#616e88">// Number of entries</span>

<span style="color:#616e88">// Safe get with default</span>
<span style="color:#81a1c1">int</span> s = scores.getOrDefault(<span style="color:#a3be8c">"Dave"</span>, <span style="color:#b48ead">0</span>);  <span style="color:#616e88">// 0 (Dave not found)</span></code></pre>
      </div>

      <h2>Iterating a Map</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code><span style="color:#616e88">// Iterate over entries</span>
<span style="color:#81a1c1">for</span> (Map.Entry&lt;String, Integer&gt; entry : scores.entrySet()) {
    System.out.println(entry.getKey() + <span style="color:#a3be8c">" → "</span> + entry.getValue());
}

<span style="color:#616e88">// Keys only</span>
<span style="color:#81a1c1">for</span> (String key : scores.keySet()) {
    System.out.println(key);
}

<span style="color:#616e88">// Values only</span>
<span style="color:#81a1c1">for</span> (<span style="color:#81a1c1">int</span> val : scores.values()) {
    System.out.println(val);
}</code></pre>
      </div>

      <h2>Map Implementations Compared</h2>
      <table>
        <thead><tr><th>Class</th><th>Ordering</th><th>Null Keys</th><th>Thread-safe</th></tr></thead>
        <tbody>
          <tr><td><code>HashMap</code></td><td>No order</td><td>1 allowed</td><td>No</td></tr>
          <tr><td><code>LinkedHashMap</code></td><td>Insertion order</td><td>1 allowed</td><td>No</td></tr>
          <tr><td><code>TreeMap</code></td><td>Sorted by key</td><td>Not allowed</td><td>No</td></tr>
          <tr><td><code>Hashtable</code></td><td>No order</td><td>Not allowed</td><td>Yes (legacy)</td></tr>
          <tr><td><code>ConcurrentHashMap</code></td><td>No order</td><td>Not allowed</td><td>Yes</td></tr>
        </tbody>
      </table>
    `
  },

  "java-classes": {
    title: "Classes & Objects",
    topic: "Java",
    body: `
      <p class="intro">A <strong>class</strong> is a blueprint for creating objects. An <strong>object</strong> is an instance of a class with its own state (fields) and behavior (methods).</p>

      <h2>Defining a Class</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code><span style="color:#81a1c1">public class</span> <span style="color:#8fbcbb">Car</span> {
    <span style="color:#616e88">// Fields (state)</span>
    String brand;
    String model;
    <span style="color:#81a1c1">int</span> year;

    <span style="color:#616e88">// Constructor</span>
    <span style="color:#81a1c1">public</span> <span style="color:#88c0d0">Car</span>(String brand, String model, <span style="color:#81a1c1">int</span> year) {
        <span style="color:#81a1c1">this</span>.brand = brand;
        <span style="color:#81a1c1">this</span>.model = model;
        <span style="color:#81a1c1">this</span>.year  = year;
    }

    <span style="color:#616e88">// Method (behavior)</span>
    <span style="color:#81a1c1">public void</span> <span style="color:#88c0d0">start</span>() {
        System.out.println(brand + <span style="color:#a3be8c">" "</span> + model + <span style="color:#a3be8c">" is starting..."</span>);
    }
}</code></pre>
      </div>

      <h2>Creating & Using Objects</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code>Car myCar = <span style="color:#81a1c1">new</span> Car(<span style="color:#a3be8c">"Toyota"</span>, <span style="color:#a3be8c">"Camry"</span>, <span style="color:#b48ead">2023</span>);

<span style="color:#616e88">// Access fields</span>
System.out.println(myCar.brand);  <span style="color:#616e88">// Toyota</span>
System.out.println(myCar.year);   <span style="color:#616e88">// 2023</span>

<span style="color:#616e88">// Call method</span>
myCar.start();  <span style="color:#616e88">// Toyota Camry is starting...</span></code></pre>
      </div>

      <h2>Access Modifiers</h2>
      <table>
        <thead><tr><th>Modifier</th><th>Accessible From</th></tr></thead>
        <tbody>
          <tr><td><code>public</code></td><td>Anywhere</td></tr>
          <tr><td><code>private</code></td><td>Same class only</td></tr>
          <tr><td><code>protected</code></td><td>Same package + subclasses</td></tr>
          <tr><td>(default)</td><td>Same package only</td></tr>
        </tbody>
      </table>

      <div class="info-box">
        <strong>Best Practice:</strong> Keep fields <code>private</code> and expose them through <code>public</code> getter/setter methods (Encapsulation). This protects internal state and allows validation.
      </div>
    `
  },

  "java-lambda": {
    title: "Lambda Expressions",
    topic: "Java",
    body: `
      <p class="intro">Lambda expressions (introduced in Java 8) provide a concise way to represent a <strong>functional interface</strong> — an interface with exactly one abstract method — as an anonymous function.</p>

      <h2>Syntax</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code><span style="color:#616e88">// (parameters) -> expression</span>
(a, b) -> a + b

<span style="color:#616e88">// (parameters) -> { block of statements }</span>
(a, b) -> {
    System.out.println("Adding: " + a + " + " + b);
    <span style="color:#81a1c1">return</span> a + b;
}</code></pre>
      </div>

      <h2>Example: Sorting a List</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code>List&lt;String&gt; names = Arrays.asList(<span style="color:#a3be8c">"Charlie"</span>, <span style="color:#a3be8c">"Alice"</span>, <span style="color:#a3be8c">"Bob"</span>);

<span style="color:#616e88">// Before Java 8</span>
Collections.sort(names, <span style="color:#81a1c1">new</span> Comparator&lt;String&gt;() {
    <span style="color:#81a1c1">public int</span> compare(String a, String b) {
        <span style="color:#81a1c1">return</span> a.compareTo(b);
    }
});

<span style="color:#616e88">// With Lambda</span>
names.sort((a, b) -> a.compareTo(b));

<span style="color:#616e88">// Even shorter with method reference</span>
names.sort(String::compareTo);</code></pre>
      </div>

      <h2>Functional Interfaces (java.util.function)</h2>
      <table>
        <thead><tr><th>Interface</th><th>Method</th><th>Use</th></tr></thead>
        <tbody>
          <tr><td><code>Predicate&lt;T&gt;</code></td><td><code>test(T) → boolean</code></td><td>Filter / condition check</td></tr>
          <tr><td><code>Function&lt;T,R&gt;</code></td><td><code>apply(T) → R</code></td><td>Transform a value</td></tr>
          <tr><td><code>Consumer&lt;T&gt;</code></td><td><code>accept(T) → void</code></td><td>Perform an action</td></tr>
          <tr><td><code>Supplier&lt;T&gt;</code></td><td><code>get() → T</code></td><td>Provide a value</td></tr>
        </tbody>
      </table>

      <h2>Lambda with Streams</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code>List&lt;Integer&gt; nums = Arrays.asList(<span style="color:#b48ead">1</span>, <span style="color:#b48ead">2</span>, <span style="color:#b48ead">3</span>, <span style="color:#b48ead">4</span>, <span style="color:#b48ead">5</span>);

List&lt;Integer&gt; evens = nums.stream()
    .filter(n -> n % <span style="color:#b48ead">2</span> == <span style="color:#b48ead">0</span>)   <span style="color:#616e88">// Lambda as Predicate</span>
    .collect(Collectors.toList());

System.out.println(evens);   <span style="color:#616e88">// [2, 4]</span></code></pre>
      </div>
    `
  },

  // ----------- PYTHON -----------

  "py-what-is": {
    title: "What is Python?",
    topic: "Python",
    body: `
      <p class="intro">Python is a high-level, dynamically-typed, interpreted programming language known for its clean, readable syntax. Created by Guido van Rossum and first released in 1991, Python has become one of the world's most popular languages.</p>

      <h2>Why Python?</h2>
      <ul>
        <li><strong>Readable syntax</strong> – Code looks almost like English, reducing the learning curve.</li>
        <li><strong>Versatile</strong> – Used for web development, data science, AI/ML, automation, scripting, and more.</li>
        <li><strong>Huge ecosystem</strong> – Thousands of libraries via pip (NumPy, Pandas, Flask, Django…).</li>
        <li><strong>Interpreted</strong> – No compilation step; run code directly.</li>
        <li><strong>Cross-platform</strong> – Runs on Windows, macOS, Linux.</li>
      </ul>

      <h2>Hello, Python!</h2>
      <div class="code-block">
        <span class="code-label">Python</span>
        <pre><code>print(<span style="color:#a3be8c">"Hello, World!"</span>)</code></pre>
      </div>

      <p>That's all it takes — one line! Compare this to Java's boilerplate to appreciate Python's simplicity.</p>

      <h2>What Python is Used For</h2>
      <table>
        <thead><tr><th>Domain</th><th>Popular Libraries / Frameworks</th></tr></thead>
        <tbody>
          <tr><td>Web Development</td><td>Django, Flask, FastAPI</td></tr>
          <tr><td>Data Science</td><td>Pandas, NumPy, Matplotlib</td></tr>
          <tr><td>Machine Learning</td><td>TensorFlow, PyTorch, scikit-learn</td></tr>
          <tr><td>Automation</td><td>Selenium, PyAutoGUI, Requests</td></tr>
          <tr><td>DevOps / Scripting</td><td>Ansible, Fabric, Boto3</td></tr>
        </tbody>
      </table>
    `
  },

  "py-lists": {
    title: "Lists in Python",
    topic: "Python",
    body: `
      <p class="intro">A Python <strong>list</strong> is an ordered, mutable (changeable) collection that can hold items of any type — including mixed types.</p>

      <h2>Creating Lists</h2>
      <div class="code-block">
        <span class="code-label">Python</span>
        <pre><code>fruits = [<span style="color:#a3be8c">"apple"</span>, <span style="color:#a3be8c">"banana"</span>, <span style="color:#a3be8c">"cherry"</span>]
numbers = [<span style="color:#b48ead">1</span>, <span style="color:#b48ead">2</span>, <span style="color:#b48ead">3</span>, <span style="color:#b48ead">4</span>, <span style="color:#b48ead">5</span>]
mixed = [<span style="color:#b48ead">1</span>, <span style="color:#a3be8c">"hello"</span>, <span style="color:#81a1c1">True</span>, <span style="color:#b48ead">3.14</span>]
empty = []</code></pre>
      </div>

      <h2>Accessing Elements</h2>
      <div class="code-block">
        <span class="code-label">Python</span>
        <pre><code>fruits[<span style="color:#b48ead">0</span>]    <span style="color:#616e88"># "apple"   (first)</span>
fruits[-<span style="color:#b48ead">1</span>]   <span style="color:#616e88"># "cherry"  (last)</span>
fruits[<span style="color:#b48ead">1</span>:<span style="color:#b48ead">3</span>]  <span style="color:#616e88"># ["banana", "cherry"] (slice)</span></code></pre>
      </div>

      <h2>Modifying Lists</h2>
      <div class="code-block">
        <span class="code-label">Python</span>
        <pre><code>fruits.append(<span style="color:#a3be8c">"mango"</span>)       <span style="color:#616e88"># Add to end</span>
fruits.insert(<span style="color:#b48ead">1</span>, <span style="color:#a3be8c">"grape"</span>)    <span style="color:#616e88"># Insert at index 1</span>
fruits.remove(<span style="color:#a3be8c">"banana"</span>)      <span style="color:#616e88"># Remove first occurrence</span>
popped = fruits.pop()         <span style="color:#616e88"># Remove & return last item</span>
fruits[<span style="color:#b48ead">0</span>] = <span style="color:#a3be8c">"kiwi"</span>           <span style="color:#616e88"># Replace item at index 0</span>
fruits.sort()                 <span style="color:#616e88"># Sort in place</span>
fruits.reverse()              <span style="color:#616e88"># Reverse in place</span>
length = len(fruits)          <span style="color:#616e88"># Number of items</span></code></pre>
      </div>

      <h2>List Comprehension</h2>
      <p>A concise way to create lists based on existing lists.</p>
      <div class="code-block">
        <span class="code-label">Python</span>
        <pre><code>numbers = [<span style="color:#b48ead">1</span>, <span style="color:#b48ead">2</span>, <span style="color:#b48ead">3</span>, <span style="color:#b48ead">4</span>, <span style="color:#b48ead">5</span>]

squares   = [n**<span style="color:#b48ead">2</span> <span style="color:#81a1c1">for</span> n <span style="color:#81a1c1">in</span> numbers]           <span style="color:#616e88"># [1, 4, 9, 16, 25]</span>
evens     = [n <span style="color:#81a1c1">for</span> n <span style="color:#81a1c1">in</span> numbers <span style="color:#81a1c1">if</span> n % <span style="color:#b48ead">2</span> == <span style="color:#b48ead">0</span>]  <span style="color:#616e88"># [2, 4]</span></code></pre>
      </div>
    `
  },

  // ----------- SPRING BOOT -----------

  "sb-what-is": {
    title: "What is Spring Boot?",
    topic: "Spring Boot",
    body: `
      <p class="intro">Spring Boot is an opinionated framework built on top of the Spring Framework that simplifies the setup and development of production-ready Spring applications with minimal configuration.</p>

      <h2>The Problem Spring Boot Solves</h2>
      <p>Traditional Spring required extensive XML configuration or Java-based configuration. Spring Boot eliminates this with <strong>auto-configuration</strong>, <strong>starter dependencies</strong>, and an <strong>embedded server</strong>.</p>

      <h2>Core Features</h2>
      <ul>
        <li><strong>Auto-Configuration</strong> – Automatically configures Spring components based on what's on the classpath.</li>
        <li><strong>Starter POMs</strong> – Curated dependency sets (e.g. <code>spring-boot-starter-web</code>) that pull in everything you need.</li>
        <li><strong>Embedded Server</strong> – Ships with embedded Tomcat/Jetty so you don't need to deploy WARs.</li>
        <li><strong>Actuator</strong> – Production-ready monitoring endpoints out of the box.</li>
        <li><strong>Spring CLI</strong> – Rapidly prototype Spring applications from the command line.</li>
      </ul>

      <h2>Creating a Minimal REST API</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code><span style="color:#81a1c1">@RestController</span>
<span style="color:#81a1c1">public class</span> HelloController {

    <span style="color:#81a1c1">@GetMapping</span>(<span style="color:#a3be8c">"/hello"</span>)
    <span style="color:#81a1c1">public</span> String hello() {
        <span style="color:#81a1c1">return</span> <span style="color:#a3be8c">"Hello from Spring Boot!"</span>;
    }
}</code></pre>
      </div>

      <div class="info-box">
        <strong>Get Started Quickly</strong> — Use <a href="https://start.spring.io" target="_blank" style="color:var(--accent)">start.spring.io</a> (Spring Initializr) to generate a project with the dependencies you need in seconds.
      </div>
    `
  },

  "sb-controller": {
    title: "@RestController & Request Mapping",
    topic: "Spring Boot",
    body: `
      <p class="intro"><code>@RestController</code> combines <code>@Controller</code> and <code>@ResponseBody</code>, making every method return data directly serialized to JSON/XML rather than a view name.</p>

      <h2>A Full CRUD Controller</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code><span style="color:#81a1c1">@RestController</span>
<span style="color:#81a1c1">@RequestMapping</span>(<span style="color:#a3be8c">"/api/users"</span>)
<span style="color:#81a1c1">public class</span> UserController {

    <span style="color:#81a1c1">@GetMapping</span>
    <span style="color:#81a1c1">public</span> List&lt;User&gt; getAllUsers() { ... }

    <span style="color:#81a1c1">@GetMapping</span>(<span style="color:#a3be8c">"/{id}"</span>)
    <span style="color:#81a1c1">public</span> User getUserById(<span style="color:#81a1c1">@PathVariable</span> Long id) { ... }

    <span style="color:#81a1c1">@PostMapping</span>
    <span style="color:#81a1c1">public</span> User createUser(<span style="color:#81a1c1">@RequestBody</span> User user) { ... }

    <span style="color:#81a1c1">@PutMapping</span>(<span style="color:#a3be8c">"/{id}"</span>)
    <span style="color:#81a1c1">public</span> User updateUser(<span style="color:#81a1c1">@PathVariable</span> Long id,
                          <span style="color:#81a1c1">@RequestBody</span> User user) { ... }

    <span style="color:#81a1c1">@DeleteMapping</span>(<span style="color:#a3be8c">"/{id}"</span>)
    <span style="color:#81a1c1">public void</span> deleteUser(<span style="color:#81a1c1">@PathVariable</span> Long id) { ... }
}</code></pre>
      </div>

      <h2>Key Annotations</h2>
      <table>
        <thead><tr><th>Annotation</th><th>HTTP Method</th><th>Use</th></tr></thead>
        <tbody>
          <tr><td><code>@GetMapping</code></td><td>GET</td><td>Retrieve data</td></tr>
          <tr><td><code>@PostMapping</code></td><td>POST</td><td>Create resource</td></tr>
          <tr><td><code>@PutMapping</code></td><td>PUT</td><td>Update resource (full)</td></tr>
          <tr><td><code>@PatchMapping</code></td><td>PATCH</td><td>Update resource (partial)</td></tr>
          <tr><td><code>@DeleteMapping</code></td><td>DELETE</td><td>Delete resource</td></tr>
        </tbody>
      </table>
    `
  },

  // ----------- SQL -----------

  "sql-select": {
    title: "SELECT Statement",
    topic: "SQL",
    body: `
      <p class="intro">The <code>SELECT</code> statement is the most fundamental SQL command — it retrieves data from one or more tables in a database.</p>

      <h2>Basic Syntax</h2>
      <div class="code-block">
        <span class="code-label">SQL</span>
        <pre><code><span style="color:#81a1c1">SELECT</span> column1, column2
<span style="color:#81a1c1">FROM</span> table_name
<span style="color:#81a1c1">WHERE</span> condition
<span style="color:#81a1c1">ORDER BY</span> column1 <span style="color:#81a1c1">ASC</span>
<span style="color:#81a1c1">LIMIT</span> <span style="color:#b48ead">10</span>;</code></pre>
      </div>

      <h2>Examples</h2>
      <div class="code-block">
        <span class="code-label">SQL</span>
        <pre><code><span style="color:#616e88">-- Select all columns</span>
<span style="color:#81a1c1">SELECT</span> * <span style="color:#81a1c1">FROM</span> employees;

<span style="color:#616e88">-- Select specific columns</span>
<span style="color:#81a1c1">SELECT</span> first_name, last_name, salary <span style="color:#81a1c1">FROM</span> employees;

<span style="color:#616e88">-- Select with alias</span>
<span style="color:#81a1c1">SELECT</span> first_name <span style="color:#81a1c1">AS</span> <span style="color:#a3be8c">"First Name"</span>, salary * <span style="color:#b48ead">12</span> <span style="color:#81a1c1">AS</span> annual_salary
<span style="color:#81a1c1">FROM</span> employees;

<span style="color:#616e88">-- Filter with WHERE</span>
<span style="color:#81a1c1">SELECT</span> * <span style="color:#81a1c1">FROM</span> employees <span style="color:#81a1c1">WHERE</span> department = <span style="color:#a3be8c">'Engineering'</span>;

<span style="color:#616e88">-- Sort results</span>
<span style="color:#81a1c1">SELECT</span> * <span style="color:#81a1c1">FROM</span> employees <span style="color:#81a1c1">ORDER BY</span> salary <span style="color:#81a1c1">DESC</span>;</code></pre>
      </div>

      <h2>SELECT with Aggregate Functions</h2>
      <div class="code-block">
        <span class="code-label">SQL</span>
        <pre><code><span style="color:#81a1c1">SELECT</span> COUNT(*) <span style="color:#81a1c1">FROM</span> employees;                      <span style="color:#616e88">-- Total rows</span>
<span style="color:#81a1c1">SELECT</span> AVG(salary) <span style="color:#81a1c1">FROM</span> employees;                    <span style="color:#616e88">-- Average salary</span>
<span style="color:#81a1c1">SELECT</span> MAX(salary), MIN(salary) <span style="color:#81a1c1">FROM</span> employees;       <span style="color:#616e88">-- Max & min</span>
<span style="color:#81a1c1">SELECT</span> department, COUNT(*) <span style="color:#81a1c1">FROM</span> employees <span style="color:#81a1c1">GROUP BY</span> department;</code></pre>
      </div>
    `
  },

  // ----------- DSA -----------

  "dsa-complexity": {
    title: "Time & Space Complexity",
    topic: "DSA",
    body: `
      <p class="intro">Complexity analysis tells us how an algorithm's resource usage scales with input size. We use <strong>Big O Notation</strong> to express the worst-case growth rate.</p>

      <h2>Big O Cheat Sheet</h2>
      <table>
        <thead><tr><th>Notation</th><th>Name</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><code>O(1)</code></td><td>Constant</td><td>Array index access</td></tr>
          <tr><td><code>O(log n)</code></td><td>Logarithmic</td><td>Binary search</td></tr>
          <tr><td><code>O(n)</code></td><td>Linear</td><td>Loop through array</td></tr>
          <tr><td><code>O(n log n)</code></td><td>Linearithmic</td><td>Merge sort, Quick sort</td></tr>
          <tr><td><code>O(n²)</code></td><td>Quadratic</td><td>Nested loops, Bubble sort</td></tr>
          <tr><td><code>O(2ⁿ)</code></td><td>Exponential</td><td>Recursive Fibonacci</td></tr>
          <tr><td><code>O(n!)</code></td><td>Factorial</td><td>All permutations</td></tr>
        </tbody>
      </table>

      <h2>Practical Examples</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code><span style="color:#616e88">// O(1) — constant time</span>
<span style="color:#81a1c1">int</span> first = arr[<span style="color:#b48ead">0</span>];

<span style="color:#616e88">// O(n) — linear time</span>
<span style="color:#81a1c1">for</span> (<span style="color:#81a1c1">int</span> x : arr) System.out.println(x);

<span style="color:#616e88">// O(n²) — quadratic (nested loops)</span>
<span style="color:#81a1c1">for</span> (<span style="color:#81a1c1">int</span> i = <span style="color:#b48ead">0</span>; i &lt; n; i++)
    <span style="color:#81a1c1">for</span> (<span style="color:#81a1c1">int</span> j = <span style="color:#b48ead">0</span>; j &lt; n; j++)
        System.out.println(i + <span style="color:#a3be8c">","</span> + j);</code></pre>
      </div>

      <div class="note-box">
        <strong>Space Complexity</strong> measures the extra memory used. A solution using a hash map for lookups trades O(n) space for O(1) lookup time — a classic time-space trade-off.
      </div>
    `
  },

  "dsa-bubble": {
    title: "Bubble Sort",
    topic: "DSA",
    body: `
      <p class="intro">Bubble Sort is the simplest sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</p>

      <h2>How It Works</h2>
      <p>In each pass through the array, the largest unsorted element "bubbles up" to its correct position at the end. After <em>n–1</em> passes, the array is fully sorted.</p>

      <h2>Implementation</h2>
      <div class="code-block">
        <span class="code-label">Java</span>
        <pre><code><span style="color:#81a1c1">public static void</span> bubbleSort(<span style="color:#81a1c1">int</span>[] arr) {
    <span style="color:#81a1c1">int</span> n = arr.length;
    <span style="color:#81a1c1">for</span> (<span style="color:#81a1c1">int</span> i = <span style="color:#b48ead">0</span>; i &lt; n - <span style="color:#b48ead">1</span>; i++) {
        <span style="color:#81a1c1">boolean</span> swapped = <span style="color:#81a1c1">false</span>;
        <span style="color:#81a1c1">for</span> (<span style="color:#81a1c1">int</span> j = <span style="color:#b48ead">0</span>; j &lt; n - i - <span style="color:#b48ead">1</span>; j++) {
            <span style="color:#81a1c1">if</span> (arr[j] &gt; arr[j + <span style="color:#b48ead">1</span>]) {
                <span style="color:#616e88">// Swap</span>
                <span style="color:#81a1c1">int</span> temp = arr[j];
                arr[j] = arr[j + <span style="color:#b48ead">1</span>];
                arr[j + <span style="color:#b48ead">1</span>] = temp;
                swapped = <span style="color:#81a1c1">true</span>;
            }
        }
        <span style="color:#616e88">// Optimization: stop early if no swaps in a pass</span>
        <span style="color:#81a1c1">if</span> (!swapped) <span style="color:#81a1c1">break</span>;
    }
}</code></pre>
      </div>

      <h2>Complexity</h2>
      <table>
        <thead><tr><th>Case</th><th>Time</th><th>Space</th></tr></thead>
        <tbody>
          <tr><td>Best (sorted)</td><td>O(n)</td><td>O(1)</td></tr>
          <tr><td>Average</td><td>O(n²)</td><td>O(1)</td></tr>
          <tr><td>Worst (reversed)</td><td>O(n²)</td><td>O(1)</td></tr>
        </tbody>
      </table>

      <div class="note-box">
        <strong>When to use:</strong> Bubble Sort is mainly useful for educational purposes and very small datasets. For production use, prefer <strong>Merge Sort</strong> or <strong>Quick Sort</strong>.
      </div>
    `
  },

};
