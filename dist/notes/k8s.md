---
header: Kubernetes
description: Orchestrated container management and deployment.
---

# Kubernetes (K8s)

Kubernetes is a comprehensive system that handles the management and deployment of containerized applications (i.e. [Docker containers]()). It can handle aspects such as clustering, scheduling, load balancing, networking, scaling and even CI/CD. 

## Kubernetes Jargon

#### Kubernetes Clusters

A Kubernetes Cluster is the collection of computers or virtual machines that Kubernetes controls such that the cluster can function in unison. 

It consists of:

* [A Master]()
* [Node(s)]()

#### Master

The master of a cluster is the central body that manages the cluster.

It is in charge of:
* Scheduling
* Maintaining application states
* Scaling applications
* Updating

#### Nodes

Nodes work for the master, and they run applications. They are able to communicate with the master through the Kubernetes API.

Nodes consist of:

* A Kubelet
* A container runtime
* Containerized application(s)

#### Kubernetes Deployment

When a cluster gets created, you can begin a deployment for a Pod. A Kubernetes Deployment is a specified configuration telling Kubernetes how to create and update your application instances. It consists of:
* Replica set configurations
* Update strategy configurations

Scaling is handled through creating replica sets of a pod and increase or decrease instances as needed. Replica sets can also be used for redundancy to avoid downtime.

The update strategy handles rolling updates.

#### Kubernetes Pods

A Kubernetes Pod is an instance of an application. It consists of at least one container and any associated containers/resources. In addition to including containers, Pods store:
* Networking information
* Configurations for the container

On the other hand, it can isolate container specific resources such as:
* Processes
* Filesystems
* Namespaces

Pods are configured through a yaml configuration file.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: app-name
  namespace: app-example
  labels:
    app: app
    ui: ui
    api: api
spec:
  containers:
  - name: app-container
    image: user/container-name:latest
    resources:
      limits:
        memory: "200Mi"
      requests:
        memory: "100Mi"
    command: ["stress"]
    args: ["--vm", "1", "--vm-bytes", "150M", "--vm-hang", "1"]
```

#### Kubernetes Service

A Kubernetes Service is a configuration that handles the networking portion of nodes. For instance, you can assign proxies, domains, DNS services, internal IP addresses, external IP addresses or ports to a node.

#### CI/CD

Kubernetes is also capable of CI/CD. It is intelligent enough to implement "rolling updates" such that your services do not experience downtime if an update is needed. It does this by updating one pod at a time such that one is always available.

#### Namespaces

A namespace contains a project and its workloads while also partitioning it from other projects.

## Additional Terminology

#### ConfigMaps and secrets

#### Persistent Volumes

Network storage.

#### Network and Container Network Interface

#### Network Policies

* Firewalls

#### HELM Package Manager

#### RBAC

Authentication management for Kubernetes.

#### Horizontal Pod Autoscaler

Ability to launch more instances of an application automatically.

#### Daemon Sets

Ability to run  identically on each node like:
* Logging
* Monitoring

#### Stateful Sets

* Provisioning
* Mounting
* Has a constant identifier
* Always launches on the same server

#### Cron Jobs

* Scheduled jobs to run.

## Kube Control (kubectl)

To interface with a Kubernetes instance, download the Kubernetes CLI, aka kubectl.

### Common Commands

#### kubectl

## Minikube

Minikube is a local instance of Kubernetes. It is **not** recommended for production!

## General process for launching your stack into Kubernetes

1. Partition a namespace in Kubernetes for your project or stack. Here you can apply:
* Quotas or limits to your hardware
* Create network policies for internet traffic

2. Create a Deployment (or a controller manager).

3. Create a Service. It handles:
* IP address/port assignments
* DNS servers
* Load balancing
* Proxies/Ingress (e.g. nginx)
