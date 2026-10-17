
students = [
    {"name": "Thando", "maths": 85, "english": 78, "science": 90},
    {"name": "Lebo", "maths": 65, "english": 72, "science": 68},
    {"name": "Sipho", "maths": 45, "english": 52, "science": 48},
    {"name": "Ayanda", "maths": 92, "english": 88, "science": 95},
    {"name": "Nomsa", "maths": 55, "english": 60, "science": 58}
]

results = []

all_marks = []

for student in students:
    maths = student["maths"]
    english = student["english"]
    science = student["science"]

    average = (maths + english + science) / 3
    average = round(average, 2)

    all_marks.extend([maths, english, science])

    if average >= 80:
        grade = "A"
        status = "Pass"
    elif average >= 70:
        grade = "B"
        status = "Pass"
    elif average >= 60:
        grade = "C"
        status = "Pass"
    elif average >= 50:
        grade = "D"
        status = "Pass"
    else:
        grade = "F"
        status = "Fail"

    results.append({
        "name": student["name"],
        "average": average,
        "grade": grade,
        "status": status
    })

class_average = sum(result["average"] for result in results) / len(results)
class_average = round(class_average, 2)

highest_mark = max(all_marks)
lowest_mark = min(all_marks)


print("\n" + "=" * 60)
print("                 CLASS GRADE REPORT")
print("=" * 60)

print(f"{'Name':<20}{'Average':<15}{'Grade':<10}{'Status':<10}")
print("-" * 60)

for result in results:
    print(
        f"{result['name']:<20}"
        f"{result['average']:<15.2f}"
        f"{result['grade']:<10}"
        f"{result['status']:<10}"
    )

print("-" * 60)
print(f"Class Average: {class_average:.2f}")
print(f"Highest Mark:  {highest_mark}")
print(f"Lowest Mark:   {lowest_mark}")
print("=" * 60)


while True:
    search_name = input(
        "\nEnter a student name to search "
        "(or type 'exit' to quit): "
    ).strip()

    if search_name.lower() == "exit":
        print("Grade report search ended!")
        break

    found = False

    for result in results:
        if result["name"].lower() == search_name.lower():
            print("\nStudent Found:")
            print(f"Name: {result['name']}")
            print(f"Average: {result['average']:.2f}")
            print(f"Grade: {result['grade']}")
            print(f"Status: {result['status']}")
            found = True
            break

    if not found:
        print("Student not found.")