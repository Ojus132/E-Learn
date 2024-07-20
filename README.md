# OnlineLearningPlatformFrontend

## NOTE Please folllow these steps to run the website

1. Setup the database from the sql scripts
2. Clone the API from https://github.com/Hp9642/Elearn, change the connection string according to your database server.
3. Clone this repository run `npm i` and then `ng serve` to run the frontend.
4. API integration has been done but CORS is not enabled, so to run that extra steps need to be followed as shown below:
   -You can refer to this answer on stackoverflow https://stackoverflow.com/questions/56328474/origin-http-localhost4200-has-been-blocked-by-cors-policy-in-angular7/63589723#63589723 . If it doesnt work watch the next step.

- Go to wherever chrome is installed, For ex: C:\Program Files\Google\Chrome\Application , Open windows powershell here.
- In the shell type `.\chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security` , it will open chrome window without security.
- In this chrome window, open `localhost:4200`.

Step 4 shall make all the user related api services run (like logging in / registering users / profile dashboard)
