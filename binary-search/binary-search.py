def binarySearch(list, value):
  low = 0
  high = len(list) - 1
  
  while low <= high:
    mid = (low + high) / 2
    guess = list[mid]
    if guess == value:
      return mid
    if guess > value:
      high = mid - 1
    else:
      low = mid + 1
  return None

my_list = [0, 1, 2, 4, 6, 8, 9, 11]

print binarySearch(my_list, 4)
print binarySearch(my_list, 5)
