import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    // without spread operator we will get individual values
    //  of the array as arguments to the max function

  return (
    <div className="chart">
          {/* we are not going to restrict the no. of months by hardcoding them  */}
          {props.dataPoint.map(dataPoint =>
              <ChartBar
                  key={dataPoint.label}
                  value={dataPoint.value}
                  maxValue={totalMaximum}
                  label={dataPoint.label} />)}
    </div>
  );
}

export default Chart