const form = document.querySelector(".quiz__form");
const result = document.querySelector(".result");
const correctAnswers = ["B", "B", "B", "B"];

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();

  const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  const sum = answers.reduce((sum, ans, index) => {
    if (ans === correctAnswers[index]) sum += 25;
    return sum;
  }, 0);
  //   console.log(sum);
  scrollTo(0, 0);
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === sum) clearInterval(timer);
    else output++;
  }, 10);
}
