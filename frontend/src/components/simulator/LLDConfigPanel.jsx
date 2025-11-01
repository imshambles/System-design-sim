import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Plus, Trash } from 'lucide-react';

const LLDConfigPanel = ({ node, onUpdate }) => {
  const { component } = node.data;
  const [editedComponent, setEditedComponent] = useState(component);

  const handlePropertyChange = (index, field, value) => {
    const updatedProperties = [...(editedComponent.properties || [])];
    updatedProperties[index] = { ...updatedProperties[index], [field]: value };
    setEditedComponent({ ...editedComponent, properties: updatedProperties });
  };

  const handleMethodChange = (index, field, value) => {
    const updatedMethods = [...(editedComponent.methods || [])];
    updatedMethods[index] = { ...updatedMethods[index], [field]: value };
    setEditedComponent({ ...editedComponent, methods: updatedMethods });
  };

  const addProperty = () => {
    const newProperty = {
      name: '',
      visibility: 'public',
      type: '',
    };
    setEditedComponent({
      ...editedComponent,
      properties: [...(editedComponent.properties || []), newProperty],
    });
  };

  const removeProperty = (index) => {
    const updatedProperties = [...(editedComponent.properties || [])];
    updatedProperties.splice(index, 1);
    setEditedComponent({ ...editedComponent, properties: updatedProperties });
  };

  const addMethod = () => {
    const newMethod = {
      name: '',
      visibility: 'public',
      returnType: '',
      parameters: [],
    };
    setEditedComponent({
      ...editedComponent,
      methods: [...(editedComponent.methods || []), newMethod],
    });
  };

  const removeMethod = (index) => {
    const updatedMethods = [...(editedComponent.methods || [])];
    updatedMethods.splice(index, 1);
    setEditedComponent({ ...editedComponent, methods: updatedMethods });
  };

  const handleParametersChange = (methodIndex, value) => {
    const updatedMethods = [...(editedComponent.methods || [])];
    updatedMethods[methodIndex] = {
      ...updatedMethods[methodIndex],
      parameters: value.split(',').map(p => p.trim()),
    };
    setEditedComponent({ ...editedComponent, methods: updatedMethods });
  };

  const handleSave = () => {
    onUpdate(node.id, { component: editedComponent });
  };

  return (
    <div className="space-y-6">
      <div className="text-sm font-semibold text-slate-900 mb-2">{component.name}</div>
      <div className="text-xs text-slate-500 mb-3">{component.type}</div>

      {(component.type === 'class' || component.type === 'interface') && (
        <>
          <div>
            <div className="flex justify-between items-center mb-2">
              <Label className="text-sm font-semibold">Properties</Label>
              <Button variant="outline" size="sm" onClick={addProperty}>
                <Plus className="w-4 h-4 mr-1" /> Add Property
              </Button>
            </div>
            {editedComponent.properties?.map((prop, index) => (
              <div key={index} className="mt-2 space-y-2 p-2 border rounded-md">
                <div className="flex justify-between">
                  <Input
                    placeholder="Property name"
                    value={prop.name}
                    onChange={(e) => handlePropertyChange(index, 'name', e.target.value)}
                    className="flex-1 mr-2"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeProperty(index)}
                  >
                    <Trash className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Select
                    value={prop.visibility}
                    onValueChange={(value) => handlePropertyChange(index, 'visibility', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">public</SelectItem>
                      <SelectItem value="private">private</SelectItem>
                      <SelectItem value="protected">protected</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Type"
                    value={prop.type}
                    onChange={(e) => handlePropertyChange(index, 'type', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <Label className="text-sm font-semibold">Methods</Label>
              <Button variant="outline" size="sm" onClick={addMethod}>
                <Plus className="w-4 h-4 mr-1" /> Add Method
              </Button>
            </div>
            {editedComponent.methods?.map((method, index) => (
              <div key={index} className="mt-2 space-y-2 p-2 border rounded-md">
                <div className="flex justify-between">
                  <Input
                    placeholder="Method name"
                    value={method.name}
                    onChange={(e) => handleMethodChange(index, 'name', e.target.value)}
                    className="flex-1 mr-2"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeMethod(index)}
                  >
                    <Trash className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Select
                    value={method.visibility}
                    onValueChange={(value) => handleMethodChange(index, 'visibility', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">public</SelectItem>
                      <SelectItem value="private">private</SelectItem>
                      <SelectItem value="protected">protected</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Return type"
                    value={method.returnType}
                    onChange={(e) => handleMethodChange(index, 'returnType', e.target.value)}
                  />
                </div>
                <Input
                  placeholder="Parameters (comma-separated)"
                  value={method.parameters.join(', ')}
                  onChange={(e) => handleParametersChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
        </>
      )}

      {component.type === 'table' && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <Label className="text-sm font-semibold">Columns</Label>
            <Button variant="outline" size="sm" onClick={addProperty}>
              <Plus className="w-4 h-4 mr-1" /> Add Column
            </Button>
          </div>
          {editedComponent.properties?.map((prop, index) => (
            <div key={index} className="mt-2 space-y-2 p-2 border rounded-md">
              <div className="flex justify-between">
                <Input
                  placeholder="Column name"
                  value={prop.name}
                  onChange={(e) => handlePropertyChange(index, 'name', e.target.value)}
                  className="flex-1 mr-2"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeProperty(index)}
                >
                  <Trash className="w-4 h-4 text-red-500" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Type"
                  value={prop.type}
                  onChange={(e) => handlePropertyChange(index, 'type', e.target.value)}
                />
                <Select
                  value={prop.constraints?.join(', ')}
                  onValueChange={(value) => handlePropertyChange(index, 'constraints', value.split(', '))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Constraints" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PRIMARY KEY">Primary Key</SelectItem>
                    <SelectItem value="FOREIGN KEY">Foreign Key</SelectItem>
                    <SelectItem value="UNIQUE">Unique</SelectItem>
                    <SelectItem value="NOT NULL">Not Null</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          ))}
        </div>
      )}

      {component.type === 'api_endpoint' && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <Label className="text-sm font-semibold">Endpoints</Label>
            <Button variant="outline" size="sm" onClick={addMethod}>
              <Plus className="w-4 h-4 mr-1" /> Add Endpoint
            </Button>
          </div>
          {editedComponent.endpoints?.map((endpoint, index) => (
            <div key={index} className="mt-2 space-y-2 p-2 border rounded-md">
              <div className="flex justify-between">
                <Input
                  placeholder="Path"
                  value={endpoint.path}
                  onChange={(e) => handleMethodChange(index, 'path', e.target.value)}
                  className="flex-1 mr-2"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeMethod(index)}
                >
                  <Trash className="w-4 h-4 text-red-500" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Select
                  value={endpoint.method}
                  onValueChange={(value) => handleMethodChange(index, 'method', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="HTTP Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GET">GET</SelectItem>
                    <SelectItem value="POST">POST</SelectItem>
                    <SelectItem value="PUT">PUT</SelectItem>
                    <SelectItem value="DELETE">DELETE</SelectItem>
                    <SelectItem value="PATCH">PATCH</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Request/Response Type"
                  value={endpoint.returnType}
                  onChange={(e) => handleMethodChange(index, 'returnType', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LLDConfigPanel;