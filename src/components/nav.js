import React from 'react'
import {Link} from 'react-router-dom'
// whenever you want to change the URL use a link tag to change

const Nav = (props) => {
    return <div className="nav">
        {/* link back to the main page */}
        <Link to="/">
            <div>CRYPTO PRICES</div>
        </Link>
         {/* Link to the currencies page */}
        <Link to="/currencies">
            <div>CURRENCIES</div>
        </Link>
    </div>
}
export default Nav