import { Formik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { WrapperForm } from './ContactForm.styled';
import { string, number, object } from 'yup';
import { ThreeCircles } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from '../../redux/Contacts/selector';
import { addContactsThunk } from '../../redux/Contacts/operations';
import { Box, Button, TextField } from '@mui/material';

let userSchema = object({
  name: string().min(3, 'Must be at least 3 characters').required(),
  number: number()
    .required()
    .typeError('Must be a number')
    .positive()
    .integer(),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const initialName = '';
  const initialNumber = '';
  const notify = () =>
    toast.success('Contact is added!', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const newContact = { id: nanoid(), name, number };
    const isContactExists = contacts?.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExists) {
      toast.error(`${name} is already in contacts.`, {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    } else {
      dispatch(addContactsThunk(newContact));
      notify();
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: initialName, number: initialNumber }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      {({ handleSubmit, getFieldProps, touched, errors }) => (
        <WrapperForm>
          <Box mb={2}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              {...getFieldProps('name')}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="number"
              name="number"
              label="Number"
              type="tel"
              variant="outlined"
              {...getFieldProps('number')}
              error={touched.number && Boolean(errors.number)}
              helperText={touched.number && errors.number}
            />
          </Box>
          <Button
            type="submit"
            disabled={isLoading}
            variant="contained"
            sx={{
              width: '170px',
              height: '40px',
              margin: '25px auto',
              display: 'flex',
            }}
            onClick={handleSubmit}
          >
            {isLoading ? (
              <ThreeCircles
                visible={true}
                height={16}
                width={70}
                color="#4fa94d"
                ariaLabel="three-circles-loading"
              />
            ) : (
              'Add contact'
            )}
          </Button>
        </WrapperForm>
      )}
    </Formik>
  );
};
