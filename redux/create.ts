import createSagaMiddleware from "@redux-saga/core"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./modules/reducer"
import rootSaga from "./modules/rootSaga"


//store를 만들수있는 create함수
const create = () =>{
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)//auth에서 나만의 saga를 만들어 등록하면 비동기 로직을 쉽게 사용
    return store
}
export default create