// @flow

import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

type Props = {
  content: string,
  classes: {
    [string]: string,
  },
}

class Button extends React.Component<Props> {
  render () {
    return (
      <button className={this.props.classes.main}>
        {this.props.content}
      </button>
    )
  }
}

export default withStyles({
  main: {
    background: 'red',
  }
})(withRouter(Button))
