---
title: 'About Us'
description: 'meta description of the page'
---

# Markdown example

```shell
node -v
```

```js

const shiki = require('shiki')

shiki
.getHighlighter({
    theme: 'nord'
})
.then(highlighter => {
    console.log(highlighter.codeToHtml(`console.log('shiki');`, { lang: 'js' }))
})

```
