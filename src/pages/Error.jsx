import React from 'react'
import { Link } from 'react-router-dom'
import { DivError } from '../components/style/DivError'

const Error = () => {
    return (
        <DivError>
            <iframe title="giphy.com" style={{borderRadius: "20px"}} src="https://giphy.com/embed/XIahGhbK5A685fyr8D" width="480" height="256" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            <h1>The bassist must have messed it up again... </h1>
            <p style={{fontSize: "30px"}}>While we cut their strings, why don't you try again <Link to="/">here</Link>?</p>
        </DivError>
    )
}

export default Error