import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];
const blogsPosts = blogs.posts;

function BlogList() {
  const [PageSize, setPageSize] = useState(15);
  const [PageNumber, setPageNumber] = useState(1);
  const [PaginationData, setPaginationData] = useState(blogsPosts.slice(0, 15));

  const updateRowsPerPage = (newRowsPerPage) => {
    setPageSize(parseInt(newRowsPerPage));
    setPageNumber(1);
    setPaginationData(blogs.posts.slice(0, newRowsPerPage));
  };

  const updatePage = (newCurrentPage) => {
    let firstIndices;
    let secondIndices;
    setPageNumber(newCurrentPage);
    if (newCurrentPage === 1) {
      firstIndices = 0;
      secondIndices = PageSize;
      setPaginationData(blogs.posts.slice(firstIndices, secondIndices));
    } else {
      firstIndices = (newCurrentPage - 1) * PageSize;
      secondIndices = firstIndices + PageSize;
      setPaginationData(blogs.posts.slice(firstIndices, secondIndices));
    }
  };
  return (
    <div>
      <Pagination
        currentPage={PageNumber}
        totalCount={blogs.posts.length}
        pageSize={PageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not modify the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {PaginationData.map((blog) => (
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
