- For new big changes / features always create a new branch

- Commit as you go BUT use short and conventional git commit messages and do not add "Co-Author" of Claude Code

- Always use latest tech stack, look up if we have the latets version before using something.

- Before you go ahead and create a component / piece of code - always ask yourself if it's jus teasier and better and convetional to use a "POPULAR" library instead, only if it's widely used amongst the software industry and it seems like the best step to do rather than coding it ourselves, but find the right balance, if it's small and less likely to contain errors you can build it yourself.

- Usually for my software i like having a changelog.

- I'd like you to follow a TDD approach eveyrtime when building.

- I also like to have Makefiles to make nteractions with the system easy, i.e make-dev which spins up everything.

- I usually deploy my software in my own server which you can SSH into via SSH server-deploy, inside ~/apps/ . I have a self hosted runner so use CI/CD accordingly.

- Please prioritize using PostgreSQL for database, DO NOT USE gorm or any ORMs just plain SQL, and use docker for spinning up external services whenever neccesary.
