const projects = [
    {
        title: "UK Travel Visualiser",
        date: "2025 - PRESENT",
        description: `An interactive map to visualise travel within the UK. Select areas to mark them as lived, stayed, visited, stopped, passed, or never been. The area is filled with the corresponding colour and the UK 'level' is updated.

Concept inspired by https://lab.magiconch.com/china-ex/ and https://tenpages.github.io/us-level/eu.html.`,
        pageUrl: "smstone0.github.io/#/uk-map",
        codeUrl: "https://github.com/smstone0/smstone0.github.io",
        thumbnail: "assets/MapChart_Map.svg",
        languages: ["React", "JavaScript", "HTML", "CSS"],
    },
    {
        title: "Caloric",
        date: "2023 - PRESENT",
        description: `A cross-platform calorie counting app designed for minimalism and simplicity. Provides a beginner-friendly method to track nutrition by focusing on the essentials, eliminating detail such as macros and meal times. Started this project to learn mobile development and interface design.`,
        designUrl: "https://www.figma.com/design/ojnG7Z2LYuzCuDM0TMUUiA/Caloric?node-id=0-1&node-type=canvas&t=lJdGKqTurMDbI7DR-0",
        codeUrl: "https://github.com/smstone0/Caloric",
        thumbnail: "assets/caloric/caloric.png",
        moreImages: [],
        languages: ["Flutter", "SQLite", "Figma"]
    },
    {
        title: "Software Engineering Group Project",
        date: "2023 - 2024",
        description: `Led an 8-person team of computer science students in a year-long university group project, developing a mobile app free of charge for industry partner, Lots For Tots - an organisation which supports 26,000 families as of 2024. The app connects parents with nearby children's events and has integrated accessibility, offering visual comfort options and filtering events by SEN and wheelchair access.
        
We created interactive prototypes and iteratively gathered requirements and user feedback to guide app design. Using Scrumban, paired programming and code reviews, we maintained high code quality. We showcased our work to academics, industry leaders and peers.`,
        designUrl: "https://www.figma.com/design/pBlTcItDic1lt4CA2VA81k/Prototyping?t=Jc90sSWYw35fi01r-0",
        thumbnail: "assets/lots-for-tots/lots-for-tots.png",
        moreImages: ['assets/lots-for-tots/login.jpeg', 'assets/lots-for-tots/event-page.jpeg', 'assets/lots-for-tots/forgot-password.jpeg', 'assets/lots-for-tots/settings.jpeg', 'assets/lots-for-tots/sign-up.jpeg', 'assets/lots-for-tots/subscribed.jpeg', 'assets/lots-for-tots/map.png', 'assets/lots-for-tots/prototypes.png'],
        languages: ["Flutter", "Firebase", "Figma"]
    },
    {
        title: "Operating Systems and Concurrency",
        date: "2023 - 2024",
        description: `University project to develop a multi-threaded process simulator in C using the POSIX API on Linux, incorporating key operating system principles such as process scheduling, concurrency control, and resource management. The simulator manages process creation, execution, and termination using a process table, priority-based scheduling, and linked-list-based queues for ready, I/O, and terminated processes. It supports both preemptive and non-preemptive scheduling, with processes running in a round-robin or FCFS fashion depending on priority. Semaphores and mutexes are used for synchronisation.

To simulate real-world execution, the system includes an I/O daemon to handle blocked processes, a booster daemon to prevent starvation, and a load balancer to distribute workloads across multiple CPUs. Achieved 96%, 12.6% higher than the average score among students who completed all coursework components.`,
        thumbnail: "assets/osc/architecture.png",
        languages: ["C"],
        moreImages: ['assets/osc/architecture.png', 'assets/osc/output.png']
    },
    {
        title: "Developing Maintainable Software",
        date: "2023",
        description: `University project to improve an unfinished Java implementation of Snake, focusing on refactoring, feature additions and maintainability. Restructured the codebase to enhance readability and modularity, optimised event handling and game logic, and introduced new features such as a score board, improved collision detection, smoother animations, and persistent, customisable settings. The project adhered to OOP principles, followed the MVC design pattern, and maintained best practices in version control.`,
        languages: ["Java"],
        thumbnail: "assets/dms/game.png",
        moreImages: ['assets/dms/scores.png', 'assets/dms/settings.png']
    },
    {
        title: "Databases and Interfaces",
        date: "2023",
        description: `University project to build a website to enable users to search and manage movies and actors within a MySQL database.`,
        languages: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"],
        thumbnail: "assets/dbi.png",
        moreImages: ["assets/dbi.png"]
    },
    {
        title: "Reversi",
        date: "2023",
        description: `University project to develop the Reversi board game in Java using the MVC design pattern. The game features an AI opponent which greedily chooses the best available move. Achieved 100% mark.`,
        languages: ["Java"],
        thumbnail: "assets/reversi.png",
    },
    {
        title: "Fundamentals of Artificial Intelligence",
        date: "2023",
        description: `University project to utilise a dataset of patient data to build machine learning models for predicting whether a patient has heart disease using the sklearn, matplotlib, numpy and pandas libraries. Applied exploratory analysis and several pre-processing techniques, followed by building and evaluating both a decision tree and neural network. Achieved 96% mark.`,
        languages: ["Python"],
        thumbnail: "assets/fai/decision-tree.png",
        moreImages: ['assets/fai/decision-tree.png', 'assets/fai/matrix-decision-tree.png', 'assets/fai/max-depth.png', 'assets/fai/matrix-neural-network.png']
    },
    {
        title: "Graph Network Optimiser",
        date: "2022-2023",
        description: `Multi-module coursework to create a graph library using linked lists, a TCP/IP network server to manage a graph of a network of networks and query the next hop, and to implement Dijkstra's algorithm to optimise packet routing between networks.`,
        languages: ["C"],
        thumbnail: "assets/nottingham.svg",
    },
    {
        title: "Programming and Algorithms",
        date: "2022",
        description: `A series of courseworks written in C, ranging from calculating and printing Pascal's triangle to implementing shunting yard and classic sorting algorithms.`,
        languages: ["C"],
        thumbnail: "assets/nottingham.svg",
    },
    {
        title: "Systems and Architecture",
        date: "2022",
        description: `A series of courseworks written in Assembly, ranging from hello world and fibonacci to a text formatter. The formatter reads keyboard input and outputs formatted text real-time within a specific column width, handling line breaks, newline resets, and preventing word splitting.`,
        languages: ["Assembly"],
        thumbnail: "assets/nottingham.svg",
    },
    {
        title: "Computer Fundamentals",
        date: "2022",
        description: `University coursework to implement a C network client to fetch multiple "Quotes of the Day" from a server.`,
        languages: ["C"],
        thumbnail: "assets/nottingham.svg",
    },
]

export default projects;