import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        availableFrom: assignment.availableFrom,
        dueDate: assignment.dueDate,
        availableUntil: assignment.availableUntil,
        description: assignment.description,
        points: assignment.points,
      };
      state.assignments.push(newAssignment);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      );
    },
    deleteAssignment: (state, { payload: id }) => {
      state.assignments = state.assignments.filter((a) => a._id !== id);
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } = assignmentsSlice.actions; // Ensure deleteAssignment is exported
export default assignmentsSlice.reducer;
