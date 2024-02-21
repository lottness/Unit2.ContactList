import { useEffect, useState } from "react";
import ContactRow from "./ContactRow";

export default function SelectContact({
  selectContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);
  if (contact === null) {
    return null;
  }
  return (
    <ContactRow contact={contact} setSelectedContactId={setSelectedContactId} />
  );
}
