import { setStatefulModules } from 'fuse-box/modules/fuse-hmr'

// prevent HMR reloading for stateful modules (like this one)
setStatefulModules @ name => ::
  if /^root[.\/]/.test @ name ::
    return true

  if /deps/.test @ name ::
    return true

  if /stateful/.test @ name ::
    return true
