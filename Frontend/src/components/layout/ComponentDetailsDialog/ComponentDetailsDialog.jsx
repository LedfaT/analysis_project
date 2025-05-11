import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Chip,
  Box,
  Typography,
  Divider,
  Stack,
  Rating,
  Avatar,
  Paper
} from '@mui/material';
import {
  Star as StarIcon,
  Memory as MemoryIcon,
  Speed as SpeedIcon,
  Power as PowerIcon,
  Info as InfoIcon
} from '@mui/icons-material';

const ComponentDetailsDialog = ({ open, onClose, component, onAddToBuild }) => {
  if (!component) return null;

  const renderSpecItem = (icon, label, value) => (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Avatar sx={{ width: 24, height: 24, mr: 1, bgcolor: 'primary.main' }}>
        {icon}
      </Avatar>
      <Typography variant="body2" sx={{ minWidth: 120 }}>{label}:</Typography>
      <Typography variant="body2" fontWeight="bold">{value}</Typography>
    </Box>
  );

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }
      }}
    >
      <DialogTitle sx={{ 
        bgcolor: '#1976d2', 
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 2,
        px: 3
      }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {component.name}
        </Typography>
        <Chip
          label={`$${component.price.toFixed(2)}`}
          color="secondary"
          sx={{ 
            color: 'white', 
            fontWeight: 'bold',
            fontSize: '1rem',
            padding: '4px 8px'
          }}
        />
      </DialogTitle>

      <DialogContent sx={{ pt: 3, px: 3 }}>
        <Stack direction="row" spacing={3}>
          {/* Ліва частина - зображення та кнопка */}
          <Box sx={{ width: 200 }}>
            <Paper 
              elevation={0}
              sx={{ 
                height: 180, 
                bgcolor: '#f5f5f5', 
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
                border: '1px solid #e0e0e0'
              }}
            >
              <Typography color="text.secondary">Product Image</Typography>
            </Paper>
            
            <Button 
              fullWidth 
              variant="contained" 
              color="primary"
              size="large"
              onClick={() => {
                onAddToBuild(component, component.category);
                onClose();
              }}
              sx={{ 
                mb: 2,
                py: 1.5,
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              Add to Build
            </Button>
          </Box>

          {/* Права частина - інформація */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 'bold' }}>
              Description
            </Typography>
            <Typography paragraph sx={{ mb: 3, color: 'text.secondary', fontSize: '0.95rem' }}>
              {component.description}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 'bold' }}>
              Specifications
            </Typography>

            <Box 
              component="table"
              sx={{ 
                width: '100%',
                borderCollapse: 'collapse',
                mb: 3
              }}
            >
              <tbody>
                {component.specs && Object.entries(component.specs).map(([key, value]) => (
                  <Box 
                    component="tr" 
                    key={key}
                    sx={{
                      borderBottom: '1px solid #f0f0f0',
                      '&:last-child': { borderBottom: 'none' }
                    }}
                  >
                    <Box 
                      component="td" 
                      sx={{ 
                        py: 1.5, 
                        width: '40%',
                        color: 'text.secondary'
                      }}
                    >
                      <Typography variant="body2">{key}</Typography>
                    </Box>
                    <Box 
                      component="td" 
                      sx={{ 
                        py: 1.5,
                        fontWeight: 'bold'
                      }}
                    >
                      <Typography variant="body2">{value}</Typography>
                    </Box>
                  </Box>
                ))}
              </tbody>
            </Box>
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 2, borderTop: '1px solid #eee' }}>
        <Button 
          onClick={onClose} 
          sx={{
            color: 'text.secondary',
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ComponentDetailsDialog;