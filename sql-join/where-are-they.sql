select "addresses"."line1" as "addresses",
        "city"."name" as "cityName",
        "addresses"."district" as "district"
from    "addresses"
join "cities" as "city" using ("cityId");
