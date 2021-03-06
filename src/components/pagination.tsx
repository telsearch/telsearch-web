import React from "react";
import { PagePros } from "../types/props";
import { isMobile } from "react-device-detect";

function Pagination(props: PagePros) {
  let total = props.total ?? 0;
  let limit = props.limit ?? (isMobile ? "10" : "20");
  let offset = props.offset ?? "0";
  let limit_number = parseInt(limit);
  let offset_number = parseInt(offset);
  return (
    <div className="btn-group grid grid-cols-2">
      {offset_number >= limit_number && (
        <button
          className="btn btn-outline font-asap"
          onClick={() =>
            props.onClick(offset_number - limit_number, limit_number)
          }
        >
          Previous
        </button>
      )}
      {offset_number < limit_number && (
        <button className="btn btn-outline btn-disabled font-asap">
          Previous
        </button>
      )}
      {offset_number > total - limit_number && (
        <button className="btn btn-outline btn-disabled font-asap">Next</button>
      )}
      {offset_number <= total - limit_number && (
        <button
          className="btn btn-outline font-asap"
          onClick={() =>
            props.onClick(offset_number + limit_number, limit_number)
          }
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
