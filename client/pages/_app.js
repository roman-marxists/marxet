import BaseModal from '../modals/baseModal.jsx';

const a = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (<BaseModal handleOpen={handleOpen} handleClose={handleClose} />)
}

export default a;