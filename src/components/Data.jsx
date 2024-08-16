const Example = {
    personal: {
    firstName: 'Jake',
    lastName: 'Ryan',
    phoneNum: '123-456-7890',
    emailAdd: 'jake@su.edu',
    linkedIn: 'linkedin.com/in/jake',
    githubLink: 'github.com/jake',
    },
    educations: [
    {
      college: 'Southwestern University',
      degree: 'Bachelor of Arts in Computer Science, Minor in Business',
      place: 'Georgetown, TX',
      date: 'May 2021'
    },
    {
      college: 'Blinn College',
      degree: "Associate's in Liberal Arts",
      place: 'Bryan, TX',
      date: 'May 2018'
    },
  ],
    experiences: [
    {
      position: 'Undergraduate Research Assistant',
      employer: 'Texas A&M University',
      city: 'College Station, TX',
      startDate: 'June 2020',
      endDate: 'Present',
      task: `Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems.\nDeveloped a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data.\nExplored ways to visualize GitHub collaboration in a classroom setting.`,
    },

    {
      position: 'Information Technology Support Specialist',
      employer: 'Southwestern University',
      city: 'Georgetown, TX',
      startDate: 'Sep. 2018',
      endDate: 'Present',
      task: `Communicate with managers to set up campus computers used on campus.\nAssess and troubleshoot computer problems brought by students, faculty and staff.\nMaintain upkeep of computers, classroom equipment, and 200 printers across campus.`,
    },

    {
      position: 'Artificial Intelligence Research Assistant',
      employer: 'Southwestern University',
      city: 'Georgetown, TX',
      startDate: 'May 2019',
      endDate: 'July 2019',
      task: `Explored methods to generate video game dungeons based off of The Legend of Zelda.\nDeveloped a game in Java to test the generated dungeons.\nContributed 50K+ lines of code to an established codebase via Git.\nConducted a human subject study to determine which video game dungeon generation technique is enjoyable.\nWrote an 8-page paper and gave multiple presentations on-campus.\nPresented virtually to the World Conference on Computational Intelligence.`,
    },
  ],

  projects: [
    {
      project: 'Gitlytics',
      tools: 'Python, Flask, React, PostgreSQL, Docker',
      builtDate: 'June 2020',
      desc: `Developed a full-stack web application using with Flask serving a REST API with React as the frontend.\nImplemented GitHub OAuth to get data from user's repositories.\nVisualized GitHub data to show collaboration.\nUsed Celery and Redis for asynchronous tasks.`,
    },

    {
      project: 'Simple Paintball',
      tools: 'Spigot API, Java, Maven, TravisCI, Git',
      builtDate: 'May 2020',
      desc: `Developed a Minecraft server plugin to entertain kids during free time for a previous job.\nPublished plugin to websites gaining 2K+ downloads and an average 4,5/5-star review.\nImplemented continuous delivery using TravisCI to build the plugin upon new a release.\nCollaborated with Minecraft server administrators to suggest features and get feedback about the plugin.`,
    },
  ],

    skills: [
    {
        skillTitle: "Languages",
        skill: "Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R"
    },

    {
        skillTitle: "Frameworks",
        skill: "React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI"
    },

    {
        skillTitle: "Developer Tools",
        skill: "Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse"
    },

    {
        skillTitle: "Libraries",
        skill: "pandas, NumPy, Matplotlib"
    }
    ]
}

export default Example;