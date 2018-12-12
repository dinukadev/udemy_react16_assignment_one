import React from 'react';
import style from  './UserInput.module.css'

const UserInput = (props) => {
    return (
        <input type="text" value={props.username} onChange={props.changed} className={style.input} />
    );
};

export default UserInput;