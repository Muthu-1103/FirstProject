import React from 'react'
import Header from './components/header/header';
import TopContainer from './components/topcontainer/topcontainer';
import Skillcontainer from './components/skillcontainer/skillcontainer';
import Project  from './components/project/project'
import Contacts  from './components/contact/contact';
const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <Skillcontainer />
      <Project />
      <Contacts />
    </div>
  )
}
export default App
