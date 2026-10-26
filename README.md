Rosas_Buhatin_MidtermList

1. Project Description

Rosas_Buhatin_MidtermList is a mobile To-Do List application developed using React Native, Expo, and TypeScript. It helps users organize study tasks, mark completed activities, delete tasks, and monitor their progress.

2. Features

- Add new study tasks.
- Mark tasks as completed.
- Delete tasks.
- Display the number of completed tasks and total tasks.
- Show a progress bar based on completed tasks.
- Display a message when there are no tasks.
- Use a dark gray user interface.
- Include five sample study tasks related to Advanced Programming.

3. Technologies Used

- React Native
- Expo
- TypeScript
- React Hooks
- StyleSheet

4. Project Requirements

1. React Native Components

The application uses "View", "Text", "TextInput", "Pressable", "ScrollView", and "StatusBar" to build the user interface.

2. At Least Three Functional Components

The application contains four function components:

- "App" – manages the main application and task data.
- "ProgressCard" – displays task completion progress.
- "AddTaskForm" – allows users to enter and add tasks.
- "TaskItem" – displays an individual task and its actions.

3. Props

Props pass data and functions between components. Examples include "completed", "total", "onAddTask", "task", "onToggle", and "onDelete".

4. useState

The application uses "useState" to manage the task list and the text entered in the task input field.

5. onPress

The "onPress" event handles adding tasks, marking tasks as completed, and deleting tasks.

6. .map() or FlatList

The application uses "tasks.map()" to display each task from the task array. It also uses ".map()" to update the selected task's completion status.

7. StyleSheet.create()

"StyleSheet.create()" organizes the application's styles, including colors, text sizes, spacing, buttons, task cards, and the progress bar.

8. Flexbox Layout

The application uses Flexbox properties such as "flex", "flexDirection", "alignItems", and "justifyContent" to arrange interface elements.

9. Press Feedback

The Add Task and Delete buttons use "Pressable" styling with the "pressed" state to change opacity and scale while pressed.

10. Functional Components and Code Restrictions

The application uses function components rather than class components. It does not use "eval()" or an external UI component library.

5. Installation and Setup

1. Install Node.js.

2. Download or clone the project repository.

3. Open the project folder in Visual Studio Code.

4. Open the terminal in the project directory.

5. Install the project dependencies:
   
   npm install

6. Start the Expo development server:
   
   npx expo start --tunnel ngrok

7. Scan the displayed QR code using Expo Go.

Note: If the ngrok tunnel package is not installed, install it using "npm install --save-dev @expo/ngrok".

6. How to Use the Application

1. Open the application using Expo Go.
2. Enter a task in the text input field.
3. Press the plus (+) button to add the task.
4. Tap a task to mark it as completed or incomplete.
5. Press the delete (×) button to remove a task.
6. View the progress card to monitor completed tasks.

7. Developers

- Jhon Carlo Rosas
- Charmel Buhatin

8. Project Purpose

This project demonstrates the use of React Native components, props, state management, event handling, array methods, and Flexbox styling in developing an interactive mobile application.