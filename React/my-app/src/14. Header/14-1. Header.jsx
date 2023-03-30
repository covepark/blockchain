import React from "react";

function Header(props) {
    const {isLoggedIn, onsingIn, onsignOut} = props; //props에서 isLoggedIn을가져옴
    return (
        <div>
            <h3>Header Title</h3>

            {isLoggedIn ? (
                    <button onClick={onsignOut}>Sign Out</button>
                ) : (
                    <button onClick={onsingIn}>Sign In</button>
                )}
        </div>
    );
}

export default Header;