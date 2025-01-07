---
title: Hello World
layout: base.njk
---

Hi MEJO584!

## Blog posts
<div class="posts">
    {% for post in collections.posts %}
    <a href="{{ post.url }}" class="post-card">
        <div class="post-placeholder" style="background-color: {{ post.data.color }}"></div>
        <div class="post-title">{{ post.data.title }}</div>
    </a>
    {% endfor %}
</div>