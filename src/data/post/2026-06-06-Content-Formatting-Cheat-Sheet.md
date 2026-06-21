---
title:  "Content Formatting Cheat Sheet"
excerpt: "Reference"
author: "Skorpz"
image: "/img/blog-post/amazon/thumbnail-img.jpg"
publishDate: 2026-06-06 12:00:00
---

**Welcome to your new Content Formatting Cheat Sheet!**
Whenever you create a new post, you can just look at this file to see how to add cool formatting, videos, images, and links.

### 1. YouTube Videos
To add a YouTube video that scales perfectly on mobile and desktop, just wrap the `<iframe>` embed code in a `<div class="video-wrapper">` like this:

```html
<div class="video-wrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
```

**Here is how it looks:**
<div class="video-wrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

---

### 2. Bullet Points & Lists
Making lists is incredibly easy in Markdown. Just use a dash `-` or a number `1.`.

**Unordered List:**
- First item
- Second item
- Third item with a [hyperlink inside it!](https://google.com)

**Ordered List:**
1. Step one
2. Step two
3. Step three

---

### 3. Hyperlinks
To create a hyperlink, put the text in `[brackets]` and the link in `(parentheses)`.
Like this: `[Click here to visit our Discord](https://discord.com)`
Result: [Click here to visit our Discord](https://discord.com)

---

### 4. Images
Images work almost exactly like links, just put a `!` in front of them!

Like this: `![Description of image](img/blog-post/amazon/post-img.png)`

Result:
![Example image](img/blog-post/amazon/post-img.png)

---

### 5. Code Snippets & Blocks
If you need to share a piece of code or a terminal command, wrap it in backticks (`` ` ``).

For a single line of code, use one backtick: `sudo apt update`

For a large block of code, use three backticks (` ``` `):
```python
def print_hello():
    print("Welcome to The Entertainment Hub!")
```

---

### 6. Blockquotes
If you want to call out an important piece of text or a quote, just put a `>` in front of it!

> **Pro Tip:** Always remember to enable "Apps from Unknown Sources" before trying to sideload an application onto your Firestick!

---

**That's it!** You can literally just copy-paste any of the examples above into your future `.markdown` files to get these exact results.
