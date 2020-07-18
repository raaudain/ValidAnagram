var isAnagram = function(s, t) {
  // Anagrams contain the same number of characters and have the same length
  s = s.toLowerCase().split("").sort().join("");
  t = t.toLowerCase().split("").sort().join("");
    
  return s === t;
};