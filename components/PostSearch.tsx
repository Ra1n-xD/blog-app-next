"use client";
import { getPostsBySearch } from "@/services/getPosts";
import Link from "next/link";
import { FormEventHandler, useEffect, useState } from "react";

type Props = {
  onSearch: (value: any[]) => void;
};

function PostSearch({ onSearch }: Props) {
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const posts = await getPostsBySearch(search);

    onSearch(posts);
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
