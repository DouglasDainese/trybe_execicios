# Exercício 1:
# Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.

numbers = [5, 1, 9, 3, -19, 70, 8, 100, 35, 27]


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


print(min(numbers))
print(get_smallest_number(numbers))

# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1,
#  imprima na tela um triângulo retângulo com n asteriscos de base.
# Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:


def printAst(num):
    colunaPiramede = list(range(num))
    # print(colunaPiramede)
    for linha in colunaPiramede:
        arrow = list(range(linha + 1))
        piramede = ""
        for coluna in arrow:
            piramede += "o"
        print(piramede)


printAst(10)
