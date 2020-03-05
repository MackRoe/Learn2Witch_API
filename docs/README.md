# Learn2Witch API

## Description
Allow websites to easily access publicly available instructional series

> Rocking New Witch Learning

## Installation

To install this API, clone the repo, open terminal, and run command in the directory into which you cloned.

In the terminal window, navigate to the API's directory and type the following:

```bash
npm install
```

Then run:

```bash
npm start
```
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
*(Note: Output above is an example only. The _id will not work to get course info)*

## Add a lesson

In order to add a new lesson, you will need to send key value pairs like those displayed in the outputs above.

## Remove a lesson

## Update a lesson

> API is in development. Refresh browser window to see most recent documentation.
