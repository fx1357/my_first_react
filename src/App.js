// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>ㅓㅑㅝㅜㅑㅓㅜㅇㄹㄴ이ㅏㅜㄹ</h1>
//       </header>
//     </div>
//   );
// }

// export default App;

// 모듈을 불러오는 부분
import React, { useState } from 'react';

const App = () => {

  // 함수, 상수, 변수, 상태선언

  const [keyword, setKeyword] = useState(true)

  
  const changeWord = () => { 
     setKeyword(false)     
  }




  // 화면에 보여지는 부분
  return (
    <div>
      <h1>
        {keyword ? "참이다" : "거짓"}
      </h1>
      <button onClick={() => changeWord()}>button</button>
    </div>
  );
};

export default App;


// 1. 위에서 아래
// 2. = 오른쪽에서 왼쪽
// 3. () 함수들의 모음, 함수 호출은 .으로 호출
