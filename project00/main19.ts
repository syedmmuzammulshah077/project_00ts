/*19. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
else you’d like. Write a program that creates a list containing these items.
*/
// Array containing famous rivers
const rivers: string[] = ["Nile", "Amazon", "Yangtze", "Mississippi", "Indus", "Ganges", "Danube", "Mekong", "Congo", "Volga"];

// Print the list of rivers
console.log("List of famous rivers:");
rivers.forEach((river, index) => {
    console.log(`${index + 1}. ${river}`);
});
