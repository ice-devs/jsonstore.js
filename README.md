# JSON Store for NodeJS

jsonstore-node is the official Node wrapper for [jsonsto.re](https://jsonsto.re/).

## Installation

Use the package manager [NPM](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install jsonstore-node.

### NPM

```bash
npm install jsonstore-node --save
```

### Yarn

```bash
yarn add jsonstore-node
```

## Usage

### Manage Boxes
```javascript
const JSONStore = require("jsonstore-node");
const client = new JSONStore("2da96ba0078711ec9e1e5b5f0ae75cec" /* API Key */);

const box = await client.boxes.create("Box" /* box name */, true /* is lambda or not*/);
// box: Box { set, get, getAll, delete }

client.boxes.getAll().then(console.log);
// output: [ { id: 'c9c687f8-38bc-4cf2-9680-fff0657cac27', name: 'Box', lambda: true, createdAt: 1630184480663 } ]

await client.boxes.delete(box.id);

client.boxes.getAll().then(console.log);
// output: []
```

### Box Operations
```javascript
const JSONStore = require("jsonstore-node");
const client = new JSONStore("2da96ba0078711ec9e1e5b5f0ae75cec" /* API Key */);

const box = new client.Box("c9c687f8-38bc-4cf2-9680-fff0657cac27" /* Box ID */);

await box.set("foo", { bar: "baz" });

box.get("foo").then(console.log);
// output: { bar: "baz" }

box.getAll().then(console.log);
// output: [ { key: 'foo', data: { bar: 'baz' }, createdAt: 1630184480931 } ]

await box.delete("foo");

box.getAll().then(console.log);
// output: []
```

Please make sure to update the examples as appropriate.

## License
This project is licensed under [MIT](https://choosealicense.com/licenses/mit/).