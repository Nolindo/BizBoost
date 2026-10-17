

while True:
    score = input("Enter your game score (or type 'stop' to quit): ").strip().lower()

    if score == "stop":
        print("Game session ended!")
        break

    score = int(score)

    if score > 100:
        print("Wow! That's a new high score!")
    else:
        print("Good try, keep playing!")