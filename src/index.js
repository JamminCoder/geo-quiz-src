import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Continent from './pages/Continent';
import Quiz from './pages/Quiz';

const router = createHashRouter([
	{
		path: '/',
        element: <Home/>
	},
	
	{
		path: '/continents/:continentName',
		element: <Continent/>
	},

	{
		path: '/quiz/:continentName',
		element: <Quiz/>
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	<React.StrictMode>
    	<RouterProvider router={router}/>
  	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
