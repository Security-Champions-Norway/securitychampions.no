---
title: Blogg
layout: "layouts/base.njk"
pageClass: blog
---

# Blogg

{% for post in collections.blogpost | reverse %}

## [{{ post.data.postDate | formatDateISO }} – {{ post.data.title | safe }}]({{ post.url }})

{% endfor %}

---

<span class="blog-subscribe"><img src="/img/rss.png" height="15px" /> <a href="/blogg/feed.xml">Abonner på artikler</a></span>

Har du en bloggpost du vil publisere her? Send inn en [pull request]({{ site.githubRepoUrl }}/tree/main/src/blogg)!
