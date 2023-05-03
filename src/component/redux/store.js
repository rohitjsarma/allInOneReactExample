import {applyMiddleware,createStore} from "redux";
//import { configureStore } from '@reduxjs/toolkit'
import {rootReducer} from "../redux/rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from "redux-thunk";




let store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));
export {store};


