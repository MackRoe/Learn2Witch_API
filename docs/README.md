# Learn2Witch API

## Description
Allow websites to easily access publicly available instructional series

> Rocking Witchling Learning

## Installation

To install this API, clone the repo, open terminal, and run command in the directory into which you cloned.

```bash
npm install
```

Then run:

```bash
npm start
```
# How to Make Requests

## Get all available lessons

Send a GET request to URL `localhost:3000/lessons` to get a list of all lessons. *(not yet functional)*

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

## Get a specific lesson by id

Send a GET request to URL `localhost:3000/courses/ID_HERE`

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

## Add a lesson

Send key value pairs

## Remove a lesson

## Update a lesson

> API is in development. Refresh browser window to see most recent documentation.
