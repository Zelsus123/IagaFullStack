import React, { useState } from 'react'

import { AppRouter } from './router/AppRouter';


export const IagaApp = () => {

  const [user, setUser] = useState(null)
  return (
    <>
      <AppRouter />
    </>
  );
}

