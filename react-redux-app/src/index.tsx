import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import counter from "./reducers";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//데이터 로그를 보여주는 미들웨어
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("store", store);
  console.log("action", action);
  next(action);
};

//thunk 적용
const middleware = applyMiddleware(thunk, loggerMiddleware);

const store = createStore(rootReducer, middleware);

const render = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        // store와 연동하기 위해서는 Provider사용
        <App
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: "INCREMENT" })}
          onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />
      </Provider>
    </React.StrictMode>
  );
render();

store.subscribe(render);
/* subscribe : change Listener를 추가합니다
작업이 전달될 때마다 호출되며 
상태트리의 일부가 잠재적으로 변경되었을 수있습니다. 
그런 다음 getState()를 호출하여 콜백 내부의 
현재 상태 트리를 읽을 수 있습니다. */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
