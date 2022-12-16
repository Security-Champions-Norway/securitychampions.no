const ics = require("ics");

function toIcsDate(dateString) {
  const date = new Date(dateString);
  return [
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
  ];
}

class Calendar {
  data() {
    return {
      permalink: "/calendar.ics",
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    const calendarEvents = data.events.map((event) => ({
      start: toIcsDate(event.dateStart),
      startInputType: "utc",
      end: toIcsDate(event.dateEnd),
      endInputType: "utc",
      title: event.title,
      description: event.description,
      location: event.location,
      categories: event.tags,
      url: event.url,
    }));

    const { error, value } = ics.createEvents(calendarEvents);

    if (error) {
      console.error(error);
      throw error;
    }

    return value;
  }
}

module.exports = Calendar;
