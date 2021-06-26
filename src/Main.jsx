import React from 'react';
import { Link } from 'react-router-dom'

function Main(){
    return (
        <div>
            <Link to="/test1">Test1</Link>
            <Link to="/test2">Test2</Link>
        </div>
    )
}

export default Main;