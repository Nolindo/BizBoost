
password = input("Enter your secret password: ").strip()

first_letter = password[0]
last_letter = password[-1]

print(f"Your password hint: It starts with {first_letter.upper()} and ends with {last_letter.upper()}.")