console.log @ 'third plugin loaded'

import * as React from 'react'
import { Editor, Plain } from 'slate'


class DemoPlainTextEditor extends React.Component ::
  state = @{}
    editor: Plain.deserialize @ 'This is editable plain text, just like a <textarea>!'

  onChange = editor => ::
    console.log @ 'update from slate:', editor
    this.setState @: editor

  render() ::
    return @
      <Editor
        state={this.state.editor}
        placeholder={'Enter some plain text...'}
        onChange={this.onChange}
      />


export default function (props) ::
  return @ <DemoPlainTextEditor />

