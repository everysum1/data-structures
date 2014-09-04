def quicksort(array, bounds=None):
    if bounds == None:
        bounds = [0, len(array)]
    low = bounds[0]
    high = bounds[1]
    if high - low == 1:
        return array
    pivot = array[0+low]
    el = array[1+low]
    for i in range(low+1,high):
        if el > pivot:
            nl = el
            el = array[len(array) - high - 1]
            array[len(array)-high - 1] = nl
            low += 1
        elif(el < pivot):
            nl = el
            el = array[0 + low]
            array[0+low] = nl
            high -= 1
    results = quicksort(array, [0,high]) + [pivot] + quicksort([low, len(array)])
    return results

arr = [4,6,3,7,5]

print quicksort(arr)
