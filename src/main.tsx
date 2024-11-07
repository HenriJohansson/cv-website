import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@styles/index.css'
/*
import { Provider } from 'react-redux'
import { store } from '@/store/store'
*/

try{
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
  )
} catch (error) {
  const id = "root";
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'error.html', true);
  xhr.onreadystatechange = function() {
    if (this.readyState!==4) return;
    if (this.status!==200) {
      console.error("Could not find error.html");
      return;
    }
    const elem = document.getElementById(id)
    if(elem != undefined) {
      elem.innerHTML= this.responseText;
    } else {
      console.error("Failed to find element with " + id);
    }
  };
  xhr.send();
}

