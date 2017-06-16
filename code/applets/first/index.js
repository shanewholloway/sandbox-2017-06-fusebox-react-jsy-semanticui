import * as React from 'react'
import { Button } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'


export const ButtonExampleGroupOrSize = () => @
  <Button.Group size='large'>
    <Button>One</Button>
    <Button.Or />
    <Button>Three</Button>
  </Button.Group>

export default ButtonExampleGroupOrSize
