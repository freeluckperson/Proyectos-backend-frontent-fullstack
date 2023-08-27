import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false
  },
  {
    id: "3",
    title: "Task 3",
    description: "Task 2 description",
    completed: false
  },
  {
    id: "4",
    title: "Task 4",
    description: "Task 2 description",
    completed: false
  },
  {
    id: "5",
    title: "Task 5",
    description: "Task 2 description",
    completed: false
  },
  {
    id: "6",
    title: "Task 6",
    description: "Task 2 description",
    completed: false
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => [...state, action.payload],
    deleteTask: (state, action) =>
      state.filter((task) => task.id !== action.payload),
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const findTask = state.find((task) => task.id === id);
      if (findTask) {
        findTask.title = title;
        findTask.description = description;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
