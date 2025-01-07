---
layout: base.njk
---

Hi MEJO584!

## Blog posts
<div class="posts">
    {% for post in collections.posts %}
    <a href="{{ post.url }}" class="post-card" style="background-color: {{ post.data.color }}">
        <div class="post-placeholder"></div>
        <div class="post-title">{{ post.data.title }}</div>
    </a>
    {% endfor %}
</div>