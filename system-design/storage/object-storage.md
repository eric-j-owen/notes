# definition

- each piece of data is treated as an object, comprised of the data,metadata, and identifier.
- no hierarchy
- objects stored in flat address spaces
- evolved from blob (binary large object) storage
- used for storing items such as images, videos, and database backups
- ex
  - aws s3, google cloud storage
- typically bad practice storing images and videos in a database.
  - hinders performance, increase storage requirements, frequent read write operations
  - traditional rdbms not obtimized for large files
- object storage designed to handle unstructured data and for storing large files
- retrieving data from an object store directly is not performed. instead, http requests are made to the object storage
