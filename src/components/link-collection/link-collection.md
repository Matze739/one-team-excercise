### Description

The link-collection component allows you to add links as a link-collection.

Mandatory properties are
  - linkTarget | The URL, where the link should go
  - linkText | The text, which should be linked

Optional properties are
  - price | The price to be shown. If not set or an empoty value is set, an arrow will be shown instead
  - language | A language indicator - "de" or "en" in the moment - to be used to show the pricing information accordiung to the country

### Examples:
#### Without language parameter (defaults to de)
```js
  <link-collection
    linkText="Köln"
    linkTarget="/berlin"
    price="45"/>
```
#### With language parameter en (other orientation for the currency symbol)
```js
  <link-collection
    linkText="London"
    linkTarget="/london"
    price="45"
    language="en"/>
```
#### Without a price parameter (an arrow will be shown instead of the price information)
```js
  <link-collection
    linkText="Paris"
    linkTarget="/paris"/>
```