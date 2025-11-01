export interface Property {
  name: string;
  type: string;
  visibility: 'public' | 'private' | 'protected';
  isStatic?: boolean;
}

export interface Method {
  name: string;
  parameters: Parameter[];
  returnType: string;
  visibility: 'public' | 'private' | 'protected';
  complexity?: 'O(1)' | 'O(n)' | 'O(log n)' | 'O(n^2)';
}

export interface Parameter {
  name: string;
  type: string;
  defaultValue?: string;
}

export interface TableSchema {
  columns: Column[];
  indexes: Index[];
  primaryKey: string;
  foreignKeys?: ForeignKey[];
}

export interface Column {
  name: string;
  type: string;
  nullable: boolean;
  defaultValue?: string;
}

export interface Index {
  name: string;
  columns: string[];
  unique: boolean;
}

export interface ForeignKey {
  columns: string[];
  referenceTable: string;
  referenceColumns: string[];
  onDelete?: 'CASCADE' | 'SET NULL' | 'RESTRICT';
}

export interface APIEndpoint {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  request: Schema;
  response: Schema;
  authentication: boolean;
}

export interface Schema {
  type: string;
  properties?: Record<string, Schema>;
  items?: Schema;
  required?: string[];
}

export interface LLDComponent {
  id: string;
  type: 'class' | 'interface' | 'table' | 'api_endpoint' | 'design_pattern';
  name: string;
  category: 'class' | 'design_pattern' | 'data_structure' | 'interface' | 'table' | 'api_endpoint';
  properties?: Property[];
  methods?: Method[];
  designPattern?: string;
  schema?: TableSchema;
  endpoint?: APIEndpoint;
  icon: string;
}