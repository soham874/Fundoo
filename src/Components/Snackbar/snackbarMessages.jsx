import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

// export function externalMessage(notif, url=""){
//   this.handleClick(notif,url)
// }

export default function SimpleSnackbar(props) {
  const [state, setState] = React.useState({
    message: '',
    open: false
  });

  const handleClick = (notif) => {
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
        autoHideDuration={3000}
        open={state.open}
        onClose={handleClose}
        message={state.message}
      />
    </div>
  );
}
