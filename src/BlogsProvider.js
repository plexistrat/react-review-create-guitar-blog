import React from "react";
import useFetch from "./useFetch";

const BlogsContext = React.createContext();

export const BlogsProvider = ({ children }) => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <BlogsContext.Provider value={blogs}>
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
      {blogs && children}
    </BlogsContext.Provider>
  );
};

export const useBlogs = () => React.useContext(BlogsContext);
