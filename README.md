# demo react app

It using TypeScript, Webpack.

### Install

```sh
$ npm install

```

### Production Build

```sh
$ npm run build:prd
```

This will create a bundled version of the app in the `dist/` directory. Released file `dist/js/fwd.js` will be used as out library.

### Development Build

```sh
$ npm run build
```

This will create a bundled version of the app in the `public/` directory and watch changes.

### Development Build run as webpack-dev-server

```sh
$ npm start
```

This will start the webpack dev server at [localhost:9000](http://localhost:9000/) in your browser.
