# Kerman - A package manager for Kerbal Space Program

## Install

```sh
$ npm install -g kerman
```

Kerman depends on [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/).

## Usage

### Installing packages and dependencies

```sh
# install dependencies listed in kerman.json
$ kerman install

# install a package and add it to kerman.json
$ kerman install <package> --save

# install specific version of a package and add it to kerman.json
$ kerman install <package>@<version> --save
```

### Uninstalling packages

To uninstall a locally installed package:

```sh
$ kerman uninstall <package-name>
```

### Never run Kerman with sudo

Kerman is a user command; there is no need to execute it with superuser permissions.

### Ubuntu users

To use Kerman on Ubuntu, you might need to link `nodejs` executable to `node`:

```
sudo ln -s /usr/bin/nodejs /usr/bin/node
```

## Configuration

Kerman can be configured using JSON in a `.kermanrc` file. Available options will be announced later.

## License

Copyright (c) 2016 Anton Prilepskiy and [other contributors](https://github.com/kerman-ksp/kerman/graphs/contributors)

Licensed under the MIT License
