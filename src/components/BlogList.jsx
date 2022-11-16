import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, {useState} from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];
const blogsPosts = blogs.posts

function BlogList() {


  const [currentPageSize, changePageSize] = useState(15)
  const [currentPageNumber, changePageNumber] = useState(1)
  const [currentPaginationData, changePaginationData] = useState(blogsPosts.slice(0, 15));

  const updateRowsPerPage = (newRowsPerPage) => {
    changePageSize(parseInt(newRowsPerPage));
    changePageNumber(1);
    changePaginationData(blogs.posts.slice(0,  newRowsPerPage));
    
  };

  const updatePage = (newCurrentPage) => {
    let firstIndices;
    let secondIndices;
    changePageNumber(newCurrentPage);
    if (newCurrentPage === 1 ){
      firstIndices = 0;
      secondIndices = currentPageSize;
      changePaginationData(blogs.posts.slice(firstIndices, secondIndices));
    } else {
      firstIndices = (newCurrentPage -1)* currentPageSize;
      secondIndices = firstIndices + currentPageSize;
      changePaginationData(blogs.posts.slice(firstIndices, secondIndices));
      
    }
    ;
  };
  return (
    <div>
      <Pagination
        currentPage={currentPageNumber}
        totalCount={blogs.posts.length}
        pageSize={currentPageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not modify the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
