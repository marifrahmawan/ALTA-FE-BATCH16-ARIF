function palindrome(word: string): boolean {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[right] === word[left]) {
      return true;
    }

    left++;
    right--;
  }
  return false;
}

console.log(palindrome('civic')); // true
console.log(palindrome('katak')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('kupu-kupu')); // false
console.log(palindrome('lion')); // false

export default palindrome;
