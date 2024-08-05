# Web Debugging and Optimization Exercise

## Overview

This exercise is designed to improve your skills in web debugging and optimization. You will be working with an intentionally flawed web application. Your task is to identify and document the problems in the provided HTML, CSS, and JavaScript files.

## Instructions

Copy this README.md into your Devtools REPO in a new MD file called Day-5.md

### Step 1: Identify Problems

Go through the provided files (`index.html`, `style.css`, and `app.js`). Each file contains several marked problems (indicated by comments like `<!-- Problem 1: -->`, `/* Problem 5: */`, etc.). Your task is to identify what each problem is and why it is an issue.

### Step 2: Document Each Problem

In this README.md file, document each problem. Write a sentence for each problem explaining what the issue is and why it's problematic. Use the format below for your documentation:

#### Problem 1:

- Description: [Your explanation here]

#### Problem 2:

- Description: [Your explanation here]

[Continue with the remaining problems]

### Step 3: Propose Solutions

For each identified problem, propose a solution or an optimization strategy. Briefly describe how you would fix the issue.

#### Problem 1:

- Description: [<meta name="viewport" content="width=device-width, initial-scale=1.0" /> is missing. Without this the html won't scale the page down to a correct size on mobile devices. <meta charset="UTF-8" /> is missing. Some pages may show unusual characters to as it will have to infer the encoding. ]

#### Problem 2:

- Description: [The title tag is missing. This helps in meta tag placement.]

#### Problem 3:

- Description: [.inline-style {font-weight: bold;} is odd as it's referring to inline styling in the internal style section. The name is confusing and non-specific and the style itself is not being used. It's extraneous code as there is already an in inline Id which would be better utilized for styling.]

#### Problem 4:

- Description: <img src="https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?&w=600&h=400" id="largeImage" /> [the image being pulled from pexels is far too large. The amount of time needed to download the image will substantially slow page loads.]

#### Problem 5:

- Description: [Having a third party host a cdn leaves you open to their cookies.]

#### Problem 6:

- Description: [!important directives need to be removed. They force precedence.]

#### Problem 7:

- Description: [It's more effective to control page formatting if you constrain images]

#### Problem 8:

- Description: [Unused CSS is code bloat]

#### Problem 10:

- Description: [Container should be set]


### Step 4: Reflect

- !important forces precedence and to be wary of that.
- It's more effective to control page formatting if you constrain images by their divs/containers.

## Submission

Submit this README.md file with all the problems documented and solved, along with your reflection. Ensure that your explanations are clear and concise.

---

This exercise is an opportunity to practice critical web development skills. Pay close attention to detail and think about how each issue affects the overall performance and user experience of the web application.
