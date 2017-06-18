// QUANTUM already replaces it to "production" when building
if ( process.env.NODE_ENV !== "production"){
	const  { setStatefulModules } = require('fuse-box/modules/fuse-hmr');

	// prevent HMR reloading for stateful modules (like this one)
	setStatefulModules @ name => ::
	  if /^root[.\/]/.test @ name ::
	    return true

	  if /deps/.test @ name ::
	    return true

	  if /stateful/.test @ name ::
	    return true
}
