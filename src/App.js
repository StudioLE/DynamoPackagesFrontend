import React from 'react'
import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import { Container, Divider } from 'semantic-ui-react'
import { Head, Foot } from './Template'
import { Home } from './Home'
import Packages from './Packages'

class App extends React.Component {

  // state = {
  //   loading: true,
  //   packages: []
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3001/packages/25/25')
  //   .then(data => data.json())
  //   .then(data => {
  //     console.log(data)
  //     this.setState({
  //       packages: data,
  //       loading: false
  //     })
  //     return data
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  render() {
    return(
      <Router>
        <div>
          <Head />
          <Container>
            <Divider horizontal />
            <Switch>
              <Route path="/packages/:start/:limit">
                <Packages />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Divider horizontal />
          </Container>
          <Foot />
        </div>
      </Router>
    )
  }
}

export default App
