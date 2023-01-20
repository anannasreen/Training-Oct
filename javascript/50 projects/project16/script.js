const smallCups = document.querySelectorAll('.cup-small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
  //   console.log(idx);
  cup.addEventListener('click', () => highlightCups(idx));
});
function highlightCups(idx) {
  //   console.log(idx);
  smallCups.forEach((cup, idx2) => {
    if (
      smallCups[idx].classList.contains('full') &&
      !smallCups[idx].nextElementSibling.classList.contains('full')
    ) {
      idx--;
    }
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  updateBigCup();
}
function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;
  //   console.log(fullCups);
  //   console.log(totalCups);

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
  }
}
