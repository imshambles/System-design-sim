// Essential Component Specifications for System Design

export const COMPONENT_SPECS = {
  // Load Balancers & Gateways
  aws_alb: {
    id: 'aws_alb',
    name: 'AWS Load Balancer',
    type: 'load_balancer',
    category: 'infrastructure',
    icon: 'network',
    performance: {
      maxRPS: 100000,
      avgReadLatency: 1,
      p99LatencyMultiplier: 1.5,
      maxConnections: 100000,
      supportsReplication: false,
      cpuCores: 0,
      memoryGB: 0,
      baseAvailability: 0.9999
    },
    cost: {
      hourly: 0.025,
      dataTransferPerGB: 0.008
    },
    scaling: {
      horizontal: false,
      vertical: false,
      autoScale: true
    }
  },
  
  nginx: {
    id: 'nginx',
    name: 'Nginx',
    type: 'web_server',
    category: 'compute',
    icon: 'server',
    performance: {
      maxRPS: 50000,
      avgReadLatency: 2,
      p99LatencyMultiplier: 2.0,
      maxConnections: 10000,
      supportsReplication: false,
      cpuCores: 4,
      memoryGB: 8,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.15
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  aws_api_gateway: {
    id: 'aws_api_gateway',
    name: 'AWS API Gateway',
    type: 'api_gateway',
    category: 'infrastructure',
    icon: 'share-2',
    performance: {
      maxRPS: 10000,
      avgReadLatency: 5,
      p99LatencyMultiplier: 2.0,
      maxConnections: 10000,
      supportsReplication: true,
      cpuCores: 0,
      memoryGB: 0,
      baseAvailability: 0.9999
    },
    cost: {
      perMillionRequests: 3.50
    },
    scaling: {
      horizontal: false,
      vertical: false,
      autoScale: true
    }
  },

  // Compute
  nodejs_app: {
    id: 'nodejs_app',
    name: 'Node.js App Server',
    type: 'app_server',
    category: 'compute',
    icon: 'cpu',
    performance: {
      maxRPS: 20000,
      avgReadLatency: 10,
      p99LatencyMultiplier: 3.0,
      maxConnections: 5000,
      supportsReplication: false,
      cpuCores: 8,
      memoryGB: 16,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.30
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  aws_lambda: {
    id: 'aws_lambda',
    name: 'AWS Lambda',
    type: 'serverless_compute',
    category: 'compute',
    icon: 'zap',
    performance: {
      maxRPS: 100000,
      avgReadLatency: 50,
      p99LatencyMultiplier: 3.0,
      maxConnections: 1000,
      coldStartLatency: 200,
      supportsReplication: false,
      cpuCores: 0,
      memoryGB: 0,
      baseAvailability: 0.9999
    },
    cost: {
      perMillionRequests: 0.20,
      perGBSecond: 0.0000166667
    },
    scaling: {
      horizontal: false,
      vertical: false,
      autoScale: true
    }
  },

  grpc: {
    id: 'grpc',
    name: 'gRPC Service',
    type: 'rpc',
    category: 'compute',
    icon: 'radio',
    performance: {
      maxRPS: 100000,
      avgReadLatency: 3,
      p99LatencyMultiplier: 2.0,
      maxConnections: 10000,
      supportsReplication: false,
      cpuCores: 8,
      memoryGB: 16,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.30
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  websocket_server: {
    id: 'websocket_server',
    name: 'WebSocket Server',
    type: 'realtime',
    category: 'compute',
    icon: 'radio',
    performance: {
      maxRPS: 50000,
      avgReadLatency: 5,
      p99LatencyMultiplier: 2.5,
      maxConnections: 100000,
      supportsReplication: false,
      cpuCores: 8,
      memoryGB: 16,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.35
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  // SQL Databases
  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    type: 'sql_database',
    category: 'storage',
    icon: 'database',
    performance: {
      maxReadQPS: 10000,
      maxWriteQPS: 5000,
      avgReadLatency: 1,
      avgWriteLatency: 3,
      p99LatencyMultiplier: 2.5,
      maxStorage: '1TB',
      storageIOPS: 10000,
      maxConnections: 200,
      supportsReplication: true,
      replicationLag: 100,
      cpuCores: 8,
      memoryGB: 32,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.50,
      storagePerGB: 0.10
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: false
    },
    configuration: {
      readReplicas: { label: 'Read Replicas', type: 'number', default: 0, min: 0, max: 5 }
    }
  },

  mysql: {
    id: 'mysql',
    name: 'MySQL',
    type: 'sql_database',
    category: 'storage',
    icon: 'database',
    performance: {
      maxReadQPS: 8000,
      maxWriteQPS: 4000,
      avgReadLatency: 1.2,
      avgWriteLatency: 3.5,
      p99LatencyMultiplier: 2.5,
      maxStorage: '1TB',
      storageIOPS: 8000,
      maxConnections: 150,
      supportsReplication: true,
      replicationLag: 120,
      cpuCores: 8,
      memoryGB: 32,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.45,
      storagePerGB: 0.10
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: false
    },
    configuration: {
      readReplicas: { label: 'Read Replicas', type: 'number', default: 0, min: 0, max: 5 }
    }
  },

  aws_rds_aurora: {
    id: 'aws_rds_aurora',
    name: 'AWS Aurora',
    type: 'sql_database',
    category: 'storage',
    icon: 'database',
    performance: {
      maxReadQPS: 50000,
      maxWriteQPS: 20000,
      avgReadLatency: 0.5,
      avgWriteLatency: 2,
      p99LatencyMultiplier: 2.0,
      maxStorage: '128TB',
      storageIOPS: 100000,
      maxConnections: 16000,
      supportsReplication: true,
      replicationLag: 10,
      cpuCores: 16,
      memoryGB: 128,
      baseAvailability: 0.9999
    },
    cost: {
      hourly: 1.20,
      storagePerGB: 0.10,
      ioPerMillionRequests: 0.20
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    },
    configuration: {
      readReplicas: { label: 'Read Replicas', type: 'number', default: 0, min: 0, max: 15 }
    }
  },

  // NoSQL Databases
  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    type: 'nosql_database',
    category: 'storage',
    icon: 'disc',
    performance: {
      maxReadQPS: 20000,
      maxWriteQPS: 10000,
      avgReadLatency: 2,
      avgWriteLatency: 4,
      p99LatencyMultiplier: 2.5,
      maxStorage: '5TB',
      maxConnections: 5000,
      supportsReplication: true,
      cpuCores: 8,
      memoryGB: 64,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.60,
      storagePerGB: 0.12
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  dynamodb: {
    id: 'dynamodb',
    name: 'AWS DynamoDB',
    type: 'nosql_database',
    category: 'storage',
    icon: 'database',
    performance: {
      maxReadQPS: 40000,
      maxWriteQPS: 40000,
      avgReadLatency: 1,
      avgWriteLatency: 1,
      p99LatencyMultiplier: 2.0,
      maxStorage: 'Unlimited',
      maxConnections: 10000,
      supportsReplication: true,
      cpuCores: 0,
      memoryGB: 0,
      baseAvailability: 0.9999
    },
    cost: {
      hourly: 0,
      perMillionReads: 0.25,
      perMillionWrites: 1.25,
      storagePerGB: 0.25
    },
    scaling: {
      horizontal: true,
      vertical: false,
      autoScale: true
    }
  },

  cassandra: {
    id: 'cassandra',
    name: 'Apache Cassandra',
    type: 'nosql_database',
    category: 'storage',
    icon: 'database',
    performance: {
      maxReadQPS: 50000,
      maxWriteQPS: 40000,
      avgReadLatency: 5,
      avgWriteLatency: 3,
      p99LatencyMultiplier: 2.5,
      maxStorage: '20TB',
      maxConnections: 10000,
      supportsReplication: true,
      cpuCores: 16,
      memoryGB: 64,
      baseAvailability: 0.9999
    },
    cost: {
      hourly: 0.80,
      storagePerGB: 0.10
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: false
    }
  },

  // Caching
  redis: {
    id: 'redis',
    name: 'Redis Cache',
    type: 'cache',
    category: 'cache',
    icon: 'zap',
    performance: {
      maxReadQPS: 100000,
      maxWriteQPS: 80000,
      avgReadLatency: 0.2,
      avgWriteLatency: 0.3,
      p99LatencyMultiplier: 2.0,
      maxMemory: '64GB',
      maxConnections: 10000,
      hitRateAssumption: 0.80,
      supportsReplication: true,
      cpuCores: 4,
      memoryGB: 64,
      baseAvailability: 0.9995
    },
    cost: {
      hourly: 0.15
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    },
    configuration: {
      memoryGB: { label: 'Memory (GB)', type: 'select', options: [16, 32, 64, 128], default: 64 }
    }
  },

  elasticache_memcached: {
    id: 'elasticache_memcached',
    name: 'ElastiCache Memcached',
    type: 'cache',
    category: 'cache',
    icon: 'zap',
    performance: {
      maxReadQPS: 90000,
      maxWriteQPS: 70000,
      avgReadLatency: 0.3,
      avgWriteLatency: 0.4,
      p99LatencyMultiplier: 2.0,
      maxMemory: '32GB',
      maxConnections: 8000,
      hitRateAssumption: 0.85,
      supportsReplication: false,
      cpuCores: 4,
      memoryGB: 32,
      baseAvailability: 0.9995
    },
    cost: {
      hourly: 0.12
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  // CDN & Storage
  cloudfront: {
    id: 'cloudfront',
    name: 'CloudFront CDN',
    type: 'cdn',
    category: 'infrastructure',
    icon: 'globe',
    performance: {
      maxRPS: 250000,
      avgReadLatency: 50,
      p99LatencyMultiplier: 2.0,
      maxConnections: 500000,
      hitRateAssumption: 0.95,
      supportsReplication: false,
      cpuCores: 0,
      memoryGB: 0,
      baseAvailability: 0.9999
    },
    cost: {
      hourly: 0,
      dataTransferPerGB: 0.085
    },
    scaling: {
      horizontal: false,
      vertical: false,
      autoScale: true
    }
  },

  s3: {
    id: 's3',
    name: 'AWS S3',
    type: 'object_storage',
    category: 'storage',
    icon: 'hard-drive',
    performance: {
      maxReadQPS: 5500,
      maxWriteQPS: 3500,
      avgReadLatency: 100,
      avgWriteLatency: 150,
      p99LatencyMultiplier: 3.0,
      maxStorage: 'Unlimited',
      maxConnections: 10000,
      supportsReplication: true,
      cpuCores: 0,
      memoryGB: 0,
      baseAvailability: 0.9999
    },
    cost: {
      hourly: 0,
      storagePerGB: 0.023,
      dataTransferPerGB: 0.09
    },
    scaling: {
      horizontal: true,
      vertical: false,
      autoScale: true
    }
  },

  // Message Queues
  kafka: {
    id: 'kafka',
    name: 'Apache Kafka',
    type: 'message_queue',
    category: 'async',
    icon: 'inbox',
    performance: {
      maxWriteQPS: 100000,
      maxReadQPS: 100000,
      avgReadLatency: 5,
      avgWriteLatency: 5,
      p99LatencyMultiplier: 2.5,
      maxStorage: '10TB',
      maxConnections: 10000,
      supportsReplication: true,
      cpuCores: 16,
      memoryGB: 64,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.75
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: false
    }
  },

  rabbitmq: {
    id: 'rabbitmq',
    name: 'RabbitMQ',
    type: 'message_queue',
    category: 'async',
    icon: 'send',
    performance: {
      maxWriteQPS: 50000,
      maxReadQPS: 50000,
      avgReadLatency: 3,
      avgWriteLatency: 3,
      p99LatencyMultiplier: 2.0,
      maxStorage: '2TB',
      maxConnections: 8000,
      supportsReplication: true,
      cpuCores: 8,
      memoryGB: 32,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.45
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  aws_sqs: {
    id: 'aws_sqs',
    name: 'AWS SQS',
    type: 'message_queue',
    category: 'async',
    icon: 'list',
    performance: {
      maxWriteQPS: 3000,
      maxReadQPS: 3000,
      avgReadLatency: 10,
      avgWriteLatency: 10,
      p99LatencyMultiplier: 2.0,
      maxStorage: 'Unlimited',
      maxConnections: 10000,
      supportsReplication: true,
      cpuCores: 0,
      memoryGB: 0,
      baseAvailability: 0.9999
    },
    cost: {
      perMillionRequests: 0.40
    },
    scaling: {
      horizontal: false,
      vertical: false,
      autoScale: true
    }
  },

  aws_kinesis: {
    id: 'aws_kinesis',
    name: 'AWS Kinesis',
    type: 'stream_processing',
    category: 'async',
    icon: 'fast-forward',
    performance: {
      maxWriteQPS: 100000,
      maxReadQPS: 100000,
      avgReadLatency: 70,
      avgWriteLatency: 70,
      p99LatencyMultiplier: 2.5,
      maxStorage: 'Unlimited',
      maxConnections: 10000,
      supportsReplication: true,
      cpuCores: 0,
      memoryGB: 0,
      baseAvailability: 0.9999
    },
    cost: {
      perShardHour: 0.015,
      dataIngestionPerGB: 0.008
    },
    scaling: {
      horizontal: true,
      vertical: false,
      autoScale: true
    }
  },

  // Search
  elasticsearch: {
    id: 'elasticsearch',
    name: 'Elasticsearch',
    type: 'search_engine',
    category: 'storage',
    icon: 'search',
    performance: {
      maxReadQPS: 30000,
      maxWriteQPS: 15000,
      avgReadLatency: 10,
      avgWriteLatency: 20,
      p99LatencyMultiplier: 3.0,
      maxStorage: '10TB',
      maxConnections: 5000,
      supportsReplication: true,
      cpuCores: 16,
      memoryGB: 64,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.70,
      storagePerGB: 0.135
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  // Analytics & Data Warehouse
  clickhouse: {
    id: 'clickhouse',
    name: 'ClickHouse',
    type: 'analytical_database',
    category: 'storage',
    icon: 'trending-up',
    performance: {
      maxReadQPS: 100000,
      maxWriteQPS: 50000,
      avgReadLatency: 10,
      avgWriteLatency: 20,
      p99LatencyMultiplier: 3.0,
      maxStorage: '50TB',
      maxConnections: 4000,
      supportsReplication: true,
      cpuCores: 32,
      memoryGB: 256,
      baseAvailability: 0.9999
    },
    cost: {
      hourly: 1.50,
      storagePerGB: 0.08
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  redshift: {
    id: 'redshift',
    name: 'AWS Redshift',
    type: 'data_warehouse',
    category: 'storage',
    icon: 'database',
    performance: {
      maxReadQPS: 50000,
      maxWriteQPS: 25000,
      avgReadLatency: 100,
      avgWriteLatency: 150,
      p99LatencyMultiplier: 3.5,
      maxStorage: '8PB',
      maxConnections: 500,
      supportsReplication: true,
      cpuCores: 0,
      memoryGB: 0,
      baseAvailability: 0.9995
    },
    cost: {
      hourly: 0.25,
      storagePerGB: 0.024
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  // Monitoring & Observability
  prometheus: {
    id: 'prometheus',
    name: 'Prometheus',
    type: 'monitoring',
    category: 'observability',
    icon: 'activity',
    performance: {
      maxWriteQPS: 10000,
      maxReadQPS: 5000,
      avgReadLatency: 50,
      avgWriteLatency: 10,
      p99LatencyMultiplier: 3.0,
      maxStorage: '2TB',
      maxConnections: 1000,
      supportsReplication: false,
      cpuCores: 8,
      memoryGB: 32,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.35,
      storagePerGB: 0.08
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: false
    }
  },

  grafana: {
    id: 'grafana',
    name: 'Grafana',
    type: 'visualization',
    category: 'observability',
    icon: 'bar-chart',
    performance: {
      maxRPS: 5000,
      avgReadLatency: 100,
      p99LatencyMultiplier: 2.5,
      maxConnections: 1000,
      supportsReplication: false,
      cpuCores: 4,
      memoryGB: 8,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.20
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  // Infrastructure Components
  aws_route53: {
    id: 'aws_route53',
    name: 'AWS Route 53',
    type: 'dns',
    category: 'infrastructure',
    icon: 'globe',
    performance: {
      maxRPS: 1000000,
      avgReadLatency: 0.5,
      p99LatencyMultiplier: 1.5,
      maxConnections: 1000000,
      supportsReplication: true,
      cpuCores: 0,
      memoryGB: 0,
      baseAvailability: 0.99999
    },
    cost: {
      hourly: 0.0,
      perMillionQueries: 0.40
    },
    scaling: {
      horizontal: false,
      vertical: false,
      autoScale: true
    }
  },

  rate_limiter: {
    id: 'rate_limiter',
    name: 'Rate Limiter',
    type: 'middleware',
    category: 'infrastructure',
    icon: 'shield',
    performance: {
      maxRPS: 500000,
      avgReadLatency: 0.5,
      p99LatencyMultiplier: 1.5,
      maxConnections: 100000,
      supportsReplication: false,
      cpuCores: 4,
      memoryGB: 8,
      baseAvailability: 0.9999
    },
    cost: {
      hourly: 0.12
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  zookeeper: {
    id: 'zookeeper',
    name: 'Apache Zookeeper',
    type: 'coordination',
    category: 'infrastructure',
    icon: 'link',
    performance: {
      maxReadQPS: 50000,
      maxWriteQPS: 10000,
      avgReadLatency: 5,
      avgWriteLatency: 10,
      p99LatencyMultiplier: 2.5,
      maxConnections: 5000,
      supportsReplication: true,
      cpuCores: 4,
      memoryGB: 8,
      baseAvailability: 0.9999
    },
    cost: {
      hourly: 0.25
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: false
    }
  },

  // Deep Learning Components
  gpu_cluster_a100: {
    id: 'gpu_cluster_a100',
    name: 'GPU Cluster (A100)',
    type: 'gpu_training',
    category: 'deep_learning',
    icon: 'cpu',
    performance: {
      maxTrainingSamplesPerSec: 10000,
      maxInferenceSamplesPerSec: 50000,
      avgTrainingLatency: 100,
      avgInferenceLatency: 10,
      p99LatencyMultiplier: 2.0,
      gpuMemoryGB: 80,
      gpuCount: 8,
      maxModelSize: '100GB',
      supportsReplication: true,
      cpuCores: 64,
      memoryGB: 512,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 32.77
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  tpu_pod: {
    id: 'tpu_pod',
    name: 'TPU Pod',
    type: 'tpu_training',
    category: 'deep_learning',
    icon: 'zap',
    performance: {
      maxTrainingSamplesPerSec: 50000,
      maxInferenceSamplesPerSec: 100000,
      avgTrainingLatency: 50,
      avgInferenceLatency: 5,
      p99LatencyMultiplier: 1.8,
      tpuMemoryGB: 128,
      tpuCores: 256,
      maxModelSize: '200GB',
      supportsReplication: true,
      cpuCores: 0,
      memoryGB: 0,
      baseAvailability: 0.9999
    },
    cost: {
      hourly: 8.00
    },
    scaling: {
      horizontal: true,
      vertical: false,
      autoScale: true
    }
  },

  model_inference_server: {
    id: 'model_inference_server',
    name: 'Model Inference Server',
    type: 'inference',
    category: 'deep_learning',
    icon: 'server',
    performance: {
      maxRPS: 10000,
      avgReadLatency: 20,
      p99LatencyMultiplier: 3.0,
      maxConnections: 5000,
      maxModelSize: '10GB',
      batchSize: 32,
      supportsReplication: false,
      cpuCores: 16,
      memoryGB: 64,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 2.50
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  gpu_inference_cluster: {
    id: 'gpu_inference_cluster',
    name: 'GPU Inference Cluster',
    type: 'gpu_inference',
    category: 'deep_learning',
    icon: 'zap',
    performance: {
      maxRPS: 50000,
      avgReadLatency: 5,
      p99LatencyMultiplier: 2.5,
      maxConnections: 10000,
      maxModelSize: '50GB',
      batchSize: 128,
      gpuMemoryGB: 24,
      gpuCount: 4,
      supportsReplication: false,
      cpuCores: 32,
      memoryGB: 256,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 13.22
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  feature_store: {
    id: 'feature_store',
    name: 'Feature Store',
    type: 'feature_management',
    category: 'deep_learning',
    icon: 'database',
    performance: {
      maxReadQPS: 100000,
      maxWriteQPS: 50000,
      avgReadLatency: 2,
      avgWriteLatency: 5,
      p99LatencyMultiplier: 2.0,
      maxStorage: '10TB',
      maxConnections: 10000,
      supportsReplication: true,
      cpuCores: 16,
      memoryGB: 128,
      baseAvailability: 0.9999
    },
    cost: {
      hourly: 1.50,
      storagePerGB: 0.15
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  model_registry: {
    id: 'model_registry',
    name: 'Model Registry',
    type: 'model_management',
    category: 'deep_learning',
    icon: 'archive',
    performance: {
      maxReadQPS: 5000,
      maxWriteQPS: 1000,
      avgReadLatency: 10,
      avgWriteLatency: 50,
      p99LatencyMultiplier: 2.5,
      maxStorage: '50TB',
      maxConnections: 1000,
      supportsReplication: true,
      cpuCores: 8,
      memoryGB: 32,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.80,
      storagePerGB: 0.10
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: false
    }
  },

  data_versioning: {
    id: 'data_versioning',
    name: 'Data Versioning System',
    type: 'data_management',
    category: 'deep_learning',
    icon: 'git-branch',
    performance: {
      maxReadQPS: 2000,
      maxWriteQPS: 500,
      avgReadLatency: 100,
      avgWriteLatency: 200,
      p99LatencyMultiplier: 3.0,
      maxStorage: '100TB',
      maxConnections: 500,
      supportsReplication: true,
      cpuCores: 8,
      memoryGB: 32,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.50,
      storagePerGB: 0.08
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: false
    }
  },

  ml_pipeline_orchestrator: {
    id: 'ml_pipeline_orchestrator',
    name: 'ML Pipeline Orchestrator',
    type: 'orchestration',
    category: 'deep_learning',
    icon: 'workflow',
    performance: {
      maxPipelinesPerDay: 10000,
      avgPipelineLatency: 1000,
      p99LatencyMultiplier: 3.0,
      maxConcurrentPipelines: 1000,
      maxConnections: 2000,
      supportsReplication: false,
      cpuCores: 16,
      memoryGB: 64,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 1.20
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  experiment_tracking: {
    id: 'experiment_tracking',
    name: 'Experiment Tracking',
    type: 'mlops',
    category: 'deep_learning',
    icon: 'bar-chart',
    performance: {
      maxWriteQPS: 10000,
      maxReadQPS: 5000,
      avgReadLatency: 50,
      avgWriteLatency: 20,
      p99LatencyMultiplier: 2.5,
      maxStorage: '5TB',
      maxConnections: 2000,
      supportsReplication: true,
      cpuCores: 8,
      memoryGB: 32,
      baseAvailability: 0.999
    },
    cost: {
      hourly: 0.60,
      storagePerGB: 0.12
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  model_monitoring: {
    id: 'model_monitoring',
    name: 'Model Monitoring Service',
    type: 'monitoring',
    category: 'deep_learning',
    icon: 'activity',
    performance: {
      maxWriteQPS: 50000,
      maxReadQPS: 10000,
      avgReadLatency: 30,
      avgWriteLatency: 10,
      p99LatencyMultiplier: 2.5,
      maxStorage: '10TB',
      maxConnections: 5000,
      supportsReplication: true,
      cpuCores: 16,
      memoryGB: 64,
      baseAvailability: 0.9999
    },
    cost: {
      hourly: 1.00,
      storagePerGB: 0.10
    },
    scaling: {
      horizontal: true,
      vertical: true,
      autoScale: true
    }
  },

  edge_inference_device: {
    id: 'edge_inference_device',
    name: 'Edge Inference Device',
    type: 'edge_inference',
    category: 'deep_learning',
    icon: 'smartphone',
    performance: {
      maxRPS: 100,
      avgReadLatency: 50,
      p99LatencyMultiplier: 2.0,
      maxConnections: 10,
      maxModelSize: '100MB',
      powerConsumption: '5W',
      supportsReplication: false,
      cpuCores: 4,
      memoryGB: 4,
      baseAvailability: 0.99
    },
    cost: {
      hourly: 0.05
    },
    scaling: {
      horizontal: true,
      vertical: false,
      autoScale: false
    }
  }
};

// Scenarios
export const SCENARIOS = {
  url_shortener: {
    id: 'url_shortener',
    name: 'URL Shortener (Easy)',
    description: 'Design a URL shortening service like bit.ly',
    difficulty: 'easy',
    requirements: {
      dailyActiveUsers: 10000000,
      peakConcurrentUsers: 1000000,
      avgSessionsPerUserPerDay: 2,
      avgSessionDuration: 1,
      estimatedDataSize: '100GB',
      dataGrowthRate: '5GB/month',
      targetLatency: { p50: 50, p95: 100, p99: 200 },
      targetAvailability: 0.999,
      operations: [
        {
          name: 'Shorten URL',
          percentage: 5,
          avgPayloadSize: '1KB',
          reads: 0,
          writes: 1
        },
        {
          name: 'Redirect',
          percentage: 95,
          avgPayloadSize: '0.5KB',
          reads: 1,
          writes: 0
        }
      ]
    }
  }
};

// LLD Component Specifications
export const LLD_COMPONENT_SPECS = {
  class_basic: {
    id: 'class_basic',
    type: 'class',
    name: 'Class',
    category: 'class',
    icon: 'box',
    properties: [],
    methods: []
  },
  singleton_pattern: {
    id: 'singleton_pattern',
    type: 'design_pattern',
    name: 'Singleton Pattern',
    category: 'design_pattern',
    icon: 'maximize',
    designPattern: 'singleton',
    properties: [
      {
        name: 'instance',
        type: 'static Self',
        visibility: 'private',
        isStatic: true
      }
    ],
    methods: [
      {
        name: 'getInstance',
        parameters: [],
        returnType: 'Self',
        visibility: 'public'
      }
    ]
  },
  factory_pattern: {
    id: 'factory_pattern',
    type: 'design_pattern',
    name: 'Factory Pattern',
    category: 'design_pattern',
    icon: 'factory',
    designPattern: 'factory',
    methods: [
      {
        name: 'createProduct',
        parameters: [
          {
            name: 'type',
            type: 'string'
          }
        ],
        returnType: 'Product',
        visibility: 'public'
      }
    ]
  },
  hash_map: {
    id: 'hash_map',
    type: 'class',
    name: 'HashMap',
    category: 'data_structure',
    icon: 'database',
    methods: [
      {
        name: 'put',
        parameters: [
          { name: 'key', type: 'K' },
          { name: 'value', type: 'V' }
        ],
        returnType: 'void',
        visibility: 'public',
        complexity: 'O(1)'
      },
      {
        name: 'get',
        parameters: [
          { name: 'key', type: 'K' }
        ],
        returnType: 'V',
        visibility: 'public',
        complexity: 'O(1)'
      }
    ]
  },
  generic_interface: {
    id: 'generic_interface',
    type: 'interface',
    name: 'Interface',
    category: 'interface',
    icon: 'git-merge',
    methods: []
  },
  db_table: {
    id: 'db_table',
    type: 'table',
    name: 'Database Table',
    category: 'table',
    icon: 'table',
    schema: {
      columns: [],
      indexes: [],
      primaryKey: ''
    }
  },
  rest_endpoint: {
    id: 'rest_endpoint',
    type: 'api_endpoint',
    name: 'REST Endpoint',
    category: 'api_endpoint',
    icon: 'route',
    endpoint: {
      path: '',
      method: 'GET',
      request: { type: 'object', properties: {} },
      response: { type: 'object', properties: {} },
      authentication: false
    }
  }
};