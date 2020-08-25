import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectUsers,
    userById,
    deleteUser,
} from '../features/users/UserSlice';
import Table from '../components/table/Table.jsx';
import Modal from '../components/modal/Modal.jsx';

export function User() {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const [choosedUserId, setChoosedUserId] = useState('0');
    const user = useSelector((state) => userById(state, choosedUserId));
    const [isShowModal, setIsShowModal] = useState(false);
    const editItem = (event) => {
        event.preventDefault();
        if(event.target.closest('tr') && !event.target.closest('.btn-delete')) {
            setIsShowModal(true);
        }
      };
      console.log(choosedUserId);

    return (
        <section className='table-users'>
            <p>{user.firstName}</p>
            <Table 
                users={users}
                setIndex={(id) =>  setChoosedUserId(id)}    
                clickOnTr={(e) => {editItem(e)}}
                clickOnDeleteBtn={(id) => dispatch(deleteUser(id))}
            />
            {
                isShowModal && <Modal  
                    user ={user} 
                    index={choosedUserId} 
                    closeModal={() => setIsShowModal(false)}
                />
            }
        </section>
    );
}

export default User;