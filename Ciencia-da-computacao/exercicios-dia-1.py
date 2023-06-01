# Exercício 1:
# Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.

numbers = [5, 1, 9, 3, 19, 70, 8, 100, 35, 27]


def get_smallest_number(numbers):
    smaller_number = numbers[0]
    for number1 in numbers:
        if smaller_number >= number1:
            for number2 in numbers:
                if number1 <= number2:
                    smaller_number = number1
                else:
                    smaller_number = number2

    return smaller_number


print(get_smallest_number(numbers))
