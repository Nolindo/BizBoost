
balance = 500

withdrawal = float(input("How much money would you like to withdraw? R"))

if withdrawal <= balance and withdrawal > 0:
    balance -= withdrawal
    print(f"Withdrawal successful! Remaining balance: R{balance:.2f}")

elif withdrawal <= 0:
    print("Invalid amount. You must withdraw more than R0.")

else:
    print("Declined. Insufficient funds")