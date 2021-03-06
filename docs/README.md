# Course Delivery API

## Description

Developed to allow websites to easily access available instructional materials for the goal of making courses and lessons available through a back end web application API

CourseDelivery_API can be used as a back end for any educational website.

This API will give your educational website or mobile app the power of a scalable back end database server built with easy to use Java Script.


## Installation

To use this API, without installing, visit the link above.

To install this API, clone the repo, open terminal, and run command in the directory into which you cloned.

In the terminal window, navigate to the API's directory and type the following:

```bash
npm install
```

Then run:

```bash
npm start
```

> If user is accessing this API from a publicly deployed source, a JWT secret is not needed. However, if user has cloned the API from github, user will need to generate their own JWT secret to use in the API.

# How to Make Requests

## Get all available lessons

Send a GET request to URL `localhost:4040/` to get a list of all lessons.
*(sample data only)*

Data will look like:

```json
[
    {
        id: 000001
        course_name: Course Name
        lesson_name: First Lesson
        course_author: Author O'Lesson
        lesson_content: summary of lesson
        url: http://www.urlofwebsite.edu/mypage/lessonpage.html
        _id: 'b2l43c9lukku1t9893410z'

    }
]
```
*(Note: Output above is an example only. The _id will not work to get course info)*

## Get a specific lesson by id

Before you will be able to view a specific lesson, you will need to log in. Please see the instructions in the Logging In section.

If you find a specific lesson you'd like to view or display on your own site via this API, make note of the sequence of numbers following *_id:*. Use that sequence of letters and numbers to replace the part of the URL that says *ID_HERE* in order to access the referenced lesson.

Send a GET request to URL `localhost:4040/ID_HERE`

Data will look like:

```json
[
    {
        id: 000001
        course_name: Course Name
        lesson_name: First Lesson
        course_author: Author O'Lesson
        lesson_content: summary of lesson
        lesson_url: http://www.urlofwebsite.edu/mypage/lessonpage.html
        _id: 'b2l43c9lukku1t9893410z'

    }
]
```
*(Note: Output above is an example only. This _id will not work to get course info)*

## Add a lesson

In order to add a new lesson, user must be logged in. Please see the instructions in the Logging In section.
Key value pairs like those displayed in the outputs above, are required.
Mandatory key: course_name. Optional keys: lesson_name, course_author, lesson_content, lesson_url

Use postman to send a POST to the localhost port. The user must be logged in to use this feature.

User input should look like the following:
```json
[
    {
        course_name: "Name It"
        lesson_name: "Name of Lesson"
        course_author: "Your Name If"
        lesson_content: "Written by You"
        lesson_url: "http://server.com/yoursite/yourpage.html"
    }
]
```

## Remove a lesson

 The user must be logged in to use this feature. Please see the instructions in the Logging In section.
 Use postman to send a DELETE to the appended localhost port.
 Append with course `_id`. Please see the *Get a specific lesson by id* section for instructions on how to find the `_id`.

## Update a lesson

The user must be logged in to use this feature. Please see the instructions in the Logging In section.

Use postman to send a PUT to the localhost port. Specify the key corresponding to the value to be updated.

User input should look like the following:
```json
[
    {
        _id:
        course_name: "Named It"
        lesson_name: "New name of Lesson"
        course_author: "Other Name When"
        lesson_content: "Written by Others"
        lesson_url: "http://server.com/yoursite/yourpage.html"
    }
]
```

## Signing Up

Use postman to send a POST to the appended localhost port. The user must be logged in to use this feature. Append with `/auth/sign-up`. Key value pairs like those displayed in the outputs above, are required.
Mandatory keys: username, password. Optional keys: firstName, lastName, email

User input should look like:
```json
[
    {
        username: Matt Userson
        password: anything
        firstName: Matt
        lastName: Userson
        email: muserson@server.com

    }
]
```


## Logging In

Before you will be able to log in, you must sign up. Please see the Signing Up section.

Use postman to send a POST to URL `localhost:4040/auth/login`

Input should look like:
```json
[
    {
        username: Matt Userson
        password: anything
    }
]
```
____

Link to [Postman](http://www.postman.com)
