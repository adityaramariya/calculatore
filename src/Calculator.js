import './calculator.css';
import Button from './components/Button/Button';

import { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState(0);

  function getButtonValue (e) {
    setResult(e.target.value);
  }

  return (
    <div className="calculator">
      <div className="calculator__result">{result}</div>
      <div className="calculator__number">
        <Button value="1" getButtonValue={getButtonValue} />
        <Button value="2" />
        <Button value="3" />
        <Button value="/" />

        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="x" />

        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button value="-" />

        <Button value="." />
        <Button value="0" />
        <Button value="+" getButtonValue = {getButtonValue}  />
        <Button value="=" />

      </div>
    </div>
  );
}

export default Calculator;
