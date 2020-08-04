import React from 'react';

const Error = ({message}) => {
    return ( 
        <p className='error red darken-4'>{message}</p>
     );
}
 
export default Error;