const app = require("../index.js");
const mongoose = require('mongoose');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const chaiHttp = require("chai-http");
const jwt = require('jsonwebtoken');

const assert = chai.assert;

const User = require('../models/user.js')
const Course = require('../models/courses.js')

chai.config.includeStack = true;

chai.should()
chai.use(chaiHttp);

// Sample Course Data
const sampleCourse = {
    course_name: "Course Name",
    lesson_name: "First Lesson",
    course_author: "Author O'Lesson",
    lesson_content: "summary of lesson",
    lesson_url: "http://www.urlofwebsite.edu/mypage/lessonpage.html"
}

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('## Course API endpoints', () => {
  // TODO: Implement more tests.
  beforeEach((done) => {
      User.create({username: 'test_user', password: 'blablablah'})
      done()
  })

  afterEach((done) => {
      User.remove({username: 'test_user'}).then(() => {
          Course.remove({course_name: 'Course Name'}).then(() => done())

      })
  })

// Test homepage
  it('should load homepage', () => {
    chai.request(app)
      .get('/api/course')
      .set('jwttoken', jwt.sign({ username: 'test_user'}, process.env.JWT_SECRET ))
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        assert.equal(res.status, 200)
        // Assert message sent correctly
        assert.equal(res.body.message, 'Learning is FUN!!!')
        return done();
      })
  })

// Test Course List
it('should show all courses', (done) => {
    let course = new Course(sampleCourse);
    course.save().then((savedCourse) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                assert.equal(res.status, 200)
                assert.isArray(res.body)

                return done()

            })
    })
})

// working on
it ('should show a specific course', (done) => {
    let course = new Course(sampleCourse);
    course.save().then((savedCourse) => {
        chai.request(app)
            .get(`/${savedCourse._id}`)
            .set('jwttoken', jwt.sign({ username: 'test_user'}, process.env.JWT_SECRET))
            .end((err,res) => {
                if (err) return done(err);

                assert.equal(res.body.course_name, 'Course Name')
                assert.equal(res.body.lesson_name, 'First Lesson')
                assert.equal(res.body.course_author, "Author O'Lesson")
                return done()
            })
    })
})

it('should POST a new course', (done) => {
    let course = new Course(sampleCourse)
    chai.request(app)
        .post('/')
        .set('jwttoken', jwt.sign({ username: 'test_user'}, process.env.JWT_SECRET))
        .send(sampleCourse)
        .then(res => {
            assert.equal(res.body.course_name, 'Course Name')
            assert.equal(res.body.lesson_name, 'First Lesson')
            assert.equal(res.body.course_author, "Author O'Lesson")
            assert.isNotEmpty(res.body._id)

            //check data added to db
            Course.find({course_name: 'Course Name'}).then(result => {
                assert.equal(result.length, 1)
            })

            return done()
        }).catch(err => {
            return done(err)
        })
    })

// Test DELETE
it('should DELETE a course', (done) => {
    let course = new Course(sampleCourse);
    course.save().then((savedCourse) => {
        chai.request(app)
            .delete(`/${savedCourse._id}`)
            .set('jwttoken', jwt.sign({ username: 'test_user'}, process.env.JWT_SECRET))
            .end((err,res) => {
                if (err) return done(err);

                Course.findOne({_id: course._id}).then((deletedCourse) => {
                    assert.equal(deletedCourse, undefined)
                    done()
                })


            })
    })
})

// Test PUT
it('should DELETE a course', (done) => {
    let course = new Course(sampleCourse);
    course.save().then((savedCourse) => {
        chai.request(app)

            .put(`/${savedCourse._id}`)
            .send({course_name: 'New Course'})
            .set('jwttoken', jwt.sign({ username: 'test_user'}, process.env.JWT_SECRET))
            .end((err,res) => {
                if (err) return done(err);

                Course.findOne({_id: course._id}).then((updatedCourse) => {
                    assert.equal(updatedCourse.course_name, 'New Course')
                    done()
                })


            })
    })
})


});
