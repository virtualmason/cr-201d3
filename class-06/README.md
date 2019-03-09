# Class 6: Introduction to JS

<a id="top"></a>
## Lecture 6

## Today's Schedule

- Review CSS *[90 minutes]*
- [Git Branching](#git) *[60 minutes]*
- [Set up a JavaScript linter](#linter) *[30 minutes]*
- *Lunch Break*
- [Go over the assigned readings](#readings) *[30 minutes]*
- [Code demo to prep for lab](#code) *[60 minutes]*
- Lab

**Learning Objectives**

As a result of completing Lecture 6 of Code 201, students will be able to:

- configure `eslint` for a project
- properly include a `<script>` tag in an HTML document that will interact with the user via `prompt`/`alert`, as demonstrated by successful completion of the daily code assignment
- write JavaScript that will declare and use variables

[-top-](#top)

<a id="git"></a>

## Git branching

It's time to take a look at branching in Git. We'll also go over the commands and do some practice with Git branches together in our terminals.

### GitHub Workflow

1. Switch to new branch from `master`:

    ```bash
    git checkout master -b <name>
    ```

2. `add`, `commit`

3. Push new branch to `origin` remote:

    ```bash
    git push -u origin HEAD
    ```

    [What does the `-u` do?](https://stackoverflow.com/a/5697856/54249)

4. Open new Pull Request

5. Continue to `add`, `commit`, `push` until you're done

6. Merge Pull Request

7. Switch to `master`:

    ```bash
    git checkout master
    ```

8. Update from `master` on GitHub (i.e. `origin/master`)

    ```bash
    git pull
    ```

9. Delete the branch you merged:

    ```bash
    git branch -d <name>
    ```

### Other Commands

- Update from GitHub without updating current branch:

    ```bash
    git fetch
    ```

- List remotes:

    ```bash
    git remote -v
    ```

- List branches:

    ```bash
    git branch -vv
    ```

[-top-](#top)

<a id="linter"></a>

## Set up a JavaScript linter

```bash
npm install --global eslint
```

Every project should have a `.eslintrc.json` file in its root (like `.gitignore`).
Our standard config file is located in the root of this repository.

[-top-](#top)

<a id="readings"></a>

## Readings

**JS Chapter 1: "The ABC of Programming"**

- p.16 	Designing a script
- p.28 	Objects & properties
- p.30 	Events
- p.36 	Browsers & document object
- p.40 	How a browser sees a web page
- p.44 	How HTML, CSS, JS work together
- p.45 	Progressive enhancement
- p.51 	JavaScript runs where it is found in the HTML

**We also need to discuss the role of *pseudocode*, which is something the Duckett text does not cover very well.

[-top-](#top)

<a id="code"></a>

## Live code

This code demo is to help students be ready to complete the first JS assignment and also to show off some functionality of Chrome Developer Tools. This demo should also reveal any lingering issues with student computer setups.

[-top-](#top)
