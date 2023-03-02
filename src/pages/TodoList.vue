<template>
  <div class="todo__list">
    <router-link :to="{name: 'edit'}">
      <div class="btn">Сторінка зміни нотатки</div>
    </router-link>
    <div class="todo__list form">
    <input
      type="text"
      class="form__input"
      placeholder="Введіть нотатку"
      v-model="newTodo"
    />
    <button @click="addTodo" class="btn">Створити</button>
  </div>
    <transition-group 
      name="fade" 
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <todo-item 
        v-for="(todo, index) in todosFiltered" 
        :key="todo.id"
        :todo="todo"
        :index="index"
        :checkAll="!anyRemaining"
      />
    </transition-group>

    <div class="extra-container">
    </div>
        <transition name="fade">
          <todo-clear-completed :showClearCompletedButton="showClearCompletedButton"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem';
import TodoClearCompleted from '../components/TodoClearCompleted';

export default {
  name: "todo-list",
  components: {
    TodoItem,
    TodoClearCompleted,
  },

  data() {
    return {
      newTodo: "",
      idForTodo: 5,
      filter: 'all',
      beforeEditCache: '',
      todos: [
        {
          id: 1,
          title: "Вивчити HTML",
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: "Вивчити CSS",
          completed: false,
          editing: false,
        },
        {
          id: 3,
          title: "Вивчити Javascript",
          completed: false,
          editing: false,
        },
        {
          id: 4,
          title: "Вивчити Vue",
          completed: false,
          editing: false,
        },
      ],
    };
  },

  created() {
    eventBus.$on('removedTodo', (index) => this.removeTodo(index));
    eventBus.$on('finishedEdit', (data) => this.finishedEdit(data));
    eventBus.$on('clearCompletedTodos', () => this.clearCompleted());
  },
  beforeDestroy() {
    eventBus.$off('removedTodo', (index) => this.confirm(index));
    eventBus.$off('finishedEdit', (data) => this.finishedEdit(data));
    eventBus.$off('clearCompletedTodos', () => this.clearCompleted());
  },

  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length
    },

    anyRemaining() {
      return this.remaining !== 0;
    },
    todosFiltered() {
      if(this.filter === 'all') {
        return this.todos;
      } else if(this.filter === 'active') {
        return this.todos.filter(todo => !todo.completed);
      } else if (this.filter === 'completed') {
        return this.todos.filter(todo => todo.completed);
      }

      return this.todos
    },
    showClearCompletedButton() {
      return this.todos.filter(todo => todo.completed).length > 0;
    }
  },

  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  },

  methods: {
    addTodo() {
      if(this.newTodo.trim().length === 0) {
        return;
      }

      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
      });

      this.newTodo = "";
      this.idForTodo++;
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    },

    checkAllTodos() {
      this.todos.forEach(todo => {
        todo.completed = event.target.checked
      });
    },

    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    },

    finishedEdit(data) {
      this.todos.splice(data.index, 1, data.todo);
    }
  },
};
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

.form {
  display: flex;
  margin: 16px 0;

  &__input {
    width: 100%;
    padding: 10px 18px;
    font-size: 16px;

    &:focus {
      outline: 0;
    }
  }
}

.btn {
    display: inline-block;
    width: auto;
    text-align: center;
    background-color: #42b883;
    padding: 10px;
    margin-right: 10px;
    color: #fff;
    border: 1px solid #42b883;
    cursor: pointer;

    &:active {
      background-color: #429083;
      color: #fff;
    }
  }

.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}
.name-container {
  margin-bottom: 16px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
