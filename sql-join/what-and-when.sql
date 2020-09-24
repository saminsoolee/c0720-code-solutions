select  "films"."releaseYear" as "releaseYear",
      "categories"."name" as "CategoriesName"
from "films"
join "filmCategory" using ("filmId")
join "categories" using ("categoryId")
where "films"."title" = 'Boogie Amelie'
