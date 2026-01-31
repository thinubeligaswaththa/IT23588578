# IT23588578
ITPM Assignment 1

Tools & Technologies
Playwright – End-to-end test automation framework
Node.js – JavaScript runtime environment
JavaScript / TypeScript – Test scripting languages
Git & GitHub – Version control and repository hosting
Project Structure
playwright-project/
│
├── tests/
│   ├── negative.spec.js
│   └── positive.spec.js
│
├── screenshots/
│   └── (auto-generated screenshots)
│
├── playwright.config.js
├── package.json
├── README.md
Prerequisites
Ensure the following are installed on your system:

Node.js (v18 or later recommended)
Git
A modern web browser (Chrome / Edge)
Installation
Clone the repository
git clone https://github.com/thinubeligaswaththa/IT23588578.git
Navigate to the project directory
cd playwright-project
Install dependencies
npm install
Install Playwright browsers
npx playwright install
Running the Tests
Run all tests:

npx playwright test
Run a specific test file:

npx playwright test negative.spec.js
Screenshots
Screenshots are automatically captured for each test case
Saved inside the screenshots/ directory
Test Coverage
Negative Functional Tests
Ambiguous English and Singlish inputs
Extremely long input handling
Invalid characters and spelling errors
Real-time translation updates

npx playwright test positive.spec.js
Screenshots
Screenshots are automatically captured for each test case
Saved inside the screenshots/ directory
Test Coverage
Positive Functional Tests
Standard Singlish to Sinhala translations
Common daily conversation scenarios
UI Tests
Empty input handling
Real-time translation updates








# Singlish ↔️ English Translator – Playwright Test Automation

## Project Overview

This repository contains an automated testing project for the **Singlish ↔️ English Translator** web application using **Playwright**. The project covers Functional, Negative Functional, and UI test cases to evaluate correctness, stability, and user interface behavior.

---

## Tools & Technologies

* Playwright – End-to-end test automation framework
* Node.js – JavaScript runtime environment
* JavaScript / TypeScript – Test scripting languages
* Git & GitHub – Version control and repository hosting

---

## Project Structure

```
playwright-project/
│
├── tests/
│   ├── negative.spec.js
│   └── positive.spec.js
│
├── screenshots/
│   └── (auto-generated screenshots)
│
├── playwright.config.js
├── package.json
├── README.md
```

---

## Prerequisites

Ensure the following are installed on your system:

* Node.js (v18 or later recommended)
* Git
* A modern web browser (Chrome / Edge)

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/thinubeligaswaththa/IT23588578.git
```

2. Navigate to the project directory

```bash
cd playwright-project
```

3. Install dependencies

```bash
npm install
```

4. Install Playwright browsers

```bash
npx playwright install
```

---

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test negative.spec.js
npx playwright test positive.spec.js
```

---

## Screenshots

* Screenshots are automatically captured for each test case
* Saved inside the `screenshots/` directory

---

## Test Coverage

### Positive Functional Tests

* Standard Singlish to Sinhala translations
* Common daily conversation scenarios

### Negative Functional Tests

* Ambiguous English and Singlish inputs
* Extremely long input handling
* Invalid characters and spelling errors

### UI Tests

* Empty input handling
* Real-time translation updates

---

## Author

* Name: Beligaswaththa B A M T T
* Registration Number: IT23588578
---

This project follows Playwright best practices and is suitable for academic evaluation.


