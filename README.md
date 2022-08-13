# music-quiz

## User Story

_As a music student_

| statement  | description                                  |
| ---------- | -------------------------------------------- |
| I want...  | to take a timed quiz on music-related topics |
| So that... | I can gauge my progress compared to my peers |

---

## Acceptance Criteria

_Given I am taking a music quiz..._

| WHEN I...                                         | THEN...                                           |
| ------------------------------------------------- | ------------------------------------------------- |
| click the start button                            | a timer starts and I am presented with a question |
| answer a question                                 | I am presented with another question              |
| answer a question incorrectly                     | time is subtracted from the clock                 |
| all questions are answered or the timer reaches 0 | the game is over                                  |
| the game is over                                  | I can save my initials and score                  |

### Technical Acceptance Criteria: 40%

-   Satisfies all of the above acceptance criteria.

#### Deployment: 32%

-   Application deployed at live URL.
-   Application loads with no errors.
-   Application GitHub URL submitted.
-   GitHub repository that contains application code.

#### Application Quality: 15%

-   Application user experience is intuitive and easy to navigate.
-   Application user interface style is clean and polished.
-   Application resembles the mock-up functionality provided in the Challenge instructions.

#### Repository Quality: 13%

-   Repository has a unique name.
-   Repository follows best practices for file structure and naming conventions.
-   Repository follows best practices for class/id naming conventions, indentation, high-quality comments, etc.
-   Repository contains multiple descriptive commit messages.
-   Repository contains a high-quality README file with description, screenshot, and link to deployed application.

## Questions:

### Loop Questions

-   `for`
-   `while`,
-   `for...in`,
-   `for...each`
-   and `map`...

have different use cases and return different results.

1. When to use one or the other?
2. See bottom of `noteData.js` for an example

---

### Event Listener

Why does using a template literal on a const change the `console.log` return?

in event listener callback:
this code...

```
	const targetEl = e.target;
	console.log(`${targetEl}`);

```

returns:
`[object HTMLButtonElement]`

this code...

```
	const targetEl = e.target;
	console.log(targetEl);
```

returns:
`<button class="note-button" data-note="A">`
