import Search from "../components/search";
import { useEffect, useState } from "react";
import { getKeywords } from "../apis/search";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

function Index() {
  const [keywords, setKeywords] = useState([]);
  const getKeywords_ = async () => {
    return await getKeywords(isMobile ? 24 : 48);
  };
  useEffect(() => {
    (async () => {
      setKeywords(await getKeywords_());
    })();
  }, []);

  return (
    <div>
      <Search
        className="pt-[30%] lg:pt-[10%] lg:px-[25%] px-[4%]"
        onClick={async () => {
          setKeywords(await getKeywords_());
        }}
      />
      {keywords && (
        <div className="flex flex-wrap mx-auto gap-2 pt-2 lg:w-[50%] w-[92%]">
          {keywords.map((keyword) => (
            <div className="badge badge-lg truncate" key={keyword}>
              <Link to={"/search?keyword=" + keyword} className="truncate">
                {keyword}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Index;
