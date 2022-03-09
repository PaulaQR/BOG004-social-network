const PATHS = {

    home: {
        path: '/',
        template: `
        <div id="initView">
        <h1>PAPYROS</h1>
    
        <button id="signUp">Sign Up</button>
        <button id="taskForm">Continue with Google</button>
        
        
        <a href="#">Sign in</a>
      </div>`
    },

    signUp: {
        path: '/signUp',
        template: `
        <div id="signUp-container">
        <form id="signUpForm">
           <input type="email" id="email" placeholder="email">
           <input type="password" id="password" placeholder="password">
           <input type="submit" value="Sign Up">
     
         </form>
       </div>`,
    },

    taskForm: {
        path: '/taskForm',
        template: `<div id="task-container">

        <div id="task-container">

      <form id="task-form">

        <label for="title">Title:</label>
        <input type="text" placeholder="Task-title" id="task-title">

        <label for="description">Description</label>
        <textarea id="task-description" rows="3" placeholder="Task description"></textarea>

        <button id="btn_task_save">Save</button>
      </form>
    
  </div>
       `
    },
}