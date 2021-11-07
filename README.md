
# <div align=center><u>Take Quiz App</u></div>

## <u>Intruduction</u>
A web application made on top of Node.js and Express.js which provides a platform to host Multiple choice questions (MCQs) based online test.<br><br>
The application comes with user side and an admin side
> ##### Normal user : The one who will be giving the online test. <br> Admin user &nbsp;: The examiner or the one who wants to host the test. They have control over the application <br>
Admin has following rights :
- Can login using pre-registered credentials, userid:- admin@gmail.com and password:- 12345678
- Create Unique test link
- Decide number of question to be present in test
- Create Questions pool (pool maybe greater than number of question in test.)
- Can see the ranks of candidates who has already completed their test
- Can keep the count of the number of the tests created
User has following rights :
- Attend Test using the unique test id 
- See the results of previously attended Quizzes
<hr>

## <u>Features Specification</u>
##### Assigned in Project
- [x] Assessment shall be MCQ pattern 
- [x] There must be a question pool for the assessment
- [x] The questions displayed in the assessment shall be only from that pool
- [x] Number of questions in the pool shall be more than questions displayed
- [x] Set a time limit for the assessment (individual timer for a question/optional)
- [x] Question order shall be shuffled for each candidate appearing
- [x] Assessment score shall be generated at the time of submission
##### Additional
- Easy & Simple UI.
<hr>

## <u>Tech Stack</u>

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)&emsp;![CSS](https://img.shields.io/badge/CSS3-1572D6?style=for-the-badge&logo=css3&logoColor=white)&emsp;![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)&emsp;![NodeJS](https://img.shields.io/badge/Node.js-4853D?style=for-the-badge&logo=node.js&logoColor=white)&emsp;![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

<hr>

## <u>Contributors</u>
>[Mradul Agrawal](https://github.com/mradul098)    <br>
>[Sheikh Hafijul Ali](https://github.com/HafijulAli) <br>
>[Diksha Patidar](https://github.com/diksha0149)   <br>
<hr>
## <u>Deployment</u>
Application is deployed on top of CI/CD pipeline of Heroku platform.
To quickly test the application, visit the following link
| Web-page | Link | 
|   ----   | ---- |
| Live Project|[Click here](https://walkover-takequiz.herokuapp.com/)| 

<hr>

## <u>Project Setup</u>
Steps to setup and run the project locally
>1. Install git on your machine (if not installed already) <br>
>To install git for required platform visit this official link [here](https://git-scm.com/downloads)
>2. Clone the repository <br>
`git clone https://github.com/mradul098/Takequiz.git`
>
>3. Go inside the cloned directory on the terminal.<br>
> `cd Takequiz`
>4. Install the required packages by command <br>
`npm ci`
>
>5. Start local-server by command <br>
`npm start`
>
>6. Initiate the backend services using <br>
> First get into `client` folder using <br> 
>`cd client` <br>
>To install required packages run the command
>`npm ci` <br>
> Then start it using <br>
> `npm start`<br>
>7. Application opens on the default web browser.
>In case it doesnt open automatically then, access the web application by following link <br> http://localhost:3000/
>8. First create admin account using the email admin@gmail.com (you dont have to do this for deployed link it alredy have admin account with credentials  (userid:- admin@gmail.com and password:- 12345678) )
>9. Create quiz by accessing admin panel using the admin credentials
>10. Access the quiz with unique quiz id after user registration

## <u>ENV Variables</u>
MONGO_URI
API_URI = /api/v1
NODE_ENV
JWT_SECRET
PORT=3001
REACT_APP_LOGIN_API=/api/v1/auth/login
password_mail 
REACT_APP_REGISTRATION_API=/api/v1/auth/registration