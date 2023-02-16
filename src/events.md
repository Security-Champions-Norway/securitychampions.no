---
title: Aktiviteter
layout: "layouts/base.njk"
pageClass: events
---

# Kommende aktiviteter

<section class="blog-entries">
{% for event in events | futureEvents | reverse %}

<section class="blog-entry">
    <h2 class="blog-entry-title">
        <a href="{{ event.url }}">{{ event.title }}</a>
    </h2>
    <span class="blog-entry-description">
        {{ event.description }}
    </span>
<span class="blog-entry-metadata">
    <span class="blog-entry-author">{{ event.location }}</span> – 
    <span class="blog-entry-date">{{ event.dateStart | formatDateHuman }}</span>
</span>
</section>

{% endfor %}

</section>

# Tidligere aktiviteter

<section class="blog-entries">
{% for event in events | pastEvents | reverse %}

<section class="blog-entry">
    <h2 class="blog-entry-title">
        <a href="{{ event.url }}">{{ event.title }}</a>
    </h2>
    <span class="blog-entry-description">
        {{ event.description }}
    </span>
<span class="blog-entry-metadata">
    <span class="blog-entry-author">{{ event.location }}</span> – 
    <span class="blog-entry-date">{{ event.dateStart | formatDateHuman }}</span>
</span>
</section>

{% endfor %}

</section>

---

<span class="events-subscribe">🗓️ <a href="/calendar.ics">Abonner på aktiviterer (ics)</a></span>
