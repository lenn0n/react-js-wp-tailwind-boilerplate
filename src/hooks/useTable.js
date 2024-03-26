import { useEffect, useReducer, useCallback } from "react";
import { useLocation, useSearchParams } from 'react-router-dom';

const initialState = {
  items: [],
  maxPage: 1,
  payload: {
    page: 1,
    list_size: 10,
  },
}

const itemsPerPageParamKey = "item"

const tableReducer = (state, action) => {
  switch (action.type) {
    case 'setTableItems':
      return {
        ...state,
        items: action.items,
        maxPage: action.maxPage || 1
      };

    case 'setTablePayload':
      return {
        ...state,
        payload: {
          ...state.payload,
          ...action.payload,
        }
      }

    default:
      throw new Error();
  }
}


const useTableReducer = ({ retrieveReportHandler, displayItemPerPage }) => {
  const [tableState, dispatchTableActions] = useReducer(tableReducer, initialState)
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    maxPage,
    items,
    payload
  } = tableState

  const setTableItems = ({ items, maxPage }) => {
    dispatchTableActions({ type: 'setTableItems', items, maxPage })
  }

  const setTablePayload = (payload) => {
    dispatchTableActions({ type: 'setTablePayload', payload })
    setTableSearchParams(payload)
  }

  const setCurrentPage = (page) => {
    dispatchTableActions({ type: 'setTablePayload', payload: { page } })
    setTableSearchParams({ page })
  }

  const setDisplayItemPerPage = (item) => {
    dispatchTableActions({ type: 'setTablePayload', payload: { item } })
    setTableSearchParams({ item })
  }

  const setTableSearchParams = (newPayload) => {
    setSearchParams({ ...payload, ...newPayload })
  }

  useEffect(() => {
    const currentParams = getSearchParamsValue()
    if (Object?.keys(searchParams)?.length > 0){
      setSearchParams(currentParams)
    }
  }, [payload])

  useEffect(() => {
    const currentParams = getSearchParamsValue()
    dispatchTableActions({ type: 'setTablePayload', payload: currentParams })
    handleRetrieveReport(currentParams);
    
  }, [searchParams])

  const getSearchParamsValue = () => {
    const currentParams = {};
    for (const [key, value] of searchParams.entries()) {
      if (key.includes('[]')) {
        if (currentParams?.[key] == undefined) {
          currentParams[key] = [];
        }

        currentParams[key] = [...currentParams[key], value];
      } else {
        currentParams[key] = value;
      }
    }
    return currentParams;
  }


  const handleRetrieveReport = (params) => {
    if (typeof retrieveReportHandler === 'function') {
      if (payload?.item == 0) {
        retrieveReportHandler({ ...params, item: displayItemPerPage })
      } else {
        retrieveReportHandler(params)
      }
    }
  }

  const handleRefreshReport = () => {
    if (typeof retrieveReportHandler === 'function') {
      if (payload?.item == 0) {
        retrieveReportHandler({ ...payload, item: displayItemPerPage })
      } else {
        retrieveReportHandler(payload)
      }
    }
  }

  return {
    maxPage,
    items,
    payload,
    setTableItems,
    setTablePayload,
    setCurrentPage,
    setDisplayItemPerPage,
    handleRetrieveReport,
    handleRefreshReport
  }
}

export default useTableReducer;