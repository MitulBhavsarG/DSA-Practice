// https://leetcode.com/problems/group-anagrams/

export function groupAnagrams(strs: string[]) {
  const map:{ [key: string]: string[] } = {}
  strs.forEach((str) => {
    const sortedStr = str.split("").sort().join("");
    if (!map[sortedStr]) map[sortedStr] = [str]
    else map[sortedStr].push(str)
  });

  return Object.values(map)
};