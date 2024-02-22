void main() {
  List<int> array = [8, 2, 5, 3, 9, 4, 7, 6, 1];

  quickSort(array, 0, array.length - 1);

  for (int i = 0; i < array.length; i++) {
    print(array[i]);
  }
}

void quickSort(List<int> array, int start, int end) {
  if (end <= start) return; //base case
  int pivot = partition(array, start, end);
  quickSort(array, start, pivot - 1);
  quickSort(array, pivot + 1, end);
}

int partition(List<int> array, int start, int end) {
  int pivot = array[end];
  int i = start - 1;

  for (int j = start; j <= end; j++) {
    if (array[j] < pivot) {
      i++;
      int temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  i++;
  int temp = array[i];
  array[i] = array[end];
  array[end] = temp;
  return i;
}
