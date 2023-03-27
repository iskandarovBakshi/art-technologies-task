import Card from "@/components/Card";
import { IExhibitionResponse } from "@/interfaces";
import { getExhibitions } from "@/service/exhibition";
import React, { useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

type HomeProps = {
  data: IExhibitionResponse;
};

function Home({ data }: HomeProps) {
  const [exhibitionsData, setExhibitionsData] = useState(data);
  const [hasMore, setHasMore] = useState(true);
  const isLoading = useRef(false);
  function fetchData() {
    if (isLoading.current) {
      return;
    }
    if (!exhibitionsData.pagination.next_url) {
      setHasMore(false);
      return;
    }
    const url = new URL(exhibitionsData.pagination.next_url);
    isLoading.current = true;
    getExhibitions(url.search).then(({ exhibitions }) => {
      setExhibitionsData({
        pagination: {
          ...exhibitions.pagination,
        },
        data: [...exhibitionsData.data, ...exhibitions.data],
      });
      isLoading.current = false;
    });
  }
  return (
    <>
      <InfiniteScroll
        loadMore={fetchData}
        hasMore={hasMore}
        loader={
          <h4 key="loading" className="col-span-full text-center">
            Loading more exhibitions...
          </h4>
        }
        className="grid grid-cols-1 gap-6 justify-center md:grid-cols-2 lg:grid-cols-4"
      >
        {exhibitionsData.data.map((d) => (
          <div key={d.id} className="col-span-1">
            <Card exhibition={d} />
          </div>
        ))}
      </InfiniteScroll>
      {!hasMore && (
        <div className="flex items-center justify-center w-full h-[200px]">
          <h4 className="text-2xl">
            No more Exhibitions you&apos;ve seen all 🎉
          </h4>
        </div>
      )}
    </>
  );
}

export default Home;
