import React, { useEffect, useState } from "react";
import "../styles/App.css";
import PostList from "../components/PostList";
import MyPostForm from "../components/MyPostForm";
import Button from "react-bootstrap/Button";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/modal/MyModal";
import { usePosts } from "../hooks/usePost";
import PostService from "../API/postService";
import MyLoader from "../components/UI/Loader/MyLoader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import MyPagination from "../components/pagination/MyPagination";

function Posts({ filter }) {
  const [posts, setPosts] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const changePage = (page) => {
    if (page < 1) {
      page = 1;
    }
    if (page > totalPages) {
      page = totalPages;
    }
    setPage(page);
    fetchPosts(limit, page);
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const [modalVIsible, setModalVisible] = useState(false);

  return (
    <div className="App">
      {isPostsLoading ? (
        ""
      ) : (
        <div className="">
          <Button
            className="mt-4 w-25 "
            variant="primary"
            onClick={() => setModalVisible(true)}
          >
            Создать пост
          </Button>
          <MyModal visible={modalVIsible} setVisible={setModalVisible}>
            <MyPostForm create={createPost} />
          </MyModal>

          <hr />
        </div>
      )}

      {postError ? (
        <h3 className="error">Произошла ошибка: {postError}</h3>
      ) : isPostsLoading ? (
        <MyLoader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Список постов"}
        />
      )}
      {isPostsLoading ? (
        ""
      ) : (
        <MyPagination
          totalPages={totalPages}
          page={page}
          changePage={changePage}
        />
      )}
    </div>
  );
}

export default Posts;
