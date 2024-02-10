import { useState } from 'react';
import { useReducer } from 'react';
import './App.css';
import { useRef } from 'react';
import Child from './Component/Child';

function App() {
  function helper(name) {
    return { id: Date.now(), name: name, toggle: true };
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'AddPost':
        return [...state, helper(action.payload.name)];
      case 'Toggle':
        return state.map((state) => {
          if (state.id === action.payload.id) {
            return { ...state, toggle: !state.toggle };
          } else {
            return state;
          }
        });
    }
  };

  const [val, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'AddPost', payload: { name: name } });
    setName('');
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  function focus(){
    inputRef.current.focus()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" value={name} onChange={(e) => handleChange(e)} style={{margin: "10px",marginTop:"0", height:"3.5vw", width:"20vw"}}/>
        <button type="submit" style={{}}>Add</button>
      </form>
      {/* {val.map((el) => {
        return <Child key={el.id} name={el.name} />;
      })} */}

      {
        val.map((el)=>{
          return <Child key={el.id} post={el} dispatch={dispatch} />
        })
      }

    

      <button style={{marginTop:"20px"}} onClick={focus}>Get back Writing</button>
    </>
  );
}

export default App;