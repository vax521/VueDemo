var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
   created: function () {
    // `this` 指向 vm 实例
    console.log('app is created at : ' + new Date().toLocaleString())
  }
})

var app2 = new Vue({
	el:'#app2',
	data:{
		message: "页面加载于"+new Date().toLocaleString()
	}
})

//条件循环
var app3 = new Vue({
	el:'#app3',
	data:{
		seen:true
	}
})

// for 循环
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})

//  v-on用户事件
var app5 = new Vue({
	el: '#app5',
	data: {
   	 message: 'Hello Vue.js!'
	},
	methods: {
		 reverseMessage: function(){
	 		this.message = this.message.split('').reverse().join('')
	 		}
		}
	})

var app6 = new Vue({
  el: '#app6',
  data: {
    message: 'Hello Vue!'
  }
})

var app7 = new Vue({
  el: '#app7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})

var event_listener = new Vue({
	el:"#event_listener",
	data:{
		counter:0
	}
})

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})