import React from 'react'
import InstaAPI from './InstaAPI';


const DisplayData = () => {
  return (
    <>
      <header className="App-header" style={{textAlign:'center'}}>
        <h1>Instagram Feed with Instagram API from user: anonymouser123321</h1>
      </header>

      <InstaAPI limit={12}/>
    </>
  );
}

export default DisplayData;