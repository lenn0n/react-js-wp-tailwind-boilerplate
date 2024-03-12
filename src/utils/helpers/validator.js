import _ from 'lodash';
/**
 * Checks if given data is empty using lodash's .isEmpty method.
 *
 * @author: jechel
 * @param data Parameter to check
 * @return {boolean} Returns true if not empty
 * @typescript by lennon
 */
export const isEmpty = (data: {} | Array<any>): boolean => {
  return _.isEmpty(data);
};

/**
 * Checks a valid function.
 *
 * @author: jechel
 * @param callback      - Function
 * @return {boolean}    - Returns true if a valid function
 * @typescript by lennon
 */
export const isCallbackValid = (callback: any): boolean => {
  if (callback != undefined && callback != null && callback != '' && typeof callback === 'function') {
    return true;
  }

  return false;
};

/**
 * Creates and returns a validation rule object that
 * is used by useCustomForm composable to validate form inputs
 *
 * @author: jechel
 * @param {string} ruleName         - name of the validation rule
 * @param {string} errorMessage     - message to display
 * @param {function} validateFunc   - validation function
 * @return {object}                 - Validation rule object\
 * @typescript by lennon
 */
export const createCustomValidationRule = (
  ruleName: string,
  errorMessage: string,
  validateFunction: (inputValue: any, formObj: any) => any) => {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunction,
  }
};

export const requiredRule = (inputName: string, errorMessage: string) => {
  return createCustomValidationRule(
    'required',
    (errorMessage ? errorMessage : `${inputName} required.`),
    (inputValue, formObj) => {
      if (inputValue === undefined || inputValue === 'undefined' || inputValue === null || inputValue === '') {
        return false;
      } else {
        return true;
      }
    }
  );
}

export const mustTrue = (inputName: string, errorMessage: string) => {
  return createCustomValidationRule(
    'mustTrue',
    (errorMessage ? errorMessage : `${inputName} required.`),
    (inputValue, formObj) => {
      return inputValue
    }
  );
}

export const amountRule = (inputName: string, errorMessage: string) => {
  return createCustomValidationRule(
    'amount',
    (errorMessage ? errorMessage : `${inputName} should be number format.`),
    (inputValue, formObj) => {
      const regex = /^[\d.]*$/;
      if (regex.test(inputValue)) {
        return true;
      } else {
        return false;
      }
    }
  );
}

export const integerRule = (inputName: string, errorMessage: string) => {
  return createCustomValidationRule(
    'integer',
    (errorMessage ? errorMessage : `${inputName} should be whole numbers only.`),
    (inputValue, formObj) => {
      const regex = /^[0-9]*$/;
      if (regex.test(inputValue)) {
        return true;
      } else {
        return false;
      }
    }
  );
}

export const isAmountSufficient = (errorMessage: string) => {
  return createCustomValidationRule(
    'isAmountSufficient',
    (errorMessage ? errorMessage : `Insufficient balance.`),
    (inputValue, formObj) => {
      if (formObj?.balance != undefined) {
        if (Number(inputValue) > Number(formObj?.balance)) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
  );
}


export const checkLength = (
  inputName: string, 
  { errorMessage, min = 0, max = 0 } : { errorMessage: string, min: number, max: number}) => {
  return createCustomValidationRule(
    'length',
    (errorMessage ? errorMessage : `${inputName} should be ${min}-${max} characters.`),
    (inputValue, formObj) => {
      if (min > 0 && max > 0) {
        if (inputValue.length >= min && inputValue.length <= max) {
          return true;
        } else {
          return false;
        }
      }
    }
  );
}

export const checkUpperCase = (inputName: string, errorMessage: string) => {
  return createCustomValidationRule(
    'uppercase',
    (errorMessage ? errorMessage : `${inputName} should have atleast 1 uppercase character.`),
    (inputValue, formObj) => {
      return inputValue !== inputValue.toLowerCase();
    }
  );
}

export const checkLowerCase = (inputName: string, errorMessage: string) => {
  return createCustomValidationRule(
    'uppercase',
    (errorMessage ? errorMessage : `${inputName} should have atleast 1 lowercase character.`),
    (inputValue, formObj) => {
      return inputValue !== inputValue.toUpperCase();
    }
  );
}

export const hasNumber = (inputName: string, errorMessage: string) => {
  return createCustomValidationRule(
    'uppercase',
    (errorMessage ? errorMessage : `${inputName} should have atleast 1 number.`),
    (inputValue, formObj) => {
      const regex = /[0-9]/;
      if (regex.test(inputValue)) {
        return true;
      } else {
        return false;
      }
    }
  );
}

export const hasSpecialCharacter = (inputName: string, errorMessage: string) => {
  return createCustomValidationRule(
    'uppercase',
    (errorMessage ? errorMessage : `${inputName} should have atleast 1 special character.`),
    (inputValue, formObj) => {
      const regex = /^[A-Za-z0-9]*$/;
      if (!regex.test(inputValue)) {
        return true;
      } else {
        return false;
      }
    }
  );
}

export const noSpace = (inputName: string, errorMessage: string) => {
  return createCustomValidationRule(
    'uppercase',
    (errorMessage ? errorMessage : `${inputName} cannot have space.`),
    (inputValue, formObj) => {
      const regex = /\s/;
      if (!regex.test(inputValue)) {
        return true;
      } else {
        return false;
      }
    }
  );
}

export const stringEqualToFormDataValue = (
  errorMessage: string, 
  { fieldName = '' }: { fieldName: string }) => {
  return createCustomValidationRule(
    'uppercase',
    (errorMessage ? errorMessage : `Strings do not match.`),
    (inputValue, formObj) => {
      const fieldValue = formObj?.[fieldName] ?? '';
      if (inputValue == fieldValue) {
        return true;
      } else {
        return false;
      }
    }
  );
}