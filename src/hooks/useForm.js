import { useReducer, useRef, useCallback } from 'react';

const initialState = {
  formLoading: false,
  formData: {},
  fields: {},
  formMessage: ""
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FORM_LOADING':
      return { ...state, formLoading: action.payload }
    case 'SET_FORM_MESSAGE':
      return { ...state, formMessage: action.payload }
    case 'SET_FORM_DATA':
      if (action.replace) {
        return { ...state, formData: action.payload }
      } else {
        return { ...state, formData: { ...state.formData, ...action.payload } }
      }
    case 'SET_FIELDS': // SET FIELD isValid, error and message
      if (action.replace) {
        return { ...state, fields: action.payload }
      } else {
        return { ...state, fields: { ...state.fields, ...action.payload } }
      }
    case 'CLEAR_FORM_DATA':
      return { ...state, formData: {} }
    case 'CLEAR_FIELDS':
      return { ...state, fields: {} }
    default:
      return {}
  }
}

const useForm = (props) => {
  const allValid = useRef(false)
  const validationFields = useRef()
  const invalidField = useRef()
  const fieldRefs = useRef()
  const [state, dispatch] = useReducer(reducer, initialState)

  const { formLoading, formData, formMessage, fields } = state;
  const { onSubmitCallback } = props;

  const setSubjectForValidationFields = (data, replace = false) => {
    if (replace) {
      validationFields.current = { ...data }
    } else {
      validationFields.current = { ...validationFields.current, ...data }
    }
  }

  const setFormLoading = (value) => {
    dispatch({ type: 'SET_FORM_LOADING', payload: value })
  }

  const setFormMessage = (value) => {
    dispatch({ type: 'SET_FORM_MESSAGE', payload: value })
  }

  const clearFields = () => {
    dispatch({ type: 'CLEAR_FIELDS' })
  }

  const setFormData = (form, replace) => {
    dispatch({ type: 'SET_FORM_DATA', payload: form, replace })
  }

  const dispatchReducerAction = (type, action) => {
    dispatch({ type, payload: action })
  }

  const setFieldRef = (el) => {
    if (el?.name) {
      fieldRefs.current[el.name] = el
    } else if (el.id) {
      fieldRefs.current[el.id] = el
    }
  }

  const setFormDataValue = useCallback((name, value) => {
    dispatch({ type: 'SET_FORM_DATA', payload: { [name]: value } })
  }, [props])

  const handleInputChange = useCallback((e) => {
    let value = e.target.value, name = e.target.name
    if (value == undefined || value == null || value == '') {
      dispatch({
        type: 'SET_FORM_DATA',
        replace: false,
        payload: { [name]: '' }
      })
    } else {
      dispatch({
        type: 'SET_FORM_DATA',
        replace: false,
        payload: { [name]: value }
      })
    }

    dispatch({ type: "SET_FIELDS", payload: { [name]: {  isValid: true, error: ''}}})

  }, [props])

  const handleCheckBoxChange = useCallback((e) => {
    let value = e.target.checked, name = e.target.name
    dispatch({
      type: 'SET_FORM_DATA',
      replace: false,
      payload: { [name]: value }
    })
    dispatch({ type: "SET_FIELDS", payload: { [name]: {  isValid: true, error: ''}}})
  }, [props])

  const handleRadioChange = useCallback((e) => {
    let value = e.target.value, name = e.target.name
    dispatch({
      type: 'SET_FORM_DATA',
      replace: false,
      payload: { [name]: value }
    })
    dispatch({ type: "SET_FIELDS", payload: { [name]: {  isValid: true, error: ''}}})
  }, [props])

  const handleSelectChange = useCallback((e) => {
    let value = e.target.value, name = e.target.name
    dispatch({
      type: 'SET_FORM_DATA',
      replace: false,
      payload: { [name]: value }
    })
    dispatch({ type: "SET_FIELDS", payload: { [name]: {  isValid: true, error: ''}}})
  }, [props])

  const handleDateRangeChange = useCallback((payload)=>{
    dispatch({
      type: 'SET_FORM_DATA',
      replace: false,
      payload: payload
    })
  },[props])


  const handleSubmit = useCallback((e) => {
    if (e) {
      e.preventDefault()
    }

    validateFields()
  }, [props])

  const validateFields = () => {
    allValid.current = true;
    invalidField.current = ''

    let newFields = { ...fields };
    for (const field in validationFields.current){
      const inputValue = formData?.[field]
      if(validationFields.current[field]['validationRules']){
        validationFields.current?.[field]['validationRules'].every((rule) => {
          if (rule.validate(inputValue, formData)) {
            newFields[field] = { isValid: true };
            return true;
          } else {
            if (invalidField.current == '') {
              invalidField.current = field;
            }
            allValid.current = false;
            newFields[field] = { isValid: false, error: rule?.message };
            return false;
          }
        }); 
      }
    }
    dispatch({ type: "SET_FIELDS", payload: newFields})

    if (typeof onSubmitCallback === 'function') {
      onSubmitCallback();
    } else {
      dispatch({ type: 'SET_FORM_LOADING', payload: false });
    } 
  }

  const getAllValid = () => {
    return allValid.current
  }

  const getInvalidField = () => {
    return invalidField.current
  }

  const getFieldRef = (name) => {
    return fieldRefs.current[name]
  }

  const getFormData = (returnEmpty = true) => {
    let data = formData;

    // if (!returnEmpty){
    //   _lodash.forEach(formData, (val: string, key: string) => {
    //     if (val == '' || val == undefined || val == 'undefined') {
    //       delete data?.[key];
    //     }
    //   });
    // }

    return data;
  }

  return {
    setSubjectForValidationFields,
    setFormLoading,
    setFormMessage,
    setFormData,
    setFieldRef,
    setFormDataValue,
    clearFields,

    fields,
    formLoading,
    formMessage,
    formData,
    getAllValid,
    getInvalidField,
    getFieldRef,
    getFormData,

    handleSubmit,
    handleInputChange,
    handleCheckBoxChange,
    handleSelectChange,
    handleRadioChange,
    handleDateRangeChange,
    dispatchReducerAction
  }
}

export default useForm