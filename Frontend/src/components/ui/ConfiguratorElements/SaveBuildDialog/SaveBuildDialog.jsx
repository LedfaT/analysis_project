// src/components/layout/SaveBuildDialog/SaveBuildDialog.js
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, List, ListItem, ListItemText } from '@mui/material';

const SaveBuildDialog = ({ open, onClose, onSave, build, totalPrice }) => {
  const [buildName, setBuildName] = useState('');

  const handleSave = () => {
    if (buildName.trim()) {
      onSave(buildName);
      setBuildName(''); // Очистити після збереження
    }
  };

  const componentsList = Object.entries(build).filter(([_, comp]) => comp);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Save Your Build</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Build Name"
          type="text"
          fullWidth
          variant="outlined"
          value={buildName}
          onChange={(e) => setBuildName(e.target.value)}
        />
        <Typography variant="subtitle1" className="mt-4">Components:</Typography>
        <List dense>
          {componentsList.map(([category, component]) => (
            <ListItem key={category}>
              <ListItemText
                primary={`${category}: ${component.name}`}
                secondary={`$${component.price.toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>
        <Typography variant="subtitle1" className="mt-2">
          Total Price: <strong>${totalPrice.toFixed(2)}</strong>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>Accept</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveBuildDialog;
