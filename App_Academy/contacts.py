
contacts = {
    "Thando": "0821112222",
    "Lebo": "0832223333",
    "Ayanda": "0843334444"
}

name = input("Enter the name of the friend you want to look up: ")

if name in contacts:
    number = contacts[name]
    print(f"Found! {name}'s number is {number}")
else:
    print("Contact not found.")