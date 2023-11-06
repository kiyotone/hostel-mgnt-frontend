import { Button } from "@mui/material";
import { AddHostelRUlesTable } from "./Table";

const AddHostelRules = () => {
  const rules = ["sdsdsd", "sdsdsd", "sdsdsd"];
  return (
    <div>
      <div className="add-new-rule">
        <Button variant="contained">Add New</Button>
      </div>
      <div className="contained mt-10">
        <AddHostelRUlesTable tableData={rules} />
      </div>
    </div>
  );
};

export default AddHostelRules;
