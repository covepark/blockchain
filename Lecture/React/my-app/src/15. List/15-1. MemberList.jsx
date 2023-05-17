import React from "react";

function MemberList(props) {

    const members = [
        {
            id: 1,
            name: "Will"
        },
        {
            id: 2,
            name: "Mike"
        },
        {
            id: 3,
            name: "Kate"
        }
    ]
    

    return (
        <ul>
            {members.map((member) => {
                return <li key={members.id}>{member.name}</li> //key 값을 넣지 않으면 warning 발생: require unique key. 따라서 'unique'한 key값을 넣어 주는 것이 좋다.
            })}
        </ul>
    );
}

export default MemberList;