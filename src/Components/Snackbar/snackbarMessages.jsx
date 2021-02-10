import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function SimpleSnackbar() {
  const [state, setState] = React.useState({
    message: '',
    open: false
  });

  const handleClick = (notif) => {
    if (notif.length !== 0)
      setState({ open: true, message: notif })
  };
 
  SimpleSnackbar.handleClick = handleClick

  const handleClose = () => {
    setState({ open: false })
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={2000}
        open={state.open}
        onClose={handleClose}
        message={state.message}
      />
    </div>
  );
}
