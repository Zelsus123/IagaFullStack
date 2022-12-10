import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { IagaApp } from './IagaApp';

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <IagaApp />
    </BrowserRouter>

)
