import React from 'react'
import { Item, Placeholder } from 'semantic-ui-react'

export const PackagePlaceholder = () => {
  return (
    <Item>
      <Item.Image>
      <Placeholder>
        <Placeholder.Image />
      </Placeholder>
      </Item.Image>
      <Item.Content>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length='full' />
          </Placeholder.Header>
        </Placeholder>
        <Item.Meta>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length='medium' />
          </Placeholder.Header>
        </Placeholder>
        </Item.Meta>
        <Item.Description>
          <Placeholder>
            <Placeholder.Paragraph>
              <Placeholder.Line length='full' />
              <Placeholder.Line length='full' />
              <Placeholder.Line length='full' />
              <Placeholder.Line length='full' />
            </Placeholder.Paragraph>
          </Placeholder>
        </Item.Description>
        <Item.Extra>
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line length='medium' />
            </Placeholder.Header>
          </Placeholder>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}
