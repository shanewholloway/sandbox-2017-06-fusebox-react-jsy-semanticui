window.SWH_FuseBox = FuseBox

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './root.css'
import './setup'

import {sleep, dom_timestamp} from './utilModule'


const parts = @{}
    top: <h3>Hello</h3>
  , first: null
  , middle: <h3>Wait for it…</h3>
  , second: null
  , bottom: <h3>Goodbye</h3>
  , clock: null



const AppRoot = () => @
  React.createElement @ 'div', null, ... Object.values(parts)


import { lazyLoad } from 'fuse-tools'

const loadApplet = appletName => ::
  const path = `./applets/${appletName}`
  if FuseBox.exists(path) ::
    return Promise.resolve @ FuseBox.import(path)

  return new Promise @ (resolve, reject) => ::
    FuseBox.import @ `/some_namespace/applet-${appletName}.js`, () => ::
      if ! FuseBox.exists(path) ::
        return reject @ new Error @ `Unable to load applet "${appletName}"`

      return resolve @ FuseBox.import(path)

::
  // start with an artificial random delay
  sleep @ Math.random() * 5000
  .then @ () => loadApplet('first')
  .then @ module => ::
    parts.first = @
      <div>
        <module.default />
        {dom_timestamp('Loaded at:')}
      </div>
    refresh()

::
  // start with an artificial random delay
  sleep @ Math.random() * 5000
  .then @ () => loadApplet('second')
  .then @ module => ::
    parts.second = @
      <div>
        <module.default />
        {dom_timestamp('Loaded at:')}
      </div>
    refresh()

::
  const refreshClock = () => ::
    const ts = new Date()
    parts.clock = dom_timestamp @ 'The current time is:'
    refresh()

  refreshClock()
  setInterval @ refreshClock, 1000

function refresh() ::
  const rootElem = document.getElementById('app')
  ReactDOM.render(<AppRoot/>, rootElem)

refresh()
