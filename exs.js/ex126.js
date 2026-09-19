for (let i = 1; i <= 20; i++) {
  if (i % 2) {
    continue;
  }

  if (i === 14) {
    break;
  }

  console.log(i);
}
