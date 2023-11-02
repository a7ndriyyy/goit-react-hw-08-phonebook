import { useSelector } from 'react-redux';
import { getFilter } from '../redux/selector';
import { Contact } from '../Contact/Contact';
import { useGetContactsQuery } from '../redux/api';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import { Filter } from '../Filter/Filter';
import { Loader } from '../Loader';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import Empty from './Empty';

const getFilteredContacts = (contacts, filter) => {
  return contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactsList = () => {
  const { data: contacts, isLoading, error } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  useEffect(() => {
    if (error) toast.error(error.data.message);
  }, [error]);

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && contacts?.length > 1 && <Filter />}
      {!isLoading && contacts?.length < 1 && <Empty />}
      {!isLoading && contacts && (
        <Demo>
          <List component="ul">
            {filteredContacts?.map(contact => (
              <Contact
                id={contact.id}
                key={contact.id}
                name={contact.name}
                number={contact.number}
              />
            ))}
          </List>
        </Demo>
      )}
    </>
  );
};
