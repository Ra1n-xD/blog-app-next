"use client";
import useSWR from "swr";

import { usePosts } from "@/store";
import { FormEventHandler, useEffect, useState } from "react";
import { getPostsBySearch } from "@/services/getPosts";

function PostSearch() {
  const { mutate } = useSWR("posts");

  const [search, setSearch] = useState("");
  // const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const posts = await getPostsBySearch(search);

    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit">Поиск</button>
    </form>
  );
}

export { PostSearch };
