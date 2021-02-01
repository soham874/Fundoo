import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function SimpleSnackbar(props) {
  const [state, setState] = React.useState({
    message: '',
    open: false
  });

  const handleClick = () => {
    if (props.notif.length !== 0)
      setState({ open: true, message: props.notif })
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
