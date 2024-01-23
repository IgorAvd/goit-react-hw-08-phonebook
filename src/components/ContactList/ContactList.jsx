import { styled } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledContactList } from './ContactList.styled';
import { selectContacts } from '../../redux/Contacts/selector';
import { getFilterValue } from '../../redux/filter/filterSlice';
import { ContactItemDeleteBtn } from './ContactItemDeleteBtn';
import { useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1976d2',
    color: theme.palette.common.white,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilterValue);

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledContactList>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Number</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredContacts.map(contact => (
              <StyledTableRow key={contact.id}>
                <StyledTableCell component="th" scope="row">
                  {contact.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {contact.number}
                  <ContactItemDeleteBtn key={contact.id} id={contact.id} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledContactList>
  );
};
