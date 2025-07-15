import React from 'react'
import Head from './components/Head'
import Body from './components/Body'
import store from './utils/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shorts from './components/shorts'
import Sidebar from './components/Sidebar'
import Watchpage from './components/Watchpage'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Head /> 
          <div className="flex">
            <Sidebar /> 
            <div className="flex-1 ">
              <Routes>
                <Route path='/' element={<Body />} />
                <Route path='shorts' element={<Shorts />} />
                <Route path ='watch' element={<Watchpage/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App