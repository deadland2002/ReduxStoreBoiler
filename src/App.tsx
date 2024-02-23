import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {UseCountSelector} from "../Store/count/Selector.ts";
import countActions from "../Store/count/actions.ts";
import {useDispatch} from "react-redux";

function App() {
    const [count] = UseCountSelector.CurrentCountState();
    const [incrementBy, setIncrementBy] = useState<number>(1)
    const dispatch = useDispatch();

    const HandleDecrement = () => {
        console.log(incrementBy)
        dispatch(countActions.decrement(incrementBy) as any);
    }

    const HandleIncrement = () => {
        console.log(incrementBy)
        dispatch(countActions.increment(incrementBy) as any);
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className={`controlWrapper`}>

                count is {count}

                <input type={'number'} onChange={(e) => {
                    setIncrementBy(parseInt(e.target.value))
                }} placeholder={`${incrementBy}`}/>

                <button onClick={HandleIncrement}>
                    Increment
                </button>
                <button onClick={HandleDecrement}>
                    Decrement
                </button>
            </div>
            <div className="card">
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
