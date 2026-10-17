
kilometers = float(input("Enter the number of kilometers you want to drive: "))
petrol_price = float(input("Enter the current petrol price per liter (R): "))

liters_needed = kilometers / 10

total_cost = liters_needed * petrol_price

total_cost = round(total_cost, 2)

print("\n--- Travel Cost Calculator ---")
print(f"Distance: {kilometers} km")
print(f"Petrol price: R{petrol_price}")
print(f"Fuel needed: {liters_needed} liters")
print(f"Total travel cost: R{total_cost:.2f}")