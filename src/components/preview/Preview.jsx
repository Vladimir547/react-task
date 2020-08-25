import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import {
    userById,
} from '../../features/users/UserSlice';

export default function Preview(props) {
    const { id } = useParams();
    const user = useSelector((state) => userById(state, id));
    return (
        <div className='user-container'>
            <p>User name: {user.firstName} {user.lastName}</p>
            <p>E-mail: {user.email}</p>
            <p>Company: {user.company}</p>
            <p>Country: {user.country}</p>
            <p>Level: {user.level}</p>
            <p>Coins: {user.coins}</p>
            <p>Date: {user.subscriptionDate}</p>
        </div>
    );
}
