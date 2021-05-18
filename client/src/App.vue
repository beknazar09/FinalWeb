<template>
  <div id="app">
    <TaskForm/>
    <tasks/>
  </div>
</template>

<script>
import tasks from './components/task.vue'
import TaskForm from './components/TaskForm.vue'

export default {
  name: 'app',
  components: {
    tasks,
    TaskForm
  }
}
</script>

<style>

</style>
