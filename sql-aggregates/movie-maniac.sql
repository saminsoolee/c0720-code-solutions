select "customers"."firstName" as "First Name",
      "customers"."lastName" as "Last Name",
      sum("payments"."amount") as "Total $ on Rentals"
from "customers"
join "rentals" using ("customerId")
join "payments" using ("rentalId")

group by "customers"."customerId"
order by "Total $ on Rentals" desc
