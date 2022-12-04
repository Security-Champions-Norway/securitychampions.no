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

Har du en bloggpost du vil publisere her? Send inn en [pull request]({{ scn.githubRepoUrl }}/tree/main/src/blogg)!
