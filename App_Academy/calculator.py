
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

print("\n" + "=" * 45)
print(f"{'Operation':<20}{'Result':>20}")
print("=" * 45)

addition = round(num1 + num2, 2)
print(f"{'Addition (+)':<20}{addition:>20.2f}")

subtraction = round(num1 - num2, 2)
print(f"{'Subtraction (-)':<20}{subtraction:>20.2f}")

multiplication = round(num1 * num2, 2)
print(f"{'Multiplication (*)':<20}{multiplication:>20.2f}")

if num2 == 0:
    print(f"{'Division (/)':<20}{'Cannot divide by zero':>20}")
    print(f"{'Floor Division (//)':<20}{'Cannot divide by zero':>20}")
    print(f"{'Modulus (%)':<20}{'Cannot divide by zero':>20}")
else:
    division = round(num1 / num2, 2)
    floor_division = round(num1 // num2, 2)
    modulus = round(num1 % num2, 2)

    print(f"{'Division (/)':<20}{division:>20.2f}")
    print(f"{'Floor Division (//)':<20}{floor_division:>20.2f}")
    print(f"{'Modulus (%)':<20}{modulus:>20.2f}")

print("=" * 45)