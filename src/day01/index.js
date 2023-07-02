import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  
  const sumOfCallories = (elf) => 
    elf
      .split('\n')
      .map(Number)
      .reduce((sum, num) => sum + num, 0);
  
  const numberGroups = input.split('\n\n');
  let groupSums = numberGroups.map(sumOfCallories);
  
  
  let maxValue = Math.max(...groupSums);

  return maxValue;
 
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  const sumOfCallories = (elf) => 
  elf
    .split('\n')
    .map(Number)
    .reduce((sum, num) => sum + num, 0);

const numberGroups = input.split('\n\n');
let groupSums = numberGroups.map(sumOfCallories);
let sortGroupSums = groupSums.sort((a, b) => b - a);
let topThree = sortGroupSums.slice(0, 3).reduce((sum, num) => sum + num, 0);
  
  return topThree;
  
};

run({
  part1: {
    tests: [
       {
         input: ``,
         expected: "",
       },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
