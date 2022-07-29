import { useSelector, useDispatch } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectVisiblePositions } from "../store/positions/position_selectors";
import { addFilter } from "../store/filters/filters_actions";
import { selectFilters } from "../store/filters/filters_selectors";

const JobList = () => {
  const dispatch = useDispatch();
  const currentPositions = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentPositions)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
