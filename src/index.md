---
title: "Hello World"
layout: "base.njk"
templateEngineOverride: njk,md
---

This is a home page

## From the Blog

{% for post in collections.posts | randomPost %}
<a href="/blog">{{ post.data.title }}</a>
{% endfor %}

## Articles

<ul>
{% for article in collections.articles %}
<li><a href="{{ article.url }}">{{ article.data.title }}</li>
{% endfor %}
</ul>