# tech44
Project for testing

# How to start

Running the project with Docker Compose

```
> docker-compose up --build

> Server is running with port 8089
> Web Apps is running with port 3000
```

# Server - NodeJS

- Server is designed simply with NodeJS, it is using [ExpressJS](https://expressjs.com/) Framework, [SequelizeJS](https://sequelize.org/) (ORM for processing database).

- This server has some APIs to handle the basic flow:

```
# 1. Register with username
POST - http://localhost:8089/api/user
- body:
    - username: string
- response:
    - 200:
        - success: true
        - data:
            - id: number
            - username: string
    - 500:
        - Error


# 2. Get images by user id
GET - http://localhost:8089/api/user/:user_id/images:
- params:
    - user_id: string
- response:
    - 200:
        - success: true
        - data: string[]
    - 500:
        - Error


# 3. Upload images
POST - http://localhost:8089/api/upload
- body:
    - Content-Type: multipart/form-data
    - files: File[]
    - user_id: string
- response:
    - 200:
        - success: true
        - data: string[]
    - 500:
        - Error


# 4. Download images
GET - http://localhost:8089/api/download/:fileName:
- params:
    - fileName: string
- response:
    - 200:
        - ...
    - 500:
        - Error
```

# Web Apps - NextJS (latest version 14)

- Web Apps is created by [NextJS](https://nextjs.org/) with the latest version 14 at the current time (June 2024)

- Web Apps has 2 basic pages: [Home Page](http://localhost:3000) and [Gallery page](http://localhost:3000/gallery)

### Basic flow
- User have to register a new username or enter the existing username in **Home Page**
- User will navigate to **Gallery Page** after that.
- User can upload and download images in **Gallery Page**.

# Tasks Managements

### Server

1. Set up server and docker-compose for the project:
    - **1.1. Technologies**:
        - `ExpressJS`: Core Framework for the web application.
        - `SequelizeJS`: The popular ORM for handling to database.
        - `mysql2`: The library provide the drive to connect with MySQL database.
        - `MySQL`: The main database for the project.
        - `Docker`: Use Docker and Docker Compose to build the project.
    - **1.2. Set up docker & docker compose**
        - Write `Dockerfile` for the server project.
        - Write `docker-compose.yml` to config, build and deliver with server, database and web apps.

2. Set up new project in front-end side with NextJS (latest version 14)
    - **2.1. Technologies**:
        - `ReactJS` library and `NextJS` framework will be used to build here.
    - **2.2. Structure folders of the project**
        - Seperate the several folders and files following the standard structure of NextJS.

3. Handle API: Register new user in server side
    - Handle feature with the happy case successfully.
    - Take care of most error cases to detect and process.
    - Export the sameple code with this API from Postman or another
    - Write unit tests to cover all things what you did.

4. Handle API: Get list of images following user id in server side
    - Notes are same as (**3**)

5. Handle API: Upload multiple images in server side
    - Notes are same as (**3**)

5. Handle API: Download the image in server side
    - Notes are same as (**3**)


### Web apps 

6. Handle Home page and register username API
    - Handle Home page following the design.
    - Add register username API in the page.
    - Take care of most error cases to detect and process.
    - Write unit tests to cover all things what you did.
    - Record video for demo

7. Handle Gallery page and some APIs
    - Notes are the same as (**6**)
    - Handle API of getting list of images by user id.
    - Handle API of uploading images.
    - Handle download image.

### UI/UX

8. Design wireframe for the project

9. Handle UI Kit for the project

10. Handle UI for the screens in the project


### Infrastructure

11. Choose the suitable cloud (AWS, GCP, Azure,...) to deploy the sytem of project

12. Set up CI/CD for merging source code and deploying in the cloud

13. Set up Docker and Docker compose for releasing on several environments: development, test, beta and production.

14. Set up the monitoring system to track and cover all issues from the system.


### QC/QA Testing

- Can have 2 options: manual test or automation test.

15. Prepare many scenarios for testing.

16. Handle to test the register username feature in frontend side.

17. Handle to test the register username API in server side.

17. Handle to test the upload multiple images feature in frontend side.

18. Handle to test the upload multiple images API in server side.

19. Handle to test the download image feature.

20. Handle test UI of web apps comparing to the design.


### Documentation

21. Write the documentation for the project

### Release

22. Confirm, notify and release the detail version of production.




# Conclusion

Above things are the common tasks we can do it in the project.