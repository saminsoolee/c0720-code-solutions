select "customers"."firstName" as "firstname",
      "customers"."lastName" as "lastname"
from "customers"
join "payments" using ("customerId")
order by "amount" desc
limit 10

-- big-spenders.sql

-- Select the 10 largest payment amounts, including the first
--  and last name
-- of the customer who paid.
