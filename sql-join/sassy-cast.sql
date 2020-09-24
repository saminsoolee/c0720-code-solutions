select "actors"."firstName" as "first name",
      "actors"."lastName" as "last name"
from "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
where "films"."title" = 'Jersey Sassy'
