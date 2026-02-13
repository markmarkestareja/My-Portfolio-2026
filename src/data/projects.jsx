import cubeCasa from "../assets/images/hero/projects/cubecasa.png";
import gplms from "../assets/images/hero/projects/gplms.png";
import personalPortfolio1 from "../assets/images/hero/projects/personalPortfolio1.png";
import personalPortfolio2 from "../assets/images/hero/projects/personalPortfolio2.png";
import froilanPersonalPortfolio from "../assets/images/hero/projects/froilanPersonalPortfolio.png";

const techStacks = {
    html: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><g fill="currentColor" clipPath="url(#SVGXv8lpc2Y)"><path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656zM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058zm4.181 0h1.083v2.167h1.52v1.07h-2.603z"/><path fillRule="evenodd" d="M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571z" clipRule="evenodd"/></g><defs><clipPath id="SVGXv8lpc2Y"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>,
    css: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="currentColor" d="M11.3 0c.4 0 .7.3.7.8v10.5c0 .4-.3.7-.7.7H.8c-.5 0-.8-.3-.8-.7V.8C0 .3.3 0 .8 0zM9.5 3C8.7 3 8 3.7 8 4.5s.5 1.4 1.2 1.7l.3.1c.3.1.5.3.5.6v.7c-.1.2-.3.4-.5.4s-.4-.2-.5-.4v-.7c-.1-.2-.3-.4-.5-.4s-.4.2-.5.4v.7c.1.8.7 1.4 1.5 1.4s1.4-.6 1.5-1.4v-.7c-.1-.7-.5-1.4-1.2-1.6h-.2l-.1-.1c-.3-.1-.5-.4-.5-.7s.2-.5.5-.5c.2 0 .4.2.5.4v.2c.1.2.3.4.5.4c.3 0 .5-.2.5-.5c0-.8-.7-1.5-1.5-1.5M6 3c-.8 0-1.5.7-1.5 1.5S5 5.9 5.7 6.2l.3.1c.3.1.5.3.5.6v.7c-.1.2-.3.4-.5.4s-.4-.2-.5-.4v-.7c-.1-.2-.3-.4-.5-.4s-.4.2-.5.4v.7C4.6 8.4 5.2 9 6 9s1.4-.6 1.5-1.4v-.7c-.1-.7-.5-1.4-1.2-1.6h-.2L6 5.2c-.3-.1-.5-.4-.5-.7S5.7 4 6 4c.2 0 .4.2.5.4v.2c.1.2.3.4.5.4c.3 0 .5-.2.5-.5C7.5 3.7 6.8 3 6 3M2.5 3c-.8 0-1.4.6-1.5 1.4v3.2c.1.8.7 1.4 1.5 1.4S3.9 8.4 4 7.6v-.7c-.1-.2-.3-.4-.5-.4s-.4.2-.5.4v.7c-.1.2-.3.4-.5.4s-.4-.2-.5-.4V4.4c.1-.2.3-.4.5-.4s.4.2.5.4v.7c.1.2.3.4.5.4s.4-.2.5-.4v-.7C3.9 3.6 3.3 3 2.5 3"/></svg>,
    js: <svg xmlns="http://www.w3.org/2000/svg" width="448" height="512" viewBox="0 0 448 512"><path fill="currentColor" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7c0 43.6-25.6 63.5-62.9 63.5m85.8-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43"/></svg>,
    php: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5s12-2.855 12-6.5s-5.271-6.5-12-6.5m-1.246 2h1.31l-.416 2h1.17c.742 0 1.24.104 1.524.363c.277.256.361.676.25 1.248l-.52 2.389H12.74l.479-2.209q.086-.457-.067-.625c-.101-.111-.324-.166-.658-.166h-1.049l-.633 3H9.5zM5 9.5h2.666c1.271 0 2.041.852 1.74 2.123C9.056 13.1 8.12 13.5 6.396 13.5h-.824L5.311 15H3.986zm10.5 0h2.666c1.271 0 2.041.852 1.74 2.123c-.35 1.477-1.287 1.877-3.01 1.877h-.824l-.261 1.5h-1.325zm-9.365 1l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.135-.813-.99-.813zm10.5 0l-.377 2h.855c.74 0 1.428-.084 1.543-1.187c.043-.428-.134-.813-.99-.813z"/></svg>,
    bootstrap: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M4.985 2c-1.37 0-2.383 1.199-2.337 2.498c.043 1.25-.013 2.867-.42 4.186c-.41 1.322-1.1 2.16-2.228 2.268v1.215c1.128.107 1.819.945 2.227 2.268c.408 1.319.464 2.936.42 4.185c-.045 1.3.968 2.499 2.338 2.499h14.032c1.37 0 2.383-1.199 2.337-2.499c-.043-1.249.013-2.866.42-4.185c.409-1.323 1.098-2.16 2.226-2.268v-1.215c-1.128-.108-1.817-.946-2.226-2.268c-.407-1.32-.463-2.937-.42-4.186C21.4 3.198 20.386 2 19.017 2zM16.27 13.769c0 1.79-1.335 2.875-3.55 2.875H8.949a.407.407 0 0 1-.407-.407V6.881a.407.407 0 0 1 .407-.406h3.75c1.847 0 3.06 1 3.06 2.537c0 1.078-.816 2.043-1.855 2.213v.056c1.415.155 2.367 1.135 2.367 2.488M12.31 7.764h-2.15v3.038h1.811c1.4 0 2.172-.564 2.172-1.572c0-.944-.664-1.466-1.833-1.466m-2.15 4.243v3.347h2.23c1.457 0 2.23-.585 2.23-1.684c0-1.1-.794-1.663-2.324-1.663z" clip-rule="evenodd"/></svg>,
}

export const projects = [
    {
        id: 1,
        title: "Cube Casa Modular Living Units",
        year: "2025",
        img: cubeCasa,
        link:"#",
        techStacks: [techStacks.html, techStacks.css, techStacks.js, techStacks.php, techStacks.bootstrap]
    },
    {
        id: 2,
        title: "Gubat Public Library Management System",
        year: "2025",
        img: gplms,
        link:"#",
        techStacks: [techStacks.html, techStacks.css, techStacks.js, techStacks.php, techStacks.bootstrap]
    },
    {
        id: 3,
        title: "My Personal Portfolio 1.0",
        year: "2024",
        img: personalPortfolio1,
        link:"#",
        techStacks: [techStacks.html, techStacks.css, techStacks.js, techStacks.php, techStacks.bootstrap]
    },
    {
        id: 4,
        title: "My Personal Portfolio 2.0",
        year: "2025",
        img: personalPortfolio2,
        link:"#",
        techStacks: [techStacks.html, techStacks.css, techStacks.js, techStacks.php, techStacks.bootstrap]
    },
    {
        id: 5,
        title: "Froilan's Portfolio",
        year: "2025",
        img: froilanPersonalPortfolio,
        link:"#",
        techStacks: [techStacks.html, techStacks.css, techStacks.js, techStacks.php, techStacks.bootstrap]
    },
]