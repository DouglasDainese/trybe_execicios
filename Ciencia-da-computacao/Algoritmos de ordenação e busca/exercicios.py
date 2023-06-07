from random import shuffle
from time import perf_counter


class Cronometro:
    def __init__(self, name="Seu algoritmo"):
        self.name = name

    def __enter__(self):
        self.start = perf_counter()

    def __exit__(self, *exc):
        elapsed = perf_counter() - self.start
        print(f"{self.name} demorou {elapsed} segundos")


# Exercício 3 Execute os algoritmos de ordenação por seleção e inserção,
#  para as entradas de dados ordenadas, inversamente ordenadas e aleatórias.
# Em seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000, 1.000.000.


def merge_sort(numbers, start=0, end=None):
    if end is None:
        end = len(numbers)
    if (end - start) > 1:  # se não reduzi o suficiente, continua
        mid = (start + end) // 2  # encontrando o meio
        merge_sort(numbers, start, mid)  # dividindo as listas
        merge_sort(numbers, mid, end)
        merge(numbers, start, mid, end)  # unindo as listas


# função auxiliar que realiza a mistura dos dois arrays


def merge(numbers, start, mid, end):
    left = numbers[start:mid]  # indexando a lista da esquerda
    right = numbers[mid:end]  # indexando a lista da direita

    left_index, right_index = 0, 0  # as duas listas começarão do início

    for general_index in range(
        start, end
    ):  # percorrer sobre a lista inteira como se fosse uma
        if left_index >= len(
            left
        ):  # se os elementos da esquerda acabaram, preenche o restante com a lista da direita
            numbers[general_index] = right[right_index]
            right_index = right_index + 1
        elif right_index >= len(
            right
        ):  # se os elementos da direita acabaram, preenche o restante com a lista da esquerda
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        elif (
            left[left_index] < right[right_index]
        ):  # se o elemento do topo da esquerda for menor que o da direita, ele será o escolhido
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        else:
            numbers[general_index] = right[
                right_index
            ]  # caso o da direita seja menor, ele será o escolhido
            right_index = right_index + 1


def selection_sort(array):
    for i in range(len(array)):
        minimum = i

        for j in range(i + 1, len(array)):
            if array[j] < array[minimum]:
                minimum = j

        array[minimum], array[i] = array[i], array[minimum]

    return array


def insertion_sort(array):
    for i in range(len(array)):
        current_value = array[i]
        current_position = i

        while (
            current_position > 0
            and array[current_position - 1] > current_value
        ):
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1

        array[current_position] = current_value

    return array


for algorithm in (merge_sort, selection_sort):
    algorithm_name = algorithm.__name__

    for input in (10_000, 100_000, 500_000):
        sorted_numbers = list(range(input))
        reversed_sorted_numbers = list(reversed(sorted_numbers))
        random_numbers = sorted_numbers[:]  # copia dos ordenados
        shuffle(random_numbers)  # embaralha eles

        with Cronometro(
            f"{algorithm_name} com entrada" + f"ordenada de {input} números"
        ):
            algorithm(sorted_numbers)

        with Cronometro(
            f"{algorithm_name} com entrada"
            + f"inversamente ordenada de {input} números"
        ):
            algorithm(reversed_sorted_numbers)

        with Cronometro(
            f"{algorithm_name} com entrada" + f"aleatória de {input} números"
        ):
            algorithm(random_numbers)

        print("_" * 50)
