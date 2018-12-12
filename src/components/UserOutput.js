import React from 'react'

const UserOutput = (props) => {
    const style = {
      border: '1px solid green',
      backgroundColor: 'black',
      color: 'white',
      width: '160px',
      margin: '12px 12px 12px 12px'
    };
    return (
      <div style={style}>
          <p>User name : </p>
          <p>{props.username}</p>
      </div>
    );
};

export default UserOutput;