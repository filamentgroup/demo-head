# demo-head

Shared header module for demo pages.

[![Filament Group](http://filamentgroup.com/images/fg-logo-positive-sm-crop.png) ](http://www.filamentgroup.com/)

Full example code: [index.html](./index.html).

## Code

### CSS

```html
<link rel="stylesheet" href="/demo-head/demohead.css">
```

### Body HTML

```html
<div class="demo-header">
  <div class="company">
    <img src="http://filamentgroup.com/images/fg-logo-positive-sm-crop.png">
  </div>
  <div class="details">
    <h1 class="description-container">Demo of <span class="repo-name">Revolver</span>
      <span class="description">A 360&deg; panoramic photo viewer.</span>
    </h1>
    <ul class="outbound-links">
      <li><a href="{{link_to_repo}}">Code</a></li>
      <li><a href="{{link_to_article}}">Article</a></li>
      <li><a href="{{link_to_issues}}">Issues</a></li>
    </ul>
  </div>
</div>
```