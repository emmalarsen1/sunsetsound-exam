import { getData } from "../lib/data";

export default async function combineData() {
  const allArtist = await getData("bands");
  const schedule = await getData("schedule");

  for (let stage in schedule) {
    for (let day in schedule[stage]) {
      schedule[stage][day].forEach((act) => {
        const matched = allArtist.find((slot) => slot.name === act.act);
        if (matched) {
          act.logo = matched.logo;
          act.bio = matched.bio;
          act.members = matched.members;
          act.genre = matched.genre;
          act.slug = matched.slug;
          act.venue = stage;
          act.day = day;
        }
      });
    }
  }
  return schedule;
}
