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
