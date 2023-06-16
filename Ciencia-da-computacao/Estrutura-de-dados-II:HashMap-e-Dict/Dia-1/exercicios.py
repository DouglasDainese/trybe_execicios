# Exercício 5: Consulte a forma de se criar um dicionário chamado de
#  dict comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro.

doblenumber = {number: number * 2 for number in range(3, 21)}


print(doblenumber)
