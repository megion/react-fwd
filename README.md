# demo react app

It using TypeScript, Webpack.

### Install

```sh
$ pnpm install

```

### Production Build

```sh
$ pnpm build:prd
```

This will create a bundled version of the app in the `dist/` directory. Released file `dist/js/fwd.js` will be used as out library.

### Development Build

```sh
$ pnpm build
```

This will create a bundled version of the app in the `public/` directory and watch changes.

### Development Build run as webpack-dev-server

```sh
$ pnpm start
```

This will start the webpack dev server at [localhost:9000](http://localhost:9000/) in your browser.
