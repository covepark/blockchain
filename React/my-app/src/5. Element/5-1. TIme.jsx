import React from 'react';

function Time(props) {
    return (
        <div>
            <h2>Time: {new Date().toLocaleTimeString}</h2>  {//현재 시간을 표시하기 위해 내장된 유틸리티 함수 이용. 출력 시 좀 더 깔끔하게 보여지기 위해 .toLocaleTimeString 추가
                                                            } 
        </div>
    )
}

export default Time;