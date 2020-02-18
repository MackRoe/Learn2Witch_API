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
        course: Course Name
        lesson: First Lesson
        author: Author O'Lesson
        content: summary of lesson
        url: http://www.urlofwebsite.edu/mypage/lessonpage.html

    }
]
```

## Get a specific lesson by id

## Add a lesson

## Remove a lesson

## Update a lesson

> API is in development. Refresh browser window to see most recent documentation.
