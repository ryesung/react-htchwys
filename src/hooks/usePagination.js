export const DOTS = "...";

function usePagination({currentPage, totalCount, pageSize}) {
  
  const firstPage = 1;
  const lastPage = Math.ceil(totalCount / pageSize);


if (currentPage < 3){
        if (lastPage > 3){
          return [firstPage, 2, 3, DOTS, lastPage];

        } else if (lastPage === 3){
          return [firstPage, 2, lastPage];

        } else if (lastPage === 2){
          return [firstPage, lastPage];
        }
        else {
          return [firstPage];
        }

        }  else if (lastPage - currentPage   > 2) {
    return [firstPage, DOTS, currentPage-1, currentPage, currentPage + 1, DOTS, lastPage]

  } else {
    return [firstPage, DOTS, lastPage-2, lastPage-1, lastPage]
  }
}

export default usePagination;
