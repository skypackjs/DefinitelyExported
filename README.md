# DefinitelyExported
Community-defined export maps for popular npm packages https://nodejs.org/api/esm.html#esm_package_entry_points
Like [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped), but for export maps.

## Wait, is this a joke?

Not at all! This is actually an important tool that [Skypack](https://ww.skypack.dev) uses to optimize packages based on all possible entrypoints. Without an export map, Skypack has no idea how to optimize your package for delivery. If a package author hasn't provided one, this repo gives you a chance to submit your own.
