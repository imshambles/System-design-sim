// Mock data for System Design Simulator

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
