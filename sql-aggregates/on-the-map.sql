select "countries"."name" as "Countries",
        count("cities".*) as "# of cities"
from "countries"
join "cities" using ("countryId")

group by "countries"."countryId"
