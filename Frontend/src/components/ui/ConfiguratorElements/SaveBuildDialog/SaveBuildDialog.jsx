// src/components/layout/SaveBuildDialog/SaveBuildDialog.js
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import computerService from "@/services/computerService";

const SaveBuildDialog = ({ open, onClose, onSave, build, totalPrice }) => {
  const [form, setForm] = useState({ isPublished: true });
  const onChangeForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const parseBuild = function () {
    console.log(totalPrice);
    return {
      bluetooth_module_id: build.Bluetooth.id,
      tower_id: build.Case.id,
      cooling_system_id: build.FCS.id,
      cpu_id: build.CPU.id,
      gpu_id: build.GPU.id,
      hdd_id: build.HDD.id,
      motherboard_id: build.Motherboard.id,
      power_supply_id: build["Power Supply"].id,
      ram_id: build.RAM.id,
      ssd_id: build.SSD.id,
      water_cooling_system_id: build.WCS.id,
      wifi_module_id: build.Wifi.id,
    };
  };

  const handleSave = async () => {
    try {
      const fullForm = { ...form, ...parseBuild(), cost: totalPrice };
      const res = await computerService.createComputer(fullForm);
      if (res.status === 200) {
        console.log(form);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const componentsList = Object.entries(build).filter(([_, comp]) => {
    return comp;
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Save Your Build</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Build description"
          name="description"
          type="text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={form.description}
          onChange={onChangeForm}
        />

        <TextField
          autoFocus
          margin="dense"
          label="Image link"
          name="image"
          type="text"
          fullWidth
          variant="outlined"
          value={form.image}
          onChange={onChangeForm}
        />
        <Typography variant="subtitle1" className="mt-4">
          Components:
        </Typography>
        <List dense>
          {componentsList.map(([category, component]) => (
            <ListItem key={category}>
              <ListItemText
                primary={`${category}: ${component.title}`}
                secondary={`$${component.cost?.toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>
        <Typography variant="subtitle1" className="mt-2">
          Total Price: <strong>${totalPrice.toFixed(2)}</strong>
        </Typography>
      </DialogContent>
      <DialogActions>
        <FormControlLabel
          control={
            <Checkbox
              name="isPublished"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.checked,
                }))
              }
              defaultChecked
            />
          }
          label="Do you want to Public Export?"
        />
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveBuildDialog;
