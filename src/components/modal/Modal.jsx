
import './modal.scss';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {
    changeUser,
} from '../../features/users/UserSlice';

function Modal(props) {
    const dispatch = useDispatch();
    const {user, index} = props;
    const [email, setEmail] = useState(user.email); 
    const [firstName, setFirstname] = useState(user.firstName); 
    const [lastName, setLastname] = useState(user.lastName); 
    const [type, setType] = useState(user.type); 
    const [company, setCompany] = useState(user.company);
    const [country, setCountry] = useState(user.country);
    const [level, setLevel] = useState(user.level);
    const [validated, setValidated] = useState(user.validated);
    const [coins, setCoins] = useState(user.coins);
    const [subscriptionDate, setSubscriptionDate] = useState(user.subscriptionDate);
    const [id, setId] = useState(user.id);
    const [subscriptionType, setSubscriptionType] = useState(user.subscriptionType);

    useEffect(() => {
        setEmail(user.email);
        setFirstname(user.firstName);
        setLastname(user.lastName);
        setType(user.type);
        setCompany(user.company);
        setCountry(user.country);
        setLevel(user.level);
        setValidated(user.validated);
        setCoins(user.coins);
        setSubscriptionDate(user.subscriptionDate);
        setId(index);
        setSubscriptionType(user.subscriptionType);
      }, [user, index]);

    const editUser = (event) => {
        event.preventDefault();
        const user = {
            email,
            firstName,
            lastName,
            type,
            company,
            country,
            level,
            validated,
            coins,
            subscriptionDate,
            id,
            subscriptionType
        };
        dispatch(changeUser([user, index]));
      };
    return (
        <div className='modal'>
            <div className='modal-headline'>
                <h3>edit {firstName} {lastName}</h3>
                <p>unique id {index}</p>
            </div>
            <form onSubmit={(e) => {editUser(e); props.closeModal(e)}}>
            <div className='field wide'>
                    <label htmlFor='email'>E-mail</label>
                    <input type='text' name='email' id='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div className='field narrow'>
                    <label htmlFor='first-name'>First Name</label>
                    <input type='text' name='firstname' id='firstName' value={firstName} onChange={(e) => {setFirstname(e.target.value)}}/>
                </div>
                <div className='field narrow'>
                    <label htmlFor='last-name'>Last Name</label>
                    <input type='text' name='lastname' id='lastName' value={lastName} onChange={(e) => {setLastname(e.target.value)}}/>
                </div>
                <div className='field wide'>
                    <label htmlFor='country'>Country</label>
                    <input type='text' name='country' id='country' value={country} onChange={(e) => {setCountry(e.target.value)}}/>
                </div>
                <div className='field wide'>
                    <label htmlFor='company'>Company</label>
                    <input type='text' name='company' id='company' value={company} onChange={(e) => {setCompany(e.target.value)}}/>
                </div>
                <div className='field narrow'>
                    <label htmlFor='type'>Type</label>
                    <input type='text' name='type' id='type' value={type} onChange={(e) => {setType(e.target.value)}}/>
                </div>
                <div className='field narrow'>
                    <label htmlFor='level'>Level</label>
                    <input type='text' name='level' id='level' value={level} onChange={(e) => {setLevel(e.target.value)}}/>
                </div>
                <div className='field narrow'>
                    <label htmlFor='validated'>Validated</label>
                    <input type='text' name='validated' id='validated' value={validated} onChange={(e) => {setValidated(e.target.value)}}/>
                </div>
                <div className='field narrow'>
                    <label htmlFor='coins'>Coins</label>
                    <input type='text' name='coins' id='coins' value={coins} onChange={(e) => {setCoins(e.target.value)}}/>
                </div>
                <div className='field submit'>
                    <button className='btn-cancel' onClick={(e) => props.closeModal(e)}>cancel</button>
                    <input type='submit' name='sub' id='sub' value='send'/>
                </div>
            </form>
        </div>
    );
}

export default Modal;