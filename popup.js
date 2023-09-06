document.addEventListener('DOMContentLoaded', function () {
  const topTextArea1 = document.getElementById('topTextArea1');
  const topTextArea2 = document.getElementById('topTextArea2');
  const bottomTextArea = document.getElementById('bottomTextArea');
  const exactCheckbox = document.getElementById('exactCheckbox');
  const phraseCheckbox = document.getElementById('phraseCheckbox');
  const broadCheckbox = document.getElementById('broadCheckbox');
  const lowercaseCheckbox = document.getElementById('lowercaseCheckbox');

  const operatorPlus = document.getElementsByClassName('operator')[0];
  const operatorEqual = document.getElementsByClassName('operator')[1];

  function updateBottomTextArea() {
    const text1 = topTextArea1.value.trim();
    const text2 = topTextArea2.value.trim();
    let result = '';

    if (text1 && text2) {
      result = text1 + ' ' + text2;
    }

    bottomTextArea.value = result;
  }

  function applyOptions() {
    let result = bottomTextArea.value;

    if (exactCheckbox.checked) {
      result = '[' + result + ']';
    } else if (phraseCheckbox.checked) {
      result = '"' + result + '"';
    }

    if (lowercaseCheckbox.checked) {
      result = result.toLowerCase();
    }

    bottomTextArea.value = result;
  }

  topTextArea1.addEventListener('input', updateBottomTextArea);
  topTextArea2.addEventListener('input', updateBottomTextArea);

  operatorPlus.addEventListener('click', updateBottomTextArea);
  operatorEqual.addEventListener('click', applyOptions);

  exactCheckbox.addEventListener('change', applyOptions);
  phraseCheckbox.addEventListener('change', applyOptions);
  lowercaseCheckbox.addEventListener('change', applyOptions);
});
