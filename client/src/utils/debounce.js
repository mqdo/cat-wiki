export default function debounce(func, wait = 500) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
