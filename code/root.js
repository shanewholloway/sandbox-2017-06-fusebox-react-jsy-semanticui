window.Root_FuseBox = typeof FuseBox !== "undefined" ? FuseBox : undefined;
 
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './root.css'
import './setup'

import {sleep, dom_timestamp} from './utilModule'


const parts = @{}
    pre_first: <h3>First:</h3>
  , first: null
  , pre_second: <h3>Second:</h3>
  , second: null
  , pre_third: <h3>Third:</h3>
  , third: null
  , pre_fourth: <h3>Fourth:</h3>
  , fourth: null
  , pre_clock: <h3>Clock:</h3>
  , clock: null



const AppRoot = () => @
  React.createElement @ 'div', null, ... Object.values(parts)

if 1 :: sleepyLoadApplet @ 'first', 500, import('first')
if 1 :: sleepyLoadApplet @ 'second', 500, import('second')
if 1 :: sleepyLoadApplet @ 'third', 500, import('third')
if 1 :: sleepyLoadApplet @ 'fourth', 500, import('fourth')

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


async function sleepyLoadApplet(appletName, ms_sleep, applet) ::
  // start with an artificial random delay
  await sleep @ Math.random() * ms_sleep

  applet = await applet
  if undefined === applet ::
    // option a
    applet = await import(`./applets/${appletName}`)

    if 0 :: // option b
      applet = await import(appletName)

  parts[appletName] = @
    <div>
      <applet.default />
      {dom_timestamp('Loaded at:')}
    </div>

  refresh()

