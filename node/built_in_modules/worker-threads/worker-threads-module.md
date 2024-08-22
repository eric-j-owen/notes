- enables use of threads that execute js in parallel
- code executed in a worker thread runs in a separate child process, preventing
  it from blocking main application
- different from cluster module, cluster is used to run multiple instances of
  node that can distribute workloads
- allows running multiple application threads within a SINGLE node instance
- when process isolation is not needed (no seperate instances of v8, event loop
  and memory), use worker threads instead of cluster
