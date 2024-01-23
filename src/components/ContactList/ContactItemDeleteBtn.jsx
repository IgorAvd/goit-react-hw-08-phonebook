import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { removeContactsThunk } from '../../redux/Contacts/operations';
import { ThreeCircles } from 'react-loader-spinner';
import { useState } from 'react';
import { Button } from '@mui/material';

export const ContactItemDeleteBtn = ({ id }) => {
  const dispatch = useDispatch();
  const [isLoadingRemove, setIsLoadingRemove] = useState(false);

  const handleDelete = async () => {
    setIsLoadingRemove(true);
    try {
      await dispatch(removeContactsThunk(id));
      toast.success('Contact is removed!', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingRemove(false);
    }
  };
  return (
    <Button
      type="submit"
      onClick={handleDelete}
      disabled={isLoadingRemove}
      variant="contained"
      sx={{
        width: '100px',
        height: '30px',
        marginLeft: '15px',
      }}
    >
      {isLoadingRemove ? (
        <ThreeCircles
          visible={true}
          height={15}
          width={40}
          color="#4fa94d"
          ariaLabel="three-circles-loading"
        />
      ) : (
        'Delete'
      )}
    </Button>
  );
};
