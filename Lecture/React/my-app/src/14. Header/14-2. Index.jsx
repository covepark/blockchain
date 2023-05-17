import React from "react";
import { useState } from "react";
import Header from "./14-1. Header";

function Index(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onsignIn = () => {
        setIsLoggedIn(true);
    }

    const onsignOut = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Header isLoggedIn={isLoggedIn} onsignIn={onsignIn} onsignOut={onsignOut} /> {//어떤것이 액션이고 변수를 전달하는지 명확히 하기 위해 on을 붙임
            }
        </div>
    )


}

export default Index;