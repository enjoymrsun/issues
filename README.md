# Issues
[Link to Issues!](https://tasks3.enjoymyweb.com)
#### A SPA App ^ ^

## Design choices needed to be aware of

1. People will directly register using their name, these names should be unique and no need to provide email address.
2. Users' passwords will be stored as hashed version in database.
3. The time that an assignee can show their work on a task is unlimited, but must be multiple of 15 minutes.
4. All login users can assign tasks to all the other users and himself/herself.
5. All login users can edit all the tasks they saw: change title, description, assignee, work time and mark as completion or not.
6. Users login via Phoenix.Token and needs to login again if user closes the web tab page, which makes the app more secure.
