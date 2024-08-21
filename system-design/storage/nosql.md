# nosql dbs

- data is not organized in tables
- more flexable and scalable vs sql dbs
- used to handle large scale data and high speed workloads
- can be scaled horizontally

## key value dbs

- stores a collection of key value pairs
- schemaless (unlike relational dbs)
- ex
  - redis
    - in-memory key/value store

## document dbs

- store data as documents which are 'json-like'
- provides flexibility becuase individual fields in a document can be added or removed independently
- ex
  - mongodb

## wide-column dbs

- stores data in columns rather than rows
- more efficient storage and retrieval of large datasets
- high write throughput
- ex if an application needs to manage a lot of timestamp data
  - cassandra
  - google bigtable

## graph dbs

- graph like structure where each node refers to an entity
- nodes can be connected through edges / relationships
- good for applications where data has complex relationships and high interconnectedness
- provides an intuitive way to model and query connections between entities efficiently
- ex instagram

# why nosql

- sql dbs face issues with scaling and restrictions
- nosql dbs are designed with distributed architecture in mind
  - no foreign key or join constraints, data can be stored on different servers
- BASE
  - basically available, soft state, eventual consistency
