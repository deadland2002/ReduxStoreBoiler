import { useSelector } from 'react-redux';
import { RootState } from '../rootReducer';
import {useEffect, useState} from "react";

// Custom hook for the loading state selector
const currentCount = () => {
    return useSelector((state: RootState) => state.count.count);
};

const countSelector = {
    currentCount,
}



const CurrentCountState = () : [number] =>{
    const [data,setData] = useState<number>(currentCount())
    const selectorValue = currentCount();
    useEffect(() => {
        setData(selectorValue)
    }, [selectorValue]);
    return [data]
}



export const UseCountSelector = {
    CurrentCountState,
}






export default countSelector;