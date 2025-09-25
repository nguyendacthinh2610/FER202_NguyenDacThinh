export function Exercise8() {
//     •	Với ages (mảng số), tính:
// o	total, min, max
// o	buckets: { teen: count(13–19), adult: count(>=20) }
// •	In dạng:
// o	Total: X, Min: Y, Max: Z
// o	Buckets: { teen: a, adult: b }
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
    const total = ages.reduce((acc, curr) => acc + curr, 0);
    const min = Math.min(...ages);
    const max = Math.max(...ages);
    const buckets = ages.reduce((acc, age) => {
        if (age >= 13 && age <= 19) {
            acc.teen += 1;
        } else if (age >= 20) {
            acc.adult += 1;
        }
        return acc;
    }, { teen: 0, adult: 0 });
    console.log(`Total: ${total}, Min: ${min}, Max: ${max}`);
    console.log(`Buckets: { teen: ${buckets.teen}, adult: ${buckets.adult} }`);

  return (
    <div>
        <h2>Exercise8</h2>
        <p>Total: {total}, Min: {min}, Max: {max}</p>
        <p>Buckets: {'{'} teen: {buckets.teen}, adult: {buckets.adult} {'}'}</p>
    </div>
  );
}