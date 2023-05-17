//JSON(JavaScript Object Notation)
//XML에서 JSON으로 점점 옮겨가는 추세
{
    "employees":[
        {
            "name":"Kate",
            "lastName":"Youn"
        },
        {
            "name":"Brian",
            "lastName":"Ko"
        },
        {
            "name":"Jun",
            "lastname":"Kim"
        }
    ]
}

JSON.stringify()
const user = {name: "kate", age: 15, gender: 'f'};
const data = JSON.stringify(user); //인수로 전달받은 객체를 문자열로 변환해줌.

JSON.parse()
const user1 = {"name": "kate", "age": 15, "gender": 'f'};
const data1 = JSON.parse(user); //문자열에서 객체로 변환함.

toJSON()
const date = new Date();
const str = date.toJSON(); //Date를 문자형식으로 변환