---
title: "Hello World"
layout: "base.njk"
templateEngineOverride: njk,md
---

This is a home page

## From the Blog

{% for post in collections.posts | randomPost %}
<a href="{{ post.url }}">{{ post.data.title }}</a>
{% endfor %}
