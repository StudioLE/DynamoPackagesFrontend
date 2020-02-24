import React from 'react'
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom"
import { Container, Loader, Item, Divider, Pagination } from 'semantic-ui-react'
import { Package } from './Package'
import { PackagePlaceholder } from './PackagePlaceholder'
          
class Packages extends React.Component {

  state = {
    error: false,
    loading: true,
    packages: [],
    start: 0,
    limit: 0,
    page: 0,
    redirectTo: ''
  }

  load() {
    console.log('load()')

    const { start, limit } = this.props.match.params
    
    this.setState({
      loading: true
    })

    // Fetch packages
    fetch(`http://localhost:3001/packages/${start}/${limit}`)
    .then(res => {
      // Check the response code
      if(res.status !== 200) {
        throw new Error(`API response status ${res.status}`)
      }
      else {
        // Return json data
        return res.json()
      }
    })
    .then(packages => {
      let page = Math.floor(start / limit) + 1
      // Set the state
      this.setState({
        start,
        limit,
        page,
        packages,
        loading: false
      })
      return packages
    })
    .catch(err => {
      // There was an error...
      this.setState({
        error: true
      })
      console.error(err)
    })
  }

  componentDidMount() {
    console.log('componentDidMount()')
    this.load()
  }

	componentDidUpdate() {
    // console.log("componentDidUpdate()")
    // this.load()
  }

  render() {
  
    const handlePaginationChange = async (event, data) => {
      let page = data.activePage
      let limit = this.state.limit
      let route = `/packages/${limit * (page - 1)}/${limit}`
      await this.props.history.push(route)
      this.load()
      // this.setState({ redirectTo: route }, () => {
      //   this.load()
      // })
    }

    // Check for errors
    if(this.state.error) {
      return (
        <h1>Couldn't locate packages</h1>
      )
    }

    // Check for redirects
    if (this.state.redirectTo !== '') {
      return <Redirect to={this.state.redirectTo} />
    }
    return(
      <div>
      {this.state.loading
        ? <Item.Group divided>
            <Container textAlign='center'>
              <Pagination 
                activePage={1}
                totalPages={25}
                firstItem={null}
                lastItem={null}
                siblingRange={2} />
            </Container>
            <Divider horizontal />
            <Loader active>Loading</Loader>
            <PackagePlaceholder />
            <PackagePlaceholder />
            <PackagePlaceholder />
            <PackagePlaceholder />
            <PackagePlaceholder />
          </Item.Group>
        : <Item.Group divided>
          <Container textAlign='center'>
            <Pagination 
              activePage={this.state.page}
              totalPages={25}
              firstItem={null}
              lastItem={null}
              siblingRange={2}
              onPageChange={handlePaginationChange} />
          </Container>
          <Divider horizontal />
          {this.state.packages.map(pkg => {
            return(
              <Package 
                key={pkg._id}
                id={pkg._id}
                name={pkg.name}
                created={pkg.created}
                maintainers={pkg.maintainers}
                description={pkg.description}
                downloads={pkg.downloads}
                keywords={pkg.keywords}
              />
            )
          })}
        </Item.Group>}
      </div>
    )
  }
}

export default withRouter(Packages)
