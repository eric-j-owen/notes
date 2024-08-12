# design requirements

- moving data
- storing data
- transforming data

# what is good design

## availability

- percentage of time that system is available. uptime / uptime + downtime

## reliablity

- if one server goes down, redundancy in sytem keeps service available, which means service has fault tolerance, meaning service is reliable.

## slo / sla

- service level objective
  - ex. maintain a specific percentage of availability
- service level agreement
  - ex. if slo isnt reached, percentage refund to customer

## throughput

- data / second
- depending on context
  - ex. bytes / sec
    - moving data
  - ex. requests / sec
    - users

## latency

- amound of time an operation takes to complete end to end, or a specific part of the operation.
