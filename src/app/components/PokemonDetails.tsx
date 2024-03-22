
import React from 'react';
import { Pokemon, ResponsePokemon } from '../types/types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

interface PokemonDetailsProps {
  selectedPokemon: ResponsePokemon | null;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PokemonDetails({ selectedPokemon, open, setOpen }: PokemonDetailsProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      {selectedPokemon && (
        <>
          <DialogTitle>{selectedPokemon.details[0].name}</DialogTitle>
          <DialogContent>
            <Typography>Base Experience: {selectedPokemon.details[0].base_experience}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
