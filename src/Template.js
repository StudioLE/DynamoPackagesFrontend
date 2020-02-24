import React from 'react'
import { Container, Header, Segment, Icon } from 'semantic-ui-react'

export const Head = () => {
  return(
    <Segment vertical inverted>
      <Container>
        <Header as='h2' inverted
        style={{ padding: '1em 0em' }}>
          <Icon name='clone' />
          <Header.Content>
            Dynamo Packages
            <Header.Subheader>Share and discover</Header.Subheader>
          </Header.Content>
        </Header>
      </Container>
    </Segment>
  )
}

export const Foot = Head
