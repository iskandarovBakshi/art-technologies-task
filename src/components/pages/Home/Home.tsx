import Card from "@/components/Card";
import { IExhibitionResponse } from "@/interfaces";
import { getExhibitions } from "@/lib/queries";
import React, { useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

type HomeProps = {
  data: IExhibitionResponse;
};

function Home({ data }: HomeProps) {
  const [exhibitionsData, setExhibitionsData] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const secondPageLoaded = useRef(false);
  function fetchData() {
    const url = new URL(exhibitionsData.pagination.next_url);
    // Skip first render!
    if (
      exhibitionsData.pagination.current_page === 1 &&
      secondPageLoaded.current
    ) {
      return;
    } else {
      secondPageLoaded.current = true;
    }
    getExhibitions(url.search).then((moreExhibitions) => {
      setExhibitionsData({
        pagination: {
          ...moreExhibitions.pagination,
        },
        data: [...exhibitionsData.data, ...moreExhibitions.data],
      });
    });
  }
  return (
    <InfiniteScroll
      loadMore={fetchData}
      hasMore={true}
      loader={
        <h4 key="loading" className="col-span-full text-center">
          Loading...
        </h4>
      }
      className="grid grid-cols-1 gap-1 justify-center lg:gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      {exhibitionsData.data.map((d) => (
        <div key={d.id} className="col-span-1">
          <Card exhibition={d} />
        </div>
      ))}
    </InfiniteScroll>
  );
}

export default Home;
