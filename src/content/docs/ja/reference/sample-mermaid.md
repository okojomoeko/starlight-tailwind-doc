---
title: Mermaidのサンプル
description: A reference page in my new Starlight docs site.
# head:
    # - tag: script
    #   attrs: {
    #     src: "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"
    #   }
    # - tag: script
    #   content: const storedTheme = typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');

    # - tag: script
    #   content: mermaid.initialize({startOnLoad:true,theme:storedTheme})
---

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
