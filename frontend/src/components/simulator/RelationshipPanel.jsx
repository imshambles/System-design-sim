import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const RelationshipPanel = ({ edge, onUpdate }) => {
  const relationshipTypes = [
    { value: 'inheritance', label: 'Inheritance (extends)' },
    { value: 'implementation', label: 'Implementation (implements)' },
    { value: 'composition', label: 'Composition (has-a)' },
    { value: 'aggregation', label: 'Aggregation (uses-a)' }
  ];

  const handleTypeChange = (value) => {
    onUpdate(edge.id, { type: value });
  };

  return (
    <div className="p-4">
      <h3 className="text-sm font-semibold mb-2">Relationship Type</h3>
      <Select value={edge.data?.type || 'composition'} onValueChange={handleTypeChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent>
          {relationshipTypes.map((type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RelationshipPanel;