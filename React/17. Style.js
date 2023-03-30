//#스타일 연동
import "style.css"; //기본적으로 스타일 연동하기 위해서는 style.css 임포트 할 수 있음.
const App = () => {
    return(
        <div className="App"> {//class X, className O
                                }
            <button className="myBtn">
                Button
            </button>
        </div>
    );
}

//#style.css
.App{ //해당되는 클래스 네임 매칭
    max-width: 1024px;
    padding: 10px;
}

.myBtn{
    color:red;
    background: white;
    margin: 0 auto;

}