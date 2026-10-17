# student_info.py

first_name = input("Enter your first name: ")
surname = input("Enter your surname: ")
age = int(input("Enter your age: "))
favourite_number = float(input("Enter your favourite number: "))

full_name = f"{first_name} {surname}"


age_in_months = age * 12
rounded_number = round(favourite_number, 2)


print("\n" + "=" * 35)
print("        STUDENT PROFILE CARD")
print("=" * 35)

print(f"Welcome, {full_name}!")
print(f"Name (UPPERCASE): {full_name.upper()}")
print(f"Name (Title Case): {full_name.title()}")
print(f"Age: {age} years")
print(f"Age in Months: {age_in_months} months")
print(f"Favourite Number: {rounded_number}")

print("\nData Types:")
print(f"First Name: {type(first_name)}")
print(f"Surname: {type(surname)}")
print(f"Age: {type(age)}")
print(f"Favourite Number: {type(favourite_number)}")

print("=" * 35)