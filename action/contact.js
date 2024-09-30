"use server";

export async function ContactAction(prevState, formData) {
  const formObj = Object.fromEntries(formData);

  const errors = {
    name: !formObj.name && "This section cannot be empty",
    surname: !formObj.surname && "This section cannot be empty",
    phone: !formObj.phone && "This section cannot be empty",
    message: !formObj.message && "This section cannot be empty",
  };

  return { errors };
}
