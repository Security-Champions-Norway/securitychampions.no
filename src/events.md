---
title: Aktiviteter
layout: "layouts/base.njk"
pageClass: events
---

# Kommende aktiviteter

<section class="event-entries">
{% for event in events | futureEvents | reverse %}

<section class="event-entry">
    <h2 class="event-entry-title">
        <a href="{{ event.url }}">{{ event.title }}</a>
    </h2>
</section>

{% endfor %}

</section>

## Tidligere aktiviteter

<section class="event-entries">
{% for event in events | pastEvents | reverse %}

<section class="event-entry">
    <h2 class="event-entry-title">
        <a href="{{ event.url }}">{{ event.title }}</a>
    </h2>
</section>

{% endfor %}

</section>

---

<span class="events-subscribe">🗓️ <a href="/calendar.ics">Abonner på aktiviterer (ics)</a></span>
