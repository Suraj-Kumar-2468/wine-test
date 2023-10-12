import {  WineDataPrototype } from "../../data/WineData";


function calculateStatistics(
    data: WineDataPrototype[],
    property: 'Flavanoids' | 'Gamma',
    className: number,
    measure: 'mean' | 'median' | 'mode'
  ): number | string {
    const classData = data.filter((item) => item.Alcohol === className);
    const propertyValues : Number[] = classData.map((item) =>
      property === 'Flavanoids' ? Number(item.Flavanoids) : Number((item.Ash * item.Hue) / item.Magnesium)
    );

    if (propertyValues.length === 0) {
      return 0;
    }
  
    if (measure === 'mean') {
      return (
       Number(propertyValues.reduce((acc, value ) => Number(acc) + Number(value), 0)) / propertyValues.length
      );
    }
  
    const sortedValues = [...propertyValues].sort((a, b) => Number(a) - Number(b));
    const middle = Math.floor(sortedValues.length / 2);
  
    if (measure === 'median') {
      return sortedValues.length % 2 === 0
        ? (Number(sortedValues[middle - 1]) + Number(sortedValues[middle])) / 2
        : Number(sortedValues[middle]);
    }
  
    if (measure === 'mode') {
      const valueCountMap = new Map<number, number>();
      let maxCount = 0;
      let mode = 0;
  
      for (const value of propertyValues) {
        const count = (valueCountMap.get(Number(value)) || 0) + 1;
        valueCountMap.set(Number(value), count);
  
        if (count > maxCount) {
          maxCount = count;
          mode = Number(value);
        }
      }
  
      return mode;
    }
  
    return 0;
  }
  
  export { calculateStatistics };