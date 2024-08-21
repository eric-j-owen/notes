# definiton

- 2 techniques used together in distributed ststems to achieve high availability and throughput

# replication

- useful whena single db cant handle all incoming requests.
- creates a copy of db (replica)
- replica is hosted on a seperate machine and kept in sync
- increases data availability, scalability and durability
- **leader - follower architecture**

  - data replication flows from leader to follower
  - **sycnhronous replication**
    - every write transaction to the leader is immediately replicated to the follower.
    - increases consistency, since the follower db will always be up to date with leader
    - increases availablility if leader server goes down, follower can take its place
    - increases latency, since a transaction isnt complete until the leader db also writes to the follower
  - **asynchronous replication** - delay in data replication - leader commits a transaction, sends replication data to follower without waiting for follower to complete its write. - reduces latency - reduces consistency, client can make a request to follower before it is updated resulting in stale data
  - **multi master replication**
    - used when data needs to be served in different regions
    - syncing latency between leaders can be a challenge

  # sharding

- used when replication alone is insufficient to handle traffic.
- divides dbs into smaller shards, each hosted on seperate servers/machines.
- improved performance, scalability and availability
- each shard contains subset of dataset
- data partitioniing
  - range based
    - data is split according to ranges
      - ex. rows 1-25 go to shard 1, etc
  - using a shard key
    - chosen criterion / attribute to filter data
  - hash based
- can be complex and difficult to maintain acid. sql dbs like postgres and mysql dont natively support sharding so custom solutions required
- better for nosql dbs
