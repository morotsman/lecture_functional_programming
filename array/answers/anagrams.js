const anagrams = words => objectValues(groupBy(words, v => sortString(v))).filter(v => v.length > 1);
    

