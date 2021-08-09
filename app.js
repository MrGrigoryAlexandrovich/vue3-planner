const app = Vue.createApp({
    data() {
        return {
            tasks: [
                {
                    id:0,
                    name: "Čišćenje sobe",
                    started: "09 .08. 2021.",
                    finished: ""
                },
                {
                    id:1,
                    name: "Pranje auta",
                    started: "09. 08. 2021.",
                    finished: "09. 08. 2021.",
                },
                {
                    id:2,
                    name: "Pisanje knjige",
                    started: "09. 08. 2021.",
                    finished: ""
                }
            ],
            taskname: ''
        }
    },
    methods: {
        addTask() {
            this.tasks.push( {
                id: this.tasks.length,
                name: this.taskname,
                started: new Date().toLocaleDateString(),
                finished: ""
            })
            this.taskname = ''
        },
        remove(id) {
         if(this.tasks.length>1)
         this.tasks.splice(id,1)
         else
         this.tasks = []
        },
        finish(id) {
            if(this.tasks[id].finished=="") {
            this.tasks[id].finished = new Date().toLocaleDateString()
            }
            else {
            this.tasks[id].finished = ''
            }
        }
    }
})

app.mount('#app')