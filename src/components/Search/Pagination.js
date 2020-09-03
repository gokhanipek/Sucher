import React from 'react';
import './Search.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
        <ul className="pagination">
            {pageNumbers.map(pageNumber => (
                <li key={pageNumber} className="page-item">
                    <span
                        onClick={() => paginate(pageNumber)}
                        className="page-link"
                    >
                        {pageNumber}
                    </span>
                </li>
            ))}
      </ul>
    );
  };
  export default Pagination;
