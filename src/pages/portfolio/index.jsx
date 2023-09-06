import React, { useEffect, useState } from "react";
import axios from "axios";

const index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // mending
    axios
      .get("https://picsum.photos/v2/list?page=9&limit=20")
      .then((response) => setData(response.data));
    // atau
    // fetch("https://picsum.photos/v2/list")
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
  }, []);

  return (
    <section id="portfolio">
      <div className="m-4 flex flex-col gap-4">
        <div className="flex flex-col items-center bg-zinc-800 rounded-lg grow justify-center p-5">
          <h1 className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            nostrum.
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            maiores voluptas officiis vero numquam ea!
          </p>
        </div>
        <div className="flex-wrap flex gap-4 max-sm:flex-row">
          {data.map((d) => (
            <div
              id={d.id}
              className="h-[40vh] grow max-sm:h-auto max-sm:w-full"
            >
              <img
                loading="lazy"
                className="rounded-lg object-cover max-h-full min-w-full align-bottom max-sm:w-full max-sm:max-h-[75vh] max-sm:min-w-0 after:grow-[10] after:content-none"
                src={d.download_url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
