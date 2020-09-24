select "categories"."name" as "Categories of Movies",
      count("filmCategory".*) as "Lisa Monroe Appearance"
from "categories"
join "filmCategory" using ("categoryId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."actorId" = 178

group by "categories"."categoryId"
