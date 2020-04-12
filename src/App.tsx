import React from "react";
import store from "./store/redux-store";
import { Provider } from "react-redux";

//components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DS from './ds';


export default function Main() {
  return (
    <div className="body">
      <DS></DS>      
      <Provider store={store}>
        <Header></Header>
        <Home></Home>
      </Provider>    
    </div>
  );
}
