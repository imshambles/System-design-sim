import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const ApiKeyDialog = ({ open, onClose, onSave }) => {
  const [apiKey, setApiKey] = useState('');

  const handleSave = () => {
    onSave(apiKey);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add your API Key</DialogTitle>
          <DialogDescription>
            Please enter your API key to run the simulation. The key will be
            stored in your browser's local storage.
          </DialogDescription>
        </DialogHeader>
        <Input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your API key"
        />
        <DialogFooter>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyDialog;
