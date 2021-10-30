import React from 'react'
import Header from './components/Header/Header'
import Home from './components/home/Home'
import Tasks from './Tasks'


class App extends React.Component {

render(){
  return (
    <div>
      <h1>To do App</h1>
      <Tasks/>
    </div>
  )
}

}
  

export default App;