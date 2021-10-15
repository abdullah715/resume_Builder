import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './slicers/resumeSlice';

export default configureStore({
  reducer: {
    resume: resumeReducer,
  },
});
