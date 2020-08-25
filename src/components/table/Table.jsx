import React from 'react';
import './table.scss';
import { Link } from "react-router-dom";


function Table(props) {
    return (
        <table border = '1' className='users-list'>
            <thead>
                <tr>
                    <th>E-mail</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Company</th>
                    <th>Country</th>
                    <th>Subscription</th>
                    <th>Settings</th>
                </tr>
            </thead>
            <tbody>
            {
                props.users.map((user, ind) => {
                    return (
                        <tr id={user.id} key ={`${user.id}+${user.firstName}`} className='user-item' onClick={(e) => { props.setIndex(ind); props.clickOnTr(e)}}>
                            <td>{user.email}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.type}</td>
                            <td>{user.company}</td>
                            <td>{user.country}</td>
                            <td>{user.subscriptionDate}</td>
                            <td>            
                                <Link to={`/preview/${ind}`} className='btn-prewiew'>preview</Link> 
                                <button className='btn-delete' onClick={(e) =>{e.stopPropagation(); props.clickOnDeleteBtn(ind)}}>del</button>
                            </td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>  
    );
}

export default Table;