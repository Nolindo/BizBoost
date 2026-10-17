
contacts = []


def add_contact():
    name = input("Enter name: ")
    phone = input("Enter phone number: ")
    email = input("Enter email: ")

    contact = {
        "name": name,
        "phone": phone,
        "email": email
    }

    contacts.append(contact)
    print("Contact added successfully!")


def search_contact(name):
    for contact in contacts:
        if contact["name"].lower() == name.lower():
            return contact

    return None


def delete_contact(name):
    contact = search_contact(name)

    if contact:
        contacts.remove(contact)
        print("Contact deleted successfully!")
    else:
        print("Contact not found.")


def view_all():
    if not contacts:
        print("No contacts available.")
        return

    print("\n" + "=" * 60)
    print(f"{'Name':<20}{'Phone':<20}{'Email':<20}")
    print("=" * 60)

    for contact in contacts:
        print(
            f"{contact['name']:<20}"
            f"{contact['phone']:<20}"
            f"{contact['email']:<20}"
        )

    print("=" * 60)


# Main menu
while True:
    print("\n===== CONTACT BOOK =====")
    print("1. Add Contact")
    print("2. Search Contact")
    print("3. Delete Contact")
    print("4. View All Contacts")
    print("5. Exit")

    choice = input("Choose an option: ")

    if choice == "1":
        add_contact()

    elif choice == "2":
        name = input("Enter the name to search: ")
        contact = search_contact(name)

        if contact:
            print("\nContact found:")
            print(f"Name: {contact['name']}")
            print(f"Phone: {contact['phone']}")
            print(f"Email: {contact['email']}")
        else:
            print("Contact not found.")

    elif choice == "3":
        name = input("Enter the name to delete: ")
        delete_contact(name)

    elif choice == "4":
        view_all()

    elif choice == "5":
        print("Thank you for using the Contact Book!")
        break

    else:
        print("Invalid option. Please choose 1-5.")