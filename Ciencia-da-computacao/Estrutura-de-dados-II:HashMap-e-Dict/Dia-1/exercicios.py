# Exercício 5: Consulte a forma de se criar um dicionário chamado de
#  dict comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro.

doblenumber = {number: number * 2 for number in range(3, 21)}


print(doblenumber)

# Exercício 6: Dada uma string, construa um dicionário com a
# contagem de cada caractere da palavra.
#  Utilize o pseudocódigo e o exemplo abaixo para se nortear.

# Para cada char na string:
# 	- Se o char não estiver no dicionário, inclua com o valor 1;

# 	- Se estiver, incremente o valor.


# Exemplo:

str = "bbbbaaaacccaaaaaaddddddddccccccc"
# saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}

str = "Douglass"
# saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# Explicação: Nenhuma letra repete em coxinha :)

totalChar = {}

for lether in str:
    if lether not in totalChar:
        totalChar[lether] = 1
    else:
        totalChar[lether] += 1

print(totalChar)

# Exercício 7: Utilize o dicionário criado no exercício 5. Para as chaves ímpares,
# não queremos mais mapear para o seu dobro, mas sim para o seu triplo.
# Consulte o método keys() e atualize o seu dicionário para a nova regra.
