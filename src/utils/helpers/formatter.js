type stringNumberType = number | string[]

export const formatNumber = (
  number: stringNumberType, 
  decimal: number = 0, 
  leadingUnit: string = '', 
  trailingUnit: string = ''
  )  => {
  let formatted;
  let num = number;
  if (number) {
    number = number.toString().split(".");
    if (number[1]) {
      if (number[1].length >= decimal) {
        if (number[0].length > 3) {
          number[0] = number[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
        formatted = number[0] + '.' + number[1].slice(0, decimal);
      } else {
        let add = '';
        for (var i = 0; i < decimal - number[1].length; i++) {
          add += '0';
        }
        if (number[0].length > 3) {
          number[0] = number[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }

        formatted = number[0] + '.' + number[1] + add;
      }
    } else {
      let add = '';
      for (var i = 0; i < decimal; i++) {
        add += '0';
      }
      if (number[0].length > 3) {
        number[0] = number[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
      }
      formatted = number[0] + '.' + add;
    }

    // If decimal point is 0, remove appended "."
    if (decimal < 1) {
      formatted = strReplace(formatted, { '.': '' });
    }

    return ((leadingUnit != '') ? leadingUnit + ' ' : '') + formatted + ((trailingUnit != '') ? ' ' + trailingUnit : '');
  } else {
    let add = '';
    for (var i = 0; i < decimal; i++) {
      add += '0';
    }

    let zero = '0.' + add;

    // If decimal point is 0, remove appended "."
    if (decimal < 1) {
      zero = strReplace(zero, { '.': '' });
    }

    return ((leadingUnit != '') ? leadingUnit + ' ' : '') + zero + ((trailingUnit != '') ? ' ' + trailingUnit : '');
  }
}

export const strReplace = (string = '', replace: any) => {
  let str = string;
  if (replace == undefined || replace == null || replace == '' || typeof replace !== 'object') {
    return '';
  }

  Object.entries(replace).forEach(([key, value]: [key: any, value: any]) => {
    str = str.replace(key, value);
  });

  return str;
};
