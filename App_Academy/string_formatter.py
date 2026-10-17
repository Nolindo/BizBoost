
first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")
bio = input("Enter a short bio: ")

username = (first_name[0] + last_name).lower()

full_name = f"{first_name} {last_name}".title()

clean_bio = bio.strip()

formatted_bio = clean_bio.replace("I am", "I'm")

bio_length = len(clean_bio)

print("\n" + "=" * 35)
print("        USER PROFILE")
print("=" * 35)

print(f"Full Name: {full_name}")
print(f"Username: {username}")
print(f"Bio: {formatted_bio}")
print(f"Bio Length: {bio_length} characters")

print("=" * 35)