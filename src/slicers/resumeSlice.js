import { createSlice } from '@reduxjs/toolkit';

export const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    value: {
      1: {
        name: 'Abdullah M',
        education: [
          { institute: 'Dhaanish Ahmed College of Engineering', degree: 'BE',year: '2019' },
        ],
        experience: [
          {
            company: 'Congizant Pvt Limited',
            designation: 'Programmer Analyst',
            year: '2021'
          },
        ],
        skills: [{ name: 'ReactJS' }, { name: 'Javascript' },{ name: 'Php' },{ name: 'Node JS' },{ name: 'MongoDB' }],
        email: 'm.abdullah715@gmail.com',
        phone: '9962233222',
        address: 'No 8 Aalady Street, Adirampattinam',
      },
    },
  },
  reducers: {
    addResume: (state, action) => {
      console.log(action);
      console.log(state.value);
      let data = {
        ...state.value,
        [action.payload.id]: action.payload.data,
      };
      console.log(data);

      state.value = data;
    },

    deleteResume: (state, action)=>{
      let id = action.payload
      let data = state.value

      delete data[id]
      
      state.value = data;

    }
  },
});

// Action creators are generated for each case reducer function
export const { addResume,deleteResume } = resumeSlice.actions;

export default resumeSlice.reducer;
