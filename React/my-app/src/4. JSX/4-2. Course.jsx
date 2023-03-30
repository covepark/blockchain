import React from 'react';
import Subject from './4-1. Subject';

function Course(props) { //props 생략 가능하나 props 추가하는 것에 익숙해져라
    return(
        <div>
            <Subject name="Math" difficulty={3} />
            <Subject name="Science" difficulty={5} />           
        </div>
    )
}

export default Course;