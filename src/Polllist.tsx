import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import PolllistGrid from "./PolllistGrid";

import axios from "axios";
interface Item {
  author: string;
  comment_text: any;
  created_at: any;
  created_at_i: any;
  num_comments: number;
  objectID: string;
  parent_id: any;
  points: 1;
  story_id: any;
  story_text: any;
  story_title: any;
  story_url: any;
  title: string;
  url: string;
}

const PollList: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    fetchPollList(); // Initial call to fetch data

    const interval = setInterval(() => {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }, 10000); // 10 seconds in milliseconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetchPollList(); // Call the API every 10 seconds
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const fetchPollList = async () => {
    try {
      console.log("page", pageNumber);
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNumber}`
      );
      console.log(response);
      setData((prevData) => [...prevData, ...response.data.hits]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Render your component with the fetched data

  return (
    <div>
      {/* Display the data */}
      {data && (
        <div>
          <TextField
            sx={{ marginBottom: "10px" }}
            id="outlined-basic"
            label="Search By Author or Title"
            variant="outlined"
            onChange={(event: any) => setSearchText(event.target.value)}
          />

          <PolllistGrid data={data} searchText={searchText || ""} />
          {/* {data.map((item) => (
            <div key={item.objectID} className="post">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                Title:{item.title}<br/>Author:{item.author}<br/>URL:{item.url}<br/>Created at:{item.created_at}<br/>Comments:{item.num_comments}
              </a>
            </div>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default PollList;
