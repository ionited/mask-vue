# Mask-vue

> Create your masks for Vue easily

Vue wrapper for [@ionited/mask](https://github.com/ionited/mask). Compatible with Vue 3 and Ionic Vue

## Quick start

Choose your favorite option below:

### Install with NPM

```
npm i @ionited/mask-vue
```

### Get from UNPKG

[https://unpkg.com/@ionited/mask-vue@latest/dist/index.js](https://unpkg.com/@ionited/mask-vue@latest/dist/indext.js)

---

## Usage

To basic usage you can simply call:

```html
<template>
  <input v-mask="{ mask: '99 / 9999' }">
</template>
```

Local import:

```ts
import { mask } from '@ionited/mask-vue';

export default {
  ...
  directives: { mask },
  ...
}
```

or global import:

```ts
import { mask } from '@ionited/mask-vue';

const app = createApp(App)
.directive('mask', mask);
```

### Register your own masks

You can create your own mask logic easily, you only need `register` a mask and use:

```ts
register(name: string, mask: any): void;
```

See more [@ionited/mask](https://github.com/ionited/mask) 

## License

Copyright (c) 2021 Ion. Licensed under [MIT License](LICENSE).

[https://ionited.io](https://ionited.io)
