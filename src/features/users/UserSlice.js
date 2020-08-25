import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      users: [
        {
            email: 'leffler.karelle@marcellus.net',
            firstName: 'Lewis',
            lastName: 'Taylor',
            type: 'Business',
            company: 'green',
            country: 'Korea',
            level: 12,
            validated: true,
            coins: 5000,
            subscriptionType: 'Full',
            subscriptionDate: '11/02/2016',
            id: '0'
        },
    
        {
            email: 'karolann_walker@yahoo.com',
            firstName: 'Katherine',
            lastName: 'Rogers',
            type: 'Business',
            company: 'olive',
            country: 'Rwanda',
            level: 11,
            validated: true,
            coins: 3000,
            subscriptionType: 'Full',
            subscriptionDate: '11/02/2016',
            id: '1'
        },
    
        {
            email: 'lucile.mcdermott@yahoo.com',
            firstName: 'Francisco',
            lastName: 'Webster',
            type: 'Private',
            company: 'aqua',
            country: 'Guam',
            level: 10,
            validated: false,
            coins: 0,
            subscriptionType: 'Full',
            subscriptionDate: '11/02/2016',
            id: '2'
        },
    
        {
            email: 'elfrieda_sanford@hagenes.co.uk',
            firstName: 'Louisa',
            lastName: 'Griffith',
            type: 'Business',
            company: 'olive',
            country: 'Uruguay',
            level: 9,
            validated: true,
            coins: 6000,
            subscriptionType: 'Full',
            subscriptionDate: '11/02/2016',
            id: '3'
        },
    
        {
            email: 'daphney.okuneva@gmail.com',
            firstName: 'Alan',
            lastName: 'Ellis',
            type: 'Private',
            company: 'green',
            country: 'Djibouti',
            level: 8,
            validated: true,
            coins: 999,
            subscriptionType: 'Full',
            subscriptionDate: '11/02/2016',
            id: '4'
        },
    
        {
            email: 'ezequiel_rutherford@yahoo.com',
            firstName: 'Edward',
            lastName: 'Jacobs',
            type: 'Business',
            company: 'black',
            country: 'Jersey',
            level: 7,
            validated: false,
            coins: 0,
            subscriptionType: 'Full',
            subscriptionDate: '11/02/2016',
            id: '5'
        },
      ],
    },
    reducers: {
        changeUser: (state, action) => {
            state.users[action.payload[1]] = action.payload[0];
        },
        deleteUser: (state, action) => {
            state.users.splice(action.payload, 1);
        },
    }
  });
  
 export const { changeUser, deleteUser } = userSlice.actions;
  
  export const selectUsers = state => state.user.users;

  export const userById = ( state, index) => {
    return state.user.users[index];
};
  export default userSlice.reducer;
  