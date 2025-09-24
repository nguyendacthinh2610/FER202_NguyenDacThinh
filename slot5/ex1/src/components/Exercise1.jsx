function Exercise1() {
    //tinh ham double bang const
    const double = (x) => x * 2;
    //ham kiem tra so chan
    const isEven = (x) => x % 2 === 0;
  return (
    <div>
        <h2>Exercise1</h2>
        <p>Double of 4 is: {double(4)}</p>
        <p>Is 4 even? {isEven(4) ? 'Yes' : 'No'}</p>
        <p>Is 5 even? {isEven(5) ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default Exercise1;