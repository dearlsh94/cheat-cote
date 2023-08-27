import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// NOTE
// 단순 알고리즘 개발을 위한 환경으로, StrictMode를 사용하지 않습니다.
ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>,
    <App />
)
