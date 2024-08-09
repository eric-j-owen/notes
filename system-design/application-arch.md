# developer perspective

- code is deployed to a server which would handle requests from another computer. persistent applicatipn data may be stored by external database or cloud, which would connect via a network

# end user perspective

- makes a request from the server. ex. through a web browser, browser being the client.
- server will respond with necessary js/html/css, compiled to display.
- bottlenecks though either ram or cpu - servers will need to scale with more users.

# scaling a server

- vertical scaling
  - upgrading componants within the same computer
- horizontal scaling
  - adding multiple servers to distribute user requests / directing traffic, load balancing

# logging / metrics

- servers typically have logging services.
- logs can be written to the same server but for better reliability - write to another external server.
  - consists of errors, requests, etc.
- metrics service collects data from diff sources within env (usage, network traffic, etc). helps diagnose problems before they happen and gain insights into performance such as bottlenecks.
- to handle metrics notifications, alerts are used
