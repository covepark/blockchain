//#map function
const arr = [1,2,3,4];
const list = arr.map((num) => 
    <li>{num}</li>
);

return (
    <ul>{list}</ul>
)

//#key of the list
//- key: 리스트에서 아이템을 구분하기 위한 고유 문자열

const arr2 = [1,2,3,4]; //arr의 값이 다 다를 경우에는 바로 대입 가능
const list2 = arr2.map((num) =>  //key라는 값은 unique해야 하기 떄문에 중복이 되면 안됨.
<li key={num.toString()}>{num}</li>
);
