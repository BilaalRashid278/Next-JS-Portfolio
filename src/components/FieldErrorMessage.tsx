import React from 'react';

const FieldErrorMessage = ({message} : {message : any}) : React.JSX.Element => {
  return (
    <div className='text-red-500'>
        {message}
    </div>
  )
}

export default FieldErrorMessage
