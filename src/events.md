---
title: Meetups
layout: "layouts/base.njk"
pageClass: events
---

# Meetups

Meetups i Security Champions Norge arrangeres på eget initiativ av deltakerne i fellesskapet, på vegne av organisasjonen sin.
Ta kontakt med <a href="https://security-champions-no.slack.com/archives/D03KQMY4GNQ">Julian på Slack</a> hvis din organisasjon kan tenke seg å arrangere neste meetup!

## Kommende aktiviteter

<section class="blog-entries">

{% if events | futureEvents | length == 0 %}

<p>Ingen kommende aktiviteter. Kanskje nettopp din organisasjon har lyst til å arrangere neste meetup? Ta kontakt!
</p>

{% endif %}

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

## Tidligere aktiviteter

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
