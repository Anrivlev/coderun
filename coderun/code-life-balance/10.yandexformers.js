/**
 * @param {number} N - целое число, количество сотрудников готовых к объединению
 * @param {number[]} staff - массив длины N с грейдами доступных сотрудников
 * @param {number} K - целое число, количество доступных клавиатур
 * @returns {number}
 */

const MAX_GRADE = 25;
module.exports = function (N, staff, K) {
  if (K === 0) return 0;
  if (K >= N) return staff.reduce((prev, curr) => prev + curr, 0);

  // Ваш код
  const staffCountPerGrade = new Array(MAX_GRADE + 1).fill(0);
  staff.forEach((grade) => (staffCountPerGrade[grade] += 1));

  let chosenCount = 0;
  let totalGrade = 0;
  let i = MAX_GRADE;
  while (chosenCount < K) {
    const staffCount = staffCountPerGrade[i];
    if (staffCount !== 0) {
      const staffCountBeforeKIsHit = Math.min(staffCount, K - chosenCount);
      chosenCount += staffCountBeforeKIsHit;
      totalGrade += staffCountBeforeKIsHit * i;
    }

    i--;
  }

  return totalGrade; // totalGrade - максимальный уровень Яндексформера
};

const N = 8;
const staff = [5, 13, 8, 4, 4, 15, 1, 9];
const K = 8;
console.log(module.exports(N, staff, K));
