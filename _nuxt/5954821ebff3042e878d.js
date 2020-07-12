(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{500:function(n,e,t){"use strict";t.r(e),e.default='---\nheader: Kubernetes\ndescription: Orchestrated container management and deployment.\n---\n\n# Kubernetes (K8s)\n\nKubernetes is a comprehensive system that handles the management and deployment of containerized applications (i.e. [Docker containers]()). It can handle aspects such as clustering, scheduling, load balancing, networking, scaling and even CI/CD. \n\n## Kubernetes Jargon\n\n#### Kubernetes Clusters\n\nA Kubernetes Cluster is the collection of computers or virtual machines that Kubernetes controls such that the cluster can function in unison. \n\nIt consists of:\n\n* [A Master]()\n* [Node(s)]()\n\n#### Master\n\nThe master of a cluster is the central body that manages the cluster.\n\nIt is in charge of:\n* Scheduling\n* Maintaining application states\n* Scaling applications\n* Updating\n\n#### Nodes\n\nNodes work for the master, and they run applications. They are able to communicate with the master through the Kubernetes API.\n\nNodes consist of:\n\n* A Kubelet\n* A container runtime\n* Containerized application(s)\n\n#### Kubernetes Deployment\n\nWhen a cluster gets created, you can begin a deployment for a Pod. A Kubernetes Deployment is a specified configuration telling Kubernetes how to create and update your application instances. It consists of:\n* Replica set configurations\n* Update strategy configurations\n\nScaling is handled through creating replica sets of a pod and increase or decrease instances as needed. Replica sets can also be used for redundancy to avoid downtime.\n\nThe update strategy handles rolling updates.\n\n#### Kubernetes Pods\n\nA Kubernetes Pod is an instance of an application. It consists of at least one container and any associated containers/resources. In addition to including containers, Pods store:\n* Networking information\n* Configurations for the container\n\nOn the other hand, it can isolate container specific resources such as:\n* Processes\n* Filesystems\n* Namespaces\n\nPods are configured through a yaml configuration file.\n\n```yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: app-name\n  namespace: app-example\n  labels:\n    app: app\n    ui: ui\n    api: api\nspec:\n  containers:\n  - name: app-container\n    image: user/container-name:latest\n    resources:\n      limits:\n        memory: "200Mi"\n      requests:\n        memory: "100Mi"\n    command: ["stress"]\n    args: ["--vm", "1", "--vm-bytes", "150M", "--vm-hang", "1"]\n```\n\n#### Kubernetes Service\n\nA Kubernetes Service is a configuration that handles the networking portion of nodes. For instance, you can assign proxies, domains, DNS services, internal IP addresses, external IP addresses or ports to a node.\n\n#### CI/CD\n\nKubernetes is also capable of CI/CD. It is intelligent enough to implement "rolling updates" such that your services do not experience downtime if an update is needed. It does this by updating one pod at a time such that one is always available.\n\n#### Namespaces\n\nA namespace contains a project and its workloads while also partitioning it from other projects.\n\n## Additional Terminology\n\n#### ConfigMaps and secrets\n\n#### Persistent Volumes\n\nNetwork storage.\n\n#### Network and Container Network Interface\n\n#### Network Policies\n\n* Firewalls\n\n#### HELM Package Manager\n\n#### RBAC\n\nAuthentication management for Kubernetes.\n\n#### Horizontal Pod Autoscaler\n\nAbility to launch more instances of an application automatically.\n\n#### Daemon Sets\n\nAbility to run  identically on each node like:\n* Logging\n* Monitoring\n\n#### Stateful Sets\n\n* Provisioning\n* Mounting\n* Has a constant identifier\n* Always launches on the same server\n\n#### Cron Jobs\n\n* Scheduled jobs to run.\n\n## Kube Control (kubectl)\n\nTo interface with a Kubernetes instance, download the Kubernetes CLI, aka kubectl.\n\n### Common Commands\n\n#### kubectl\n\n## Minikube\n\nMinikube is a local instance of Kubernetes. It is **not** recommended for production!\n\n## General process for launching your stack into Kubernetes\n\n1. Partition a namespace in Kubernetes for your project or stack. Here you can apply:\n* Quotas or limits to your hardware\n* Create network policies for internet traffic\n\n2. Create a Deployment (or a controller manager).\n\n3. Create a Service. It handles:\n* IP address/port assignments\n* DNS servers\n* Load balancing\n* Proxies/Ingress (e.g. nginx)\n'}}]);