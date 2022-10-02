import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {clearData, incrementId, decrementId, inputId, fetchData} from './features/dataSlice';
// import { render } from '@testing-library/react';

function App() {
  // your logic goes here!
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if(data.apiData) {
      return <img style={{'width': '80vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>No image found</p>
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Thunk!</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <input value={data.objectId} onChange={(e) => { dispatch(inputId(Number(e.target.value))) }} />
      <div>
        {/* Once you have plugged everything in, render the image here! */}
        {renderImg()}
      </div>
    </div>
  );
}

export default App;