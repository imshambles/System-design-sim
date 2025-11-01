import { LLDComponent } from '../types/lld';

export const LLD_COMPONENT_SPECS: Record<string, LLDComponent> = {
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