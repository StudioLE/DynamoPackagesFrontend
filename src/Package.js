import React from 'react'
import { Icon, Item, Label } from 'semantic-ui-react'
import Moment from 'react-moment';

export const Package = ({ id, name, created, maintainers, description, downloads, keywords }) => {
  return (
    <Item key={id}>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Meta>
          <span>Created <Moment fromNow>{created}</Moment></span>
          <span>by {maintainers.map(maintainer => {
            return(
              <span key={maintainer._id}>{maintainer.username}</span>
            )
          })}
          </span>
        </Item.Meta>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          <Label color='blue'>
            <Icon name='download' /> {downloads.toLocaleString()}
          </Label>
          { ! keywords
          ? <div>No keywords</div>
          : keywords.map((keyword, i) => {
            return(
                <Label key={i}>{keyword}</Label>
            )
          })}
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}
