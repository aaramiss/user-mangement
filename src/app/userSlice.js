import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // This array will hold user data.
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer for fetching users (You can replace this with Axios to fetch data from a file or API).
    fetchUsers: (state, action) => {
      state.users = action.payload;
    },

    // Reducer for adding a new user.
    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    // Reducer for editing a user.
    editUser: (state, action) => {
      const { id, updatedUserData } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = {
          ...state.users[userIndex],
          ...updatedUserData,
        };
      }
    },

    // Reducer for deleting a user.
    deleteUser: (state, action) => {
      const idToDelete = action.payload;
      state.users = state.users.filter((user) => user.id !== idToDelete);
    },
  },
});

export const { fetchUsers, addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
