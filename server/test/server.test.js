const expect = require('expect')
const request = require('supertest')
const {ObjectID} = require('mongodb')
const {app} = require('./../server')
const {Todo} = require('./../models/todo')
const todos = [{
  _id : new ObjectID(),
  text: 'First test todo',
  phone: 234132,
}, {
  _id : new ObjectID(),
  text: 'Second test todo',
  phone: 239842
}];




describe('POST/todos', () => {
  it('should create a new todo', (done) => {

    beforeEach((done) => {
      Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
      }).then(() => done())
    });
    let text = 'Test todo text',
    phone = 123456

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if(err){
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e))
      });
  })
  it('should not create todo with invalid data', (done) => {
    let text = 'Test todo text'

    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .expect((res) => {
        expect(res.body.text).toBe();
      })
      .end((err, res) => {
        if(err){
          return done(err);
        }
        
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e))
      })
  })
});



describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done)
  })
})

describe('GET /todos/:id', () => {
  it('should get the specific todo by id', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        console.log(res.body.todo)
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done)
  })
  it('should get 404 if todo not found', (done) => {
    let HexId = new ObjectID().toHexString()
    request(app)
      .get(`/todos/${HexId}}`)
      .expect(404)
      .end(done)
  })
  it('should get 404 for non-object ids', (done) => {
    request(app)
      .get(`/todos/123}`)
      .expect(404)
      .end(done)
  })
})

describe('Delete /todos/:id', () => {
  it('should remove a todo', (done) => {
    let HexId = todos[1]._id.toHexString();
    request(app)
    .delete(`/todos/${HexId}`)
    .expect(200)
    .expect((res) => {
      expect(res.body.todo._id).toBe(HexId)
    }).end((err, res) => {
      if(err) {
        return done(err)
      }
      Todo.findById(HexId).then((todo) => {
        expect(todo).toNotExist();
        done();
      }).catch((e) => done(e))
    })
  });
  it('should return 404 if todo not found', (done) => {
    let HexId = new ObjectID().toHexString()
    request(app)
      .delete(`/todos/${HexId}}`)
      .expect(404)
      .end(done)
  });
  it('should return 404 if object id is invalid', (done) => {
    request(app)
    .delete(`/todos/123}`)
    .expect(404)
    .end(done)
  })
});
