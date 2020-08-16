export const shuffleArray = (array: any[]) =>
[...array].sort(() => Math.random() - 0.5);
// this is used to randomize the answers of the questions