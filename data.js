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
        id: "java-language-part-1",
        title: "The Java Language - Part I",
        icon: "☕",
        subtopics: [
          { id: "java-overview", title: "An Overview of Java"},
          { id: "java-variables-and-arrays", title: "Data Types, Variables, and Arrays" },
          { id: "java-operators",  title: "Operators" },
          { id: "java-control-statements",  title: "Control Statements" },
          { id: "java-intro-classes",  title: "Introducing Classes" },
          {id: "java-closer-look-classes",  title: "A Closer Look at Methods and Classes"}
        ]
      },
      {
        id: "java-language-part-2",
        title: "The Java Language - Part II",
        icon: "☕",
        subtopics: [
          { id: "java-inheritance", title: "Inheritance"},
          { id: "java-packages-and-interfaces", title: "Packages and Interfaces" },
          { id: "java-exception-handling",  title: "Exception Handling" },
          { id: "java-multithreading",  title: "Multithreaded Programming" },
          { id: "java-enumerations",  title: "Enumerations, Autoboxing, and Annotations" },
          {id: "java-intro-classes",  title: "A Closer Look at Methods and Classes"}
        ]
      },
      {
        id: "java-language-part-3",
        title: "The Java Language - Part III",
        icon: "☕",
        subtopics: [
          { id: "java-try-catch", title: "I/O, Try-with-Resources, and Other Topics"},
          { id: "java-generics", title: "Generics" },
          { id: "java-lambda-expressions",  title: "Lambda Expressions" },
          { id: "java-modules",  title: "Modules" }
        ]
      },
      {
        id: "java-library",
        title: "The Java Library",
        icon: "📌",
        subtopics: [
          { id: "java-string-handling",     title: "String Handling" },
          { id: "java-lang",  title: "Exploring java.lang" },
          { id: "java-collections-framework",  title: "Part 1: The Collections Framework" },
          { id: "java-utility-classes",    title: "Part 2: More Utility Classes "},
          { id: "java-input-output", title: "Input/Output: Exploring java.io" }
        ]
      },
      {
        id: "java-advanced",
        title: "Advanced Java",
        icon: "🚀",
        subtopics: [
          { id: "java-generics-advanced",  title: "Advanced Generics" },
          { id: "java-lambda-advanced",    title: "Advanced Lambda Expressions" },
          { id: "java-streams-api",   title: "Streams API" },
          { id: "java-functional-interfaces",   title: "Functional Interfaces" },
          { id: "java-optional",        title: "Optional" },
        ]
      },
      {
        id: "java-interviews",
        title: "Interview Questions",
        icon: "💭",
        subtopics: [
          { id: "java-interview-1",  title: "Question Set 1" },
          { id: "java-interview-2",  title: "Question Set 2" },
          { id: "java-interview-3",  title: "Question Set 3" },
          { id: "java-interview-4",  title: "Question Set 4" },
          { id: "java-interview-5",  title: "Question Set 5" },
          // TODO - To be moved to Springboot section
          { id: "sb-interview-1",  title: "Spring Boot Set 1" },
          { id: "sb-interview-2",  title: "Spring Boot Set 2" },
          { id: "sb-interview-3",  title: "Spring Boot Set 3" },
          { id: "sb-interview-4",  title: "Spring Boot Set 4" },
          { id: "sb-interview-5",  title: "Spring Boot Set 5" },
        ]
      },
      {
        id: "java-appendixes",
        title: "Appendixes",
        icon: "📎",
        subtopics: [
          { id: "java-doc-comments",  title: "Using Java’s Documentation Comments" },
          { id: "java-jshell",        title: "Introducing JShell" },
          { id: "java-single-file",   title: "Compile and Run Simple Single-File Programs in One Step" }
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
      {
        id: "sb-data",
        title: "Spring Boot Interviews",
        icon: "🗄️",
        subtopics: [
          { id: "sb-interview-set-1",     title: "Interview Question. Set-1" },
          { id: "sb-interview-set-2", title: "Interview Question. Set-2" },
          { id: "sb-interview-set-3",    title: "Interview Question. Set-3" },
          { id: "sb-interview-set-4",    title: "Interview Question. Set-3" },
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
