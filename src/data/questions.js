const questionsData = {
  html: [
    {
      question: "Which tag is used to insert an image in HTML?",
      answers: ["<img>", "<src>", "<picture>", "<figure>"],
      correct: "<img>"
    },
    {
      question: "Which tag defines a hyperlink?",
      answers: ["<a>", "<link>", "<href>", "<url>"],
      correct: "<a>"
    },
    {
      question: "Which attribute is required for the <img> tag?",
      answers: ["src", "alt", "href", "title"],
      correct: "src"
    },
    {
      question: "Which tag is used for a line break?",
      answers: ["<br>", "<lb>", "<hr>", "<break>"],
      correct: "<br>"
    },
    {
      question: "Which tag defines a table row?",
      answers: ["<tr>", "<row>", "<td>", "<th>"],
      correct: "<tr>"
    },
    {
      question: "Which tag creates an ordered list?",
      answers: ["<ol>", "<ul>", "<li>", "<dl>"],
      correct: "<ol>"
    },
    {
      question: "Which tag defines table data (cell)?",
      answers: ["<td>", "<tr>", "<th>", "<cell>"],
      correct: "<td>"
    },
    {
      question: "Which tag is used for the largest heading?",
      answers: ["<h1>", "<h6>", "<head>", "<header>"],
      correct: "<h1>"
    },
    {
      question: "Which tag contains metadata for the document?",
      answers: ["<head>", "<meta>", "<header>", "<info>"],
      correct: "<head>"
    },
    {
      question: "Which tag is used to make text bold?",
      answers: ["<b>", "<strong>", "<bold>", "<em>"],
      correct: "<b>"
    },
    {
      question: "Which tag is used to create a checkbox?",
      answers: ["<input type=\"checkbox\">", "<checkbox>", "<input type=\"check\">", "<box>"],
      correct: "<input type=\"checkbox\">"
    },
    {
      question: "Which tag defines a list item?",
      answers: ["<li>", "<ul>", "<item>", "<dl>"],
      correct: "<li>"
    },
    {
      question: "Which attribute opens a link in a new tab?",
      answers: ["target=\"_blank\"", "newtab", "window=\"new\"", "blank"],
      correct: "target=\"_blank\""
    },
    {
      question: "Which tag is used for an unordered list?",
      answers: ["<ul>", "<ol>", "<li>", "<list>"],
      correct: "<ul>"
    },
    {
      question: "Which tag defines a form?",
      answers: ["<form>", "<input>", "<submit>", "<frm>"],
      correct: "<form>"
    },
    {
      question: "Which tag is used to insert a horizontal line?",
      answers: ["<hr>", "<line>", "<br>", "<border>"],
      correct: "<hr>"
    },
    {
      question: "Which tag defines a dropdown list?",
      answers: ["<select>", "<dropdown>", "<option>", "<list>"],
      correct: "<select>"
    },
    {
      question: "Which tag defines the main content of a document?",
      answers: ["<main>", "<body>", "<section>", "<content>"],
      correct: "<main>"
    },
    {
      question: "Which tag is used for emphasized text?",
      answers: ["<em>", "<b>", "<i>", "<strong>"],
      correct: "<em>"
    },
    {
      question: "Which tag is used to create a radio button?",
      answers: ["<input type=\"radio\">", "<radio>", "<input type=\"button\">", "<input-radio>"],
      correct: "<input type=\"radio\">"
    },
    {
      question: "Which tag defines the document body?",
      answers: ["<body>", "<main>", "<section>", "<container>"],
      correct: "<body>"
    },
    {
      question: "Which tag creates a table header?",
      answers: ["<th>", "<thead>", "<tr>", "<header>"],
      correct: "<th>"
    },
    {
      question: "Which tag is used for a dropdown option?",
      answers: ["<option>", "<select>", "<item>", "<dropdown>"],
      correct: "<option>"
    },
    {
      question: "Which tag is used for comments in HTML?",
      answers: ["<!-- comment -->", "// comment", "# comment", "<comment>"],
      correct: "<!-- comment -->"
    },
    {
      question: "Which tag defines a footer for a document?",
      answers: ["<footer>", "<foot>", "<bottom>", "<end>"],
      correct: "<footer>"
    },
    {
      question: "Which tag groups form elements?",
      answers: ["<fieldset>", "<group>", "<formgroup>", "<set>"],
      correct: "<fieldset>"
    },
    {
      question: "Which tag is used for navigation links?",
      answers: ["<nav>", "<navigation>", "<links>", "<navbar>"],
      correct: "<nav>"
    },
    {
      question: "Which tag defines a section in a document?",
      answers: ["<section>", "<div>", "<part>", "<block>"],
      correct: "<section>"
    },
    {
      question: "Which attribute provides alternative text for images?",
      answers: ["alt", "src", "title", "desc"],
      correct: "alt"
    },
    {
      question: "Which tag is used for inline containers?",
      answers: ["<span>", "<div>", "<inline>", "<container>"],
      correct: "<span>"
    }
  ],
  css: [
    {
      question: "Which property sets the text color?",
      answers: ["color", "background", "font-color", "text-color"],
      correct: "color"
    },
    {
      question: "Which property sets the background color?",
      answers: ["background-color", "color", "bg", "background"],
      correct: "background-color"
    },
    {
      question: "Which property changes the font size?",
      answers: ["font-size", "text-size", "size", "font-style"],
      correct: "font-size"
    },
    {
      question: "Which property is used for rounded corners?",
      answers: ["border-radius", "corner-radius", "radius", "rounded"],
      correct: "border-radius"
    },
    {
      question: "Which property aligns text to the center?",
      answers: ["text-align", "align", "center", "align-text"],
      correct: "text-align"
    },
    {
      question: "Which selector selects all elements with class 'test'?",
      answers: [".test", "#test", "test", "*test"],
      correct: ".test"
    },
    {
      question: "Which selector selects the element with id 'demo'?",
      answers: ["#demo", ".demo", "demo", "*demo"],
      correct: "#demo"
    },
    {
      question: "Which property adds space inside an element?",
      answers: ["padding", "margin", "gap", "space"],
      correct: "padding"
    },
    {
      question: "Which property adds space outside an element?",
      answers: ["margin", "padding", "border", "gap"],
      correct: "margin"
    },
    {
      question: "Which property makes text italic?",
      answers: ["font-style: italic", "text-decoration: italic", "italic", "font-italic"],
      correct: "font-style: italic"
    },
    {
      question: "Which property underlines text?",
      answers: ["text-decoration: underline", "font-underline", "underline", "text-line"],
      correct: "text-decoration: underline"
    },
    {
      question: "How do you center a div horizontally?",
      answers: ["margin: 0 auto", "text-align: center", "center-div", "display: center"],
      correct: "margin: 0 auto"
    },
    {
      question: "Which property changes the cursor to a pointer on hover?",
      answers: ["cursor: pointer", "pointer", "cursor", "hover-cursor"],
      correct: "cursor: pointer"
    },
    {
      question: "Which pseudo-class styles an element on hover?",
      answers: [":hover", ":active", ":focus", ":visited"],
      correct: ":hover"
    },
    {
      question: "Which property makes an element invisible?",
      answers: ["display: none", "visibility: hidden", "opacity: 0", "hidden: true"],
      correct: "display: none"
    },
    {
      question: "Which function creates a linear gradient?",
      answers: ["linear-gradient()", "gradient()", "color-gradient()", "background-gradient()"],
      correct: "linear-gradient()"
    },
    {
      question: "Which property adds shadow to text?",
      answers: ["text-shadow", "box-shadow", "shadow", "font-shadow"],
      correct: "text-shadow"
    },
    {
      question: "Which property adds shadow to a box?",
      answers: ["box-shadow", "text-shadow", "shadow", "container-shadow"],
      correct: "box-shadow"
    },
    {
      question: "Which property sets the width of an element?",
      answers: ["width", "size", "length", "max-width"],
      correct: "width"
    },
    {
      question: "Which unit is a percentage?",
      answers: ["%", "px", "em", "rem"],
      correct: "%"
    },
    {
      question: "Which property sets the spacing between letters?",
      answers: ["letter-spacing", "text-spacing", "font-spacing", "word-spacing"],
      correct: "letter-spacing"
    },
    {
      question: "Which property changes the font weight?",
      answers: ["font-weight", "font-size", "font-thickness", "font-style"],
      correct: "font-weight"
    },
    {
      question: "Which property sets the background image?",
      answers: ["background-image", "background", "image", "img-background"],
      correct: "background-image"
    },
    {
      question: "Which selector selects all <p> elements?",
      answers: ["p", ".p", "#p", "*p"],
      correct: "p"
    },
    {
      question: "Which property makes an element a flex container?",
      answers: ["display: flex", "flex: display", "flex", "container: flex"],
      correct: "display: flex"
    },
    {
      question: "Which property aligns items vertically in flex?",
      answers: ["align-items", "justify-content", "vertical-align", "flex-align"],
      correct: "align-items"
    },
    {
      question: "Which property hides overflow?",
      answers: ["overflow: hidden", "hidden: overflow", "hide-overflow", "overflow: none"],
      correct: "overflow: hidden"
    },
    {
      question: "Which property makes an element sticky?",
      answers: ["position: sticky", "sticky: true", "sticky-position", "element-sticky"],
      correct: "position: sticky"
    },
    {
      question: "Which property sets the border of an element?",
      answers: ["border", "border-width", "outline", "stroke"],
      correct: "border"
    },
    {
      question: "Which property changes the background to a gradient?",
      answers: ["background: linear-gradient(...)", "background-gradient", "gradient", "color-gradient"],
      correct: "background: linear-gradient(...)"
    }
  ],
  javascript: [
    {
      question: "How do you declare a constant variable?",
      answers: ["const", "let", "var", "constant"],
      correct: "const"
    },
    {
      question: "Which operator checks value and type?",
      answers: ["===", "==", "=", "!=="],
      correct: "==="
    },
    {
      question: "What will typeof [] return?",
      answers: ["object", "array", "list", "undefined"],
      correct: "object"
    },
    {
      question: "Which method converts a JSON string to an object?",
      answers: ["JSON.parse", "JSON.stringify", "parseJSON", "toObject"],
      correct: "JSON.parse"
    },
    {
      question: "Which symbol starts a single-line comment?",
      answers: ["//", "/*", "#", "<!--"],
      correct: "//"
    },
    {
      question: "Which function executes code after a delay?",
      answers: ["setTimeout", "setInterval", "delay", "timeout"],
      correct: "setTimeout"
    },
    {
      question: "Which method adds an item at the end of an array?",
      answers: ["push", "pop", "shift", "unshift"],
      correct: "push"
    },
    {
      question: "What is the type of NaN?",
      answers: ["number", "NaN", "object", "undefined"],
      correct: "number"
    },
    {
      question: "Which loop runs at least once?",
      answers: ["do...while", "while", "for", "forEach"],
      correct: "do...while"
    },
    {
      question: "Which keyword stops a loop?",
      answers: ["break", "stop", "exit", "halt"],
      correct: "break"
    },
    {
      question: "Which method removes the last item from an array?",
      answers: ["pop", "push", "shift", "unshift"],
      correct: "pop"
    },
    {
      question: "Which method sorts an array?",
      answers: ["sort", "order", "arrange", "reverse"],
      correct: "sort"
    },
    {
      question: "Which keyword defines a function?",
      answers: ["function", "def", "func", "method"],
      correct: "function"
    },
    {
      question: "How do you check the type of a variable?",
      answers: ["typeof", "type", "instanceof", "isType"],
      correct: "typeof"
    },
    {
      question: "Which method repeats an action for each element?",
      answers: ["forEach", "map", "loop", "each"],
      correct: "forEach"
    },
    {
      question: "How do you access the first element of an array named arr?",
      answers: ["arr[0]", "arr(0)", "arr.first", "arr{0}"],
      correct: "arr[0]"
    },
    {
      question: "Which operator returns true if both conditions are true?",
      answers: ["&&", "||", "and", "&"],
      correct: "&&"
    },
    {
      question: "Which method adds an item at the beginning of an array?",
      answers: ["unshift", "push", "shift", "prepend"],
      correct: "unshift"
    },
    {
      question: "Which method turns an array into a string?",
      answers: ["join", "split", "toString", "concat"],
      correct: "join"
    },
    {
      question: "How do you convert a value to a number?",
      answers: ["Number()", "parseInt()", "toNumber()", "convert()"],
      correct: "Number()"
    },
    {
      question: "Which keyword defines a class?",
      answers: ["class", "object", "constructor", "Class"],
      correct: "class"
    },
    {
      question: "Which method removes the first item from an array?",
      answers: ["shift", "pop", "remove", "deleteFirst"],
      correct: "shift"
    },
    {
      question: "Which operator is used for string concatenation?",
      answers: ["+", "&", "concat", "join"],
      correct: "+"
    },
    {
      question: "Which property returns the length of an array?",
      answers: ["length", "size", "count", "getLength"],
      correct: "length"
    },
    {
      question: "Which method reverses the order of an array?",
      answers: ["reverse", "invert", "flip", "swap"],
      correct: "reverse"
    },
    {
      question: "Which operator returns true if at least one condition is true?",
      answers: ["||", "&&", "or", "|"],
      correct: "||"
    },
    {
      question: "How do you split a string into an array?",
      answers: ["split", "join", "toArray", "fromString"],
      correct: "split"
    },
    {
      question: "How do you check if an array contains a value?",
      answers: ["includes", "contains", "has", "inArray"],
      correct: "includes"
    },
    {
      question: "Which method finds the index of an element?",
      answers: ["indexOf", "findIndex", "search", "position"],
      correct: "indexOf"
    }
  ],
  react: [
    {
      question: "What is JSX?",
      answers: ["JavaScript syntax extension", "Template engine", "CSS preprocessor", "Database"],
      correct: "JavaScript syntax extension"
    },
    {
      question: "Which hook manages state?",
      answers: ["useState", "useEffect", "useContext", "useMemo"],
      correct: "useState"
    },
    {
      question: "Which prop identifies list items?",
      answers: ["key", "id", "index", "value"],
      correct: "key"
    },
    {
      question: "Which hook runs after every render?",
      answers: ["useEffect", "useLayoutEffect", "useRef", "useCallback"],
      correct: "useEffect"
    },
    {
      question: "React is maintained by?",
      answers: ["Facebook", "Google", "Microsoft", "Amazon"],
      correct: "Facebook"
    },
    {
      question: "Which package handles routing?",
      answers: ["react-router-dom", "react-navigation", "router", "next/router"],
      correct: "react-router-dom"
    },
    {
      question: "What tool compiles JSX?",
      answers: ["Babel", "Webpack", "Parcel", "Rollup"],
      correct: "Babel"
    },
    {
      question: "Which hook stores mutable value?",
      answers: ["useRef", "useMemo", "useState", "useReducer"],
      correct: "useRef"
    },
    {
      question: "Which method renders React app to DOM?",
      answers: ["createRoot", "render", "hydrate", "mount"],
      correct: "createRoot"
    },
    {
      question: "What is Prop Drilling?",
      answers: ["Passing props down many levels", "Using context", "Lifting state", "Memoizing props"],
      correct: "Passing props down many levels"
    },
    {
      question: "Which hook is used for side effects?",
      answers: ["useEffect", "useState", "useRef", "useContext"],
      correct: "useEffect"
    },
    {
      question: "Which hook returns a memorized function?",
      answers: ["useCallback", "useMemo", "useEffect", "useRef"],
      correct: "useCallback"
    },
    {
      question: "Which hook returns a memorized value?",
      answers: ["useMemo", "useCallback", "useRef", "useState"],
      correct: "useMemo"
    },
    {
      question: "Which method resets state in React?",
      answers: ["setState", "resetState", "clearState", "restart"],
      correct: "setState"
    },
    {
      question: "Which hook provides global context?",
      answers: ["useContext", "useReducer", "useMemo", "useState"],
      correct: "useContext"
    },
    {
      question: "Which hook is used for reducers?",
      answers: ["useReducer", "useState", "useContext", "useMemo"],
      correct: "useReducer"
    },
    {
      question: "Which hook gets a reference to an element?",
      answers: ["useRef", "useState", "useEffect", "useMemo"],
      correct: "useRef"
    },
    {
      question: "How do you pass data between components?",
      answers: ["props", "state", "context", "emit"],
      correct: "props"
    },
    {
      question: "Which hook adds effects on mount?",
      answers: ["useEffect", "useLayoutEffect", "useRef", "useMemo"],
      correct: "useEffect"
    },
    {
      question: "Which package mounts a React app?",
      answers: ["react-dom", "react", "react-router", "react-scripts"],
      correct: "react-dom"
    },
    {
      question: "Which component type uses render method?",
      answers: ["class component", "function component", "arrow component", "pure component"],
      correct: "class component"
    },
    {
      question: "Which hook runs after layout?",
      answers: ["useLayoutEffect", "useEffect", "useRef", "useMemo"],
      correct: "useLayoutEffect"
    },
    {
      question: "Which hook updates state?",
      answers: ["useState", "useReducer", "useContext", "useEffect"],
      correct: "useState"
    },
    {
      question: "Which hook listens to context changes?",
      answers: ["useContext", "useReducer", "useMemo", "useState"],
      correct: "useContext"
    },
    {
      question: "Which hook runs after DOM updates?",
      answers: ["useLayoutEffect", "useEffect", "useRef", "useMemo"],
      correct: "useLayoutEffect"
    },
    {
      question: "Which hook memorizes a computed value?",
      answers: ["useMemo", "useCallback", "useEffect", "useRef"],
      correct: "useMemo"
    },
    {
      question: "Which hook returns an array with state and setter?",
      answers: ["useState", "useEffect", "useRef", "useCallback"],
      correct: "useState"
    },
    {
      question: "Which hook is for complex reducers?",
      answers: ["useReducer", "useState", "useMemo", "useRef"],
      correct: "useReducer"
    },
    {
      question: "Which hook avoids unnecessary renders?",
      answers: ["useMemo", "useEffect", "useReducer", "useRef"],
      correct: "useMemo"
    },
    {
      question: "Which hook runs at every re-render?",
      answers: ["useEffect", "useMemo", "useContext", "useState"],
      correct: "useEffect"
    }
  ]
};

export default questionsData;