import { createSlice } from '@reduxjs/toolkit';

// Load tasks from localStorage
const loadTasksFromStorage = () => {
  try {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
};

// Save tasks to localStorage
const saveTasksToStorage = (tasks) => {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: loadTasksFromStorage(),
    hasTasks: loadTasksFromStorage().length > 0,
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      state.tasks.push(newTask);
      state.hasTasks = true;
      saveTasksToStorage(state.tasks);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      state.hasTasks = state.tasks.length > 0;
      saveTasksToStorage(state.tasks);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      saveTasksToStorage(state.tasks);
    },
    completeAndDeleteTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = true;
      }
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      state.hasTasks = state.tasks.length > 0;
      saveTasksToStorage(state.tasks);
    },
    setHasTasks: (state, action) => {
      state.hasTasks = action.payload;
    },
  },
});

export const { addTask, removeTask, toggleTask, completeAndDeleteTask, setHasTasks } = taskSlice.actions;
export default taskSlice.reducer;