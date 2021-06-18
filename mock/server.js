import { Server, createServer, Model, Response } from 'miragejs'

import { listInbox, inboxDetail, listLang, listLang2 } from './fixtures/db.json' 

// export function makeServer({ environment = "development" } = {}) {
export function makeServer({ environment = "development" } = {}) {

  let server = createServer({
    environment,

    // models: {
    //   listInbox: Model,
    // },

    seeds(server) {

      // server.create("listInbox", { listInbox } );

      server.db.loadData({
        listInbox,
        inboxDetail,
        listLang
      });

    },

    routes() {
      this.urlPrefix = "http://localhost:3002"
      this.namespace = "api"
      this.timing = 1500

      //Demo
      // this.get('/api/tasks', (schema) => {
      //   return schema.db.tasks;
      // }),
      // this.post('/api/tasks', (schema, request) => {
      //   // nhận data được gửi từ post
      //   const task = JSON.parse(request.requestBody).data;
      //   return schema.db.tasks.insert(task);
      // })

      this.get("/listInbox", (schema) => schema.db.listInbox)
      this.get("/listInbox/:id", (schema, request) => {
        const id = request.params.id
        return schema.db.listInbox.find(id)
      })
      this.patch("/listInbox/:id", (schema, request) => {
        const id = request.params.id
        const body = JSON.parse(request.requestBody)
        // console.log("request: ", JSON.parse(request.requestBody))
        return schema.db.listInbox.update(id, body);
      })


      // ------------------

      this.get("/inboxDetail", () => (
        inboxDetail
      ))
      this.get("/inboxDetail/:id", (schema, request) => {
        // let todo = JSON.parse(request.requestBody).data;
        // return schema.db.todos.update(todo.id, todo);
        const id = request.params.id;
        return schema.db.inboxDetail.find(id);
      })
      

      // ------------------

      this.get("/listLang", () => (
        listLang
      ))
      this.put("/listLang", (schema, request) => {
        const id = request.params.id
        const body = JSON.parse(request.requestBody)
        // console.log("request: ", JSON.parse(request.requestBody))
        return schema.db.listLang.update(body);
      })


      
    }
  })

  return server

}