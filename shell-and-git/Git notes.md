# Git notes

- git init - turn folder into repository
- git switch -c < branchname > = create a new branch and switch to it
- git switch < branchname > = switch branches
- git branch = list your branches
- git branch -a = list all branches (local and remote)
- git branch -d < branchname > = delete a branch

## Basic workflow

1. Create a new branch with git switch -c <branchname>.
2. Make changes to the code / write your code fpr the feature.
3. Push the changes and the new branch with git push -u origin <branchname> (after you have done this once you can use git push for this branch)
4. Create a pull request on GitHub from the new branch into main
5. Share the pull request with your team
6. Review the pull request, implement changes if needed, push again to update the pull request until it gets approved
7. Merge the pull request into main
8. Don't forget to git pull inside the main branch on your local machine
9. Delete the new branch on GitHub and locally.

## Git branches & PRs

1. Open last main version git pull origin main
2. Create a new branch and switch to it git switch -c <branchname>
3. List what you have in branch: ls
4. Find and run necessary file code < filename >
5. Change file in VS
6. Save it: command+S
7. Check changes: git status
8. Stage all changes in the current directory for the next commit: git add .
9. Make commit git commit -m ”your message”
10. Push to repositary git push origin < branchname >
11. On GitHub, a yellow action box should appear, suggesting you create a pull request for the named branch.
12. Wait for respons from Sn-s or merge the pull request

## Commit

| Git command               | Git task                                         |
| ------------------------- | ------------------------------------------------ |
| `git status`              | List all files that have changed and their state |
| `git add <filename>`      | Add a file to the stage                          |
| `git commit -m "add foo"` | Create a commit including all staged files       |
| `git log --oneline`       | Show the commit history                          |
