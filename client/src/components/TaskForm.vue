<template>
    <div>
        <button v-on:click="displayForm=true">New Task</button>
        <form v-if="displayForm" name="task_form" class="task_card" method="POST" action="http://localhost:3000/api/add">
            <div style="grid-column: 1; height: 100px; margin: auto;">
                <input type="text" name="Task_Name" placeholder="Task Name">
                <h3>Due: </h3>
                <input type="text" name="Due_Date" placeholder="Due Date">
                <br/>
                <button type="submit" style="margin-top:10px;">Add Task</button>
            </div>
            <div style="grid-column: 2;">        
                <button style="margin-top:10px; margin-left: 280px; border: lightgrey solid 1px; border-radius: 25px;; background-color: red; color: white; font-size: 10px;" v-on:click="displayForm=false">X</button>
                <h3>Implementation</h3>
                <p style="margin-right: 230px;">Easy</p>
                <p>Hard</p>
                <br/>
                <input type="range" name="Implementation" class="slider" min="1" max="5" value="3">
                <br/>

                <h3>Impact</h3>
                <p style="margin-right: 235px;">Low</p>
                <p>High</p>
                <br/>
                <input type="range" name="Impact" class="slider" min="1" max="5" value="3">
                <br/>
            </div>
        </form>
    </div>
</template>

<script>
//import axios from 'axios';
export default {
    name: 'TaskForm',
    data() {
        return {
            displayForm: false,
        }
    }
}
</script>

<style scoped>
    h1, h2, h3 {
        margin: 5px 0px;
    }
    p {
        display: inline;
        word-wrap: break-word;
    }
    .task_card {
        border: 1px solid black;
        width: 600px;
        height: 180px;
        /* height: 150px; */
        display: grid;
        margin: 20px auto;
        border-radius: 10px;
    }

    .slider {
        -webkit-appearance: none;
        height: 10px;
        width: 300px;
        border-radius: 5px;  
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%; 
        background: #4CAF50;
        cursor: pointer;
    }
</style>