export default function cleanSet(Set, StartString) {
  if (!Set || !StartString || !(Set instanceof Set) || typeof StartString !== 'string') {
    return '';
  }
  return Array.from(Set)
    .filter((ele) => ele && ele.startsWith(StartString))
    .map((ele) => ele.replace(StartString, ''))
    .join('-');
}
