// We can't use TypeScript imports in .js files, so removing the import
// The types are still useful for documentation and IDE support

// Component Specifications
export const COMPONENT_SPECS = {
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
    name: 'Nginx Web Server',
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

// Mock simulation results
export const MOCK_SIMULATION_RESULTS = {
  traffic: {
    totalRPS: 2314,
    peakRPS: 6944,
    breakdown: [
      { operation: 'Redirect', rps: 6597, percentage: 95 },
      { operation: 'Shorten URL', rps: 347, percentage: 5 }
    ]
  },
  bottlenecks: [
    {
      id: '1',
      componentId: 'node-1',
      componentName: 'PostgreSQL',
      severity: 'warning',
      type: 'READ_THROUGHPUT_EXCEEDED',
      message: 'Read throughput at 85% capacity',
      current: 8500,
      capacity: 10000,
      suggestion: 'Add 1-2 read replicas to distribute read load'
    }
  ],
  status: 'success',
  estimatedCost: 456.50,
  availability: 0.9989
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
