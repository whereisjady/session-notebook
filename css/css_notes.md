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

sticky
TO ADD asap

## CSS Structure
