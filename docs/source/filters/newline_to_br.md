---
title: newline_to_br
---

Replaces every newline (`\n`) in a string with an HTML line break (`<br />`).

Input
```liquid
{% capture string_with_newlines %}
Hello
there
{% endcapture %}

{{ string_with_newlines | newline_to_br }}
```

Output
```html

<br/>Hello<br/>there<br/>
```
