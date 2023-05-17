import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from '@web3-react/core';
import {getProvider} from './utils/provider';

const root = ReactDom.createRoot(document, getElementById('root'));
root.render(
    <React.StrictMode>
        <Web3ReactProvider getLibrary = {getProvider}> {//context형태로 접근할 수 있음, 우리가 정의한 getProvider를 넣는다.
        }
        <App />
        </Web3ReactProvider>
    </React.StrictMode>
);

reportWebVitals();
//getprovider에 web3 provider를 넣은 것을 가져오게 됨