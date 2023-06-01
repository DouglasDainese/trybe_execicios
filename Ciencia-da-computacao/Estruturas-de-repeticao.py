# Exercício 1

# Um sistema de avaliações registra valores de 0 a 10 para cada avaliação.
# Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100.
# Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10].
# Escreva um código capaz de gerar as avaliações após a mudança.
# Neste caso o resultado deveria ser [60, 80, 50, 90, 100].

ratings = [3, 6, 8, 5, 9, 10, 7]

new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

print(new_ratings)

# Exercício 2
# Percorra a lista do exercício 1 e imprima “Múltiplo de 3”
# se o elemento for divisível por 3.

for ratingImpar in new_ratings:
    if ratingImpar % 3 == 0:
        print(f"{ratingImpar} é multiplo de três")
