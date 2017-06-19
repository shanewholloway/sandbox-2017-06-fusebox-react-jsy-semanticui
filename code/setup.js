// QUANTUM already replaces it to "production" when building
if process.env.NODE_ENV !== "production" ::

	const  { setStatefulModules } = require('fuse-box/modules/fuse-hmr');

	// prevent HMR reloading for stateful modules (like this one)
	setStatefulModules @ name => ::
	  if /deps|stateful/.test @ name ::
	    return true
