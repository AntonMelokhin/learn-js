//Execise 1
function tenMostFrequentWords(text, limit) {
  const words = text
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(Boolean);

  const frequency = {};

  for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
  }

  const result = Object.entries(frequency)
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count);

  return limit ? result.slice(0, limit) : result;
}
const paragraph = `I love teaching. If you do not love teaching what else can you love. 
I love Python if you do not love something which can give you all the capabilities 
to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph));
console.log(tenMostFrequentWords(paragraph, 10));