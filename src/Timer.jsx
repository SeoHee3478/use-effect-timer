import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(10);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    let id;
    if (isStart) {
      id = setInterval(() => {
        // 타이머 숫자가 하나씩 줄어들도록
        setCount((count) => count - 1);
      }, 1000);
      // 0이 되면 카운트가 멈춤
      if (count < 0) {
        clearInterval(id);
        alert("시간이 종료되었습니다.");
        setCount(10);
        setIsStart(false);
      }
    } else {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [count, isStart]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setIsStart(!isStart)}>
        {isStart ? "정지" : "시작"}
      </button>
      <button
        onClick={() => {
          setCount(10);
          setIsStart(false);
        }}
      >
        리셋
      </button>
    </div>
  );
}

export default Timer;
