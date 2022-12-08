---
title: Blogg
layout: "layouts/base.njk"
pageClass: blog
---

# Blogg

<section class="blog-entries">
{% for post in collections.blogpost | reverse %}

<section class="blog-entry">
    <h2 class="blog-entry-title">
        <a href="{{ post.url }}">{{ post.data.title }}</a>
    </h2>
    <span class="blog-entry-description">
        {{ post.data.description }}
    </span>
<span class="blog-entry-metadata">
    <span class="blog-entry-author">{{ post.data.author.name }}</span> – 
    <span class="blog-entry-date">{{ post.date | formatDateHuman }}</span>
</span>
</section>

{% endfor %}

</section>

---

<span class="blog-subscribe"><img src="/img/rss.png" height="15px" /> <a href="/blogg/feed.xml">Abonner på artikler</a></span>

Har du en bloggpost du vil publisere her? Send inn en [pull request]({{ site.githubRepoUrl }}/tree/main/src/blogg)!
