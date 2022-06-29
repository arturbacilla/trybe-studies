soma = 0

received_nums = input("Digite números separados por espaços: ")

nums = received_nums.split(" ")

for num in nums:
    if num.isdigit():
        soma += int(num)
    else:
        print(f'Erro ao somar valores, "{num}" é um valor inválido')
        continue
print(f"Soma dos números válidos: {soma}")
