import React, { useEffect, useState } from 'react';
import { useIcons } from '../../../hooks/useIcons';
import './Pagination.css';

const Pagination = ({ data, setPaginatedData, activeState }: any) => {
  console.log(data, 'paginationData');
  const { paginationLeftIcon, paginationRightIcon } = useIcons();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPage, setItemsPage] = useState(2);
  const [arrNumber, setArrNumber] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState([]);
  const [dataArray, setDataArray] = useState(data);

  const totalPages = Math.ceil(dataArray.length / itemsPage);

  //prev button
  const prev = () => {
    const lastItem = (currentPage - 1) * 2;
    const items: any = dataArray.slice(lastItem - 2, lastItem);
    // setItemsPerPage(items);
    if (currentPage >= 2) {
      setCurrentPage(currentPage - 1);
      setPaginatedData(items);
    }
    // console.log(items, currentPage);
  };
  //next button
  const next = () => {
    const lastItem = (currentPage + 1) * 2;
    const items: any = dataArray.slice(lastItem - 2, lastItem);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setPaginatedData(items);
    }
    // console.log(items, currentPage);
  };

  const paginate = (page: any) => {
    let lastItem = page * 2;
    const items: any = dataArray.slice(lastItem - 2, lastItem);
    setPaginatedData(items);
    setCurrentPage(page);
  };

  const arr = (len: any) => {
    let store = [];
    for (let i = 1; i <= len; i++) {
      store.push(i);
    }
    return store;
  };

  useEffect(() => {
    let value: any = arr(totalPages);
    setArrNumber(value);
    const values: any = dataArray.slice(0, itemsPage);
    setPaginatedData(values);
    console.log('run');
  }, []);

  // Update pagination when data or activeState changes
  useEffect(() => {
    setCurrentPage(1); // Reset to first page when data or activeState changes
    setDataArray(data); // Update data array
  }, [data, activeState]);

  const pageIndex = currentPage - 1;
  // console.log(currentPage);
  return (
    <>
      <div className='pagination__div'>
        <div onClick={() => prev()}>
          <img
            src={paginationLeftIcon}
            alt='icon'
            className='pagination__img'
          />
        </div>
        <div className='pagination__numbers'>
          {arrNumber.map((numberArr, index) => (
            <div
              key={index}
              onClick={() => paginate(numberArr)}
              className={`${
                pageIndex === index
                  ? 'pagination__active'
                  : 'pagination__notActive'
              }`}
            >
              {numberArr}
            </div>
          ))}
        </div>
        <div onClick={() => next()}>
          <img
            src={paginationRightIcon}
            alt='icon'
            className='pagination__img'
          />
        </div>

        <div>
        checking my data
        </div>
      </div>
    </>
  );
};

export default Pagination;



chatgpt

import React, { useEffect, useState } from 'react';
import { useIcons } from '../../../hooks/useIcons';
import './Pagination.css';

const Pagination = ({ data, setPaginatedData, activeState }: any) => {
  const { paginationLeftIcon, paginationRightIcon } = useIcons();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2); // Assuming 2 items per page
  const [dataArray, setDataArray] = useState(data);

  const totalPages = Math.ceil(dataArray.length / itemsPerPage);

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = dataArray.slice(startIndex, endIndex);
    setPaginatedData(paginatedData);
  }, [currentPage, dataArray]);

  // Update pagination when data or activeState changes
  useEffect(() => {
    setCurrentPage(1); // Reset to first page when data or activeState changes
    setDataArray(data); // Update data array
  }, [data, activeState]);

  return (
    <>
      <div className='pagination__div'>
        <div onClick={prev}>
          <img
            src={paginationLeftIcon}
            alt='icon'
            className='pagination__img'
          />
        </div>
        <div className='pagination__numbers'>
          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'pagination__active' : ''}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div onClick={next}>
          <img
            src={paginationRightIcon}
            alt='icon'
            className='pagination__img'
          />
        </div>
      </div>
    </>
  );
};

export default Pagination;
