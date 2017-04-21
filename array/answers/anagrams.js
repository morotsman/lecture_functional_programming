const anagrams = words => objectValues(groupBy(words, word => sortString(word.toLowerCase()))).filter(v => v.length > 1);
    

