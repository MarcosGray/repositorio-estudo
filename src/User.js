import React from 'react'

const User = props => {
    return(
        <div className=''>
            <strong>Logado como:</strong> {props.email} 
            <button className='btn ml-1' onClick={props.logout} >Sair</button>
        </div>
    )
}
export default User