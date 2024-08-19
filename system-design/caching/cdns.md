# definition

- content delivery network
- a group of cache servers located around the world so they can cache content close to end users
- stores copies of a websites content on multiple servers to speed up content delivery and reduce load on the origin server.
- only for static content
- provides redundancy, increases availability, reduces latency

# push cdn

- once new data is added to origin server, immediately pushed to all cache servers
- advantage is users dont have to wait for the content to be transferred from origin server, should only be used for data that is known will be accessed (ex. a video that will be accessed globally)

# pull cdn

- pulls content from origin server on an as needed basis.
- ex. twitter, different profiles might be more popular in different parts of the world, large number of tweets per second, more sense to cache as needed vs a push cdn
