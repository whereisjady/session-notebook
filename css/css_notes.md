### Linking Stylesheets

To separate your HTML and CSS code, you can create a new file, like `css/styles.css` and link it to
your HTML file by placing a `<link>` tag in the `<head>` of your HTML document.

```html
<head>
  …
  <link rel="stylesheet" href="css/styles.css" />
</head>
```

### CSS syntax

|                | Description                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Selector       | Selects to which elements the style declarations are applied, followed by curly braces (`{}`) enclosing the declarations |
| Declaration    | A combination of a property and a property value, separated by a colon (`:`) and ending with a semicolon (`;`)           |
| Property       | The property you want to style, e.g. `color`, `font-size`, `text-align`                                                  |
| Property Value | The value assigned to the property, e.g `blue` for the `color` property, `3rem` for the `font-size` property             |

A ruleset can have multiple declarations:

```css
h1 {
  color: blue;
  font-size: 3rem;
  text-align: center;
}
```

## CSS Positioning

Position = by default **static**

Position fixed = always visible when scrolling through page.

Make elements **relative** = creating a parent and its child **absolute** will move relatively.

```
.header_headline (parent)
position: relative ;

.header_addon (child)
position: absolute ;
```

[comment]: <> (sticky notes etc. etc. STILL TO ADD asap)

## CSS Structure

BEM-method: blocks, elements and modifiers

Keep it DRY, do not repeat yourself

```
Block component: card
Element: card__title (no standalone meaning - semantically tied to the block)
Modifier:
```

**Root selector**: to incl all custom properties that need to be available through whole CSS.

```
:root {
  --primary-color: lightgreen;
  --secondary-color: skyblue;
  --accent-color: tomato;
  --font-family: Arial, sans-serif;

}
```

Add the root to your elements:

```
header {
background-color: var (--accent-color):
}
```

### Seperate CSS files

Separate global and local styles into different files such as: Global.css , header.css etc.

Global.css add: universal selectors, root & body

#### How to import one stylesheet or multiple stylesheets into another stylesheet

You can import one stylesheet into another stylesheet using **@import**:

```css
@import "customer-card.css";
```
