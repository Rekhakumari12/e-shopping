import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Shoppage from './pages/shop/Shop';
import Header from './components/header/Header';
import Auth from './pages/auth/Auth';
import { Component } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    //auth.onAuthStateChanged always be open as long as our application is open 
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      /* ------------------ 2. store data in state of application starts------------------ */
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      else {
        this.setState({ currentUser: userAuth })
      }
      /* ------------------ 2. store data in state of application ends------------------ */
    })
  }

  componentWillUnmount() {
    //this will close the onAuthSateChange method on unMount
    this.unSubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/shop' element={<Shoppage />} />
          <Route path='/signin' element={<Auth />} />
        </Routes>
      </div>
    );
  }

}

export default App;
