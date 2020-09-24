select "customers"."firstName" as "First Name",
      "customers"."lastName" as "Last Name"
from "customers"
join "rentals" using ("customerId")
join "inventory" using ("inventoryId")
join "films" using ("filmId")
where "films"."title" = 'Magic Mallrats';
