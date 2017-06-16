import * as React from 'react'

export function sleep(ms, self) ::
  return new Promise @ resolve =>
    setTimeout @ resolve, ms, self || ms

export function dom_timestamp(prefix) ::
  const ts = new Date()
  return @
    <div>
      {prefix} {' '}
      <time dateTime={ts.toISOString()}>
        {ts.toISOString()}
      </time>
    </div>

