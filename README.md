# Module 11 Challenge: Professional README Generator

## Your Task

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Good README Guide](../../01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md) as a reminder of everything that a high-quality, professional README should contain.

The application will be invoked by using the following command:

```bash
node index.js
```

## User Story

- As a developer, I want a README generator so that I can quickly create a professional README for a new project

## Acceptance Criteria

- Create a command-line application that accepts user input.
  - When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    - The title of my project
    - Sections entitled:
      - Description
      - Table of Contents
      - Installation
      - Usage
      - License
      - Contributing
      - Tests
      - Questions
    - When a user enters the project title then it is displayed as the title of the README
    - When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    - When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    - When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    - When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    - When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

## The Completed Code

The code defines an array of questions to be asked to the user using the inquirer library, which includes the title, description, table of contents, installation, usage, license, contributing, tests, and frequently asked questions and answers for a project.

The code also defines a writeToFile function that takes a filename and some data as input, and writes the data to the file with the given filename in the current working directory.

The init function uses inquirer to prompt the user with the array of questions and then generates the markdown for the README file using the generateMarkdown function, passing the user's answers as an argument. The writeToFile function is then called with the filename and markdown, which writes the markdown to a file named README.md in the current working directory.

Finally, a message is logged to the console indicating whether the README.md file was successfully created or if an error occurred.

Overall, this code prompts the user for information about their project, generates a markdown file from that information, and then writes the markdown file to the file system.

Walkthrough video - https://bit.ly/3YJTU9f

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
