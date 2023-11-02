import { useSelector } from 'react-redux';
import { getUser } from '../../redux/selector';

import { ContactsList } from '../../Contact/ContactList';
import Modal from '../../Modal/Modal';
import AddFab from '../../AppBar/AddFab';

const ContactsPage = () => {
  const { isLoggedIn } = useSelector(getUser);

  return (
    <>
      {isLoggedIn && <ContactsList />}
      <Modal />
      <AddFab />
    </>
  );
};

export default ContactsPage;
