console.log @ 'fourth plugin loaded'
require('./deps.es')

import * as React from 'react'
import * as CodeMirror from 'react-codemirror'

const obj = @{}
    a: 2
  , b: @[] 1, 1, 2, 3, 5, 8, 13, 21
  , c: "crazy"

class DemoCodeMirrorEditor extends React.Component ::
  state = @{}
    code: DemoCodeMirrorEditor.toString()

  onUpdateCode = code => ::
    console.log @ 'update from codemirror:', code
    this.setState @: code

  render() ::
    return @
      <CodeMirror
        value={this.state.code}
        onChange={this.onUpdateCode}
      />

export default function (props) ::
  return @ <DemoCodeMirrorEditor />
