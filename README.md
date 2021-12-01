# Admonition plugin

Simple plugin for reveal.js to use [MKDocs Admonition](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types) style to create simple *call-outs.*

Clone this repository inside `plugin/admonition` folder and in your HTML presentation just import 

```html
    <script src="plugin/admonition/admonition.js"></script>
    <link rel="stylesheet" href="plugin/admonition/admonition.css">
```

When using markdown plugin:

```
!!!info An optional title
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa. 
```

Just put a new line after admonition type to use admonition type as title:

```
!!!info
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa. 
```

Use empty quotes to remove title from admonition call-out

```
!!!info ""
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa. 
```

If you don't use markdown plugin, wraps syntax in an HTML paragraph:

```
<p>!!!info An option Title
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.</p>
```