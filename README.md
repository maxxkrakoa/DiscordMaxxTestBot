# Discord Test Bot

## Random notes
- Create Discord server by clicking the + in the Discord client
- Enable developer mode in the Discord client (to be able to right click on channels and copy their id)
    - Go to User Settings (the cog)/Appearance/Advanced
- Create Discord Application and Bot
    - Go to https://discord.com/developers/
    - Click "New Application"
    - Go the new application and under settings to the left click "Bot" and create a new bot there
- Add application to Discord server
    - Find client id token on the application page
    - Go to https://discord.com/oauth2/authorize?client_id=<CLIENT_ID>8&scope=bot to have bot join a server
- Use `discord.js` module to handle the heavy lifting on the bot side
    - https://discord.js.org
- You will need the bot token which you can find and copy from the application bot page