import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { getData } from "../../../services/axios.service";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
export const FaqsTable = () => {
  const navigate = useNavigate();
  const [tableData, settableData] = useState([]);
  const { token } = useSelector((state) => state.auth);

  const getAllUsers = async () => {
    const response = await getData("faqs", token);
    console.log(response.users);
    if (response.success) {
      settableData(response.faqs);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="px-20 all-content-faq mt-[-12px]">
      {tableData != [] && (
        <TableContainer
          sx={{
            maxHeight: "100vh",
            minWidth: "80vw",
            fontFamily: "Montserrat",
          }}
          component={Paper}
        >
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <span className="text-xl font-semibold">Question</span>
                </TableCell>
                <TableCell>
                  <span className="text-xl font-semibold">Answers</span>
                </TableCell>
                <TableCell>
                  <span className="text-xl font-semibold">Action</span>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData &&
                tableData.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell className="">
                      <span className="text-[18px] font-semibold">
                        {row.question}
                      </span>
                    </TableCell>
                    <TableCell className="">
                      <span className="text-[18px] font-semibold">
                        {row.answer}
                      </span>
                    </TableCell>
                    <TableCell className="text-center ">
                      <div className="flex gap-2 items-center">
                        <span className="text-2xl p-2 rounded-md border">
                          <DeleteIcon />
                        </span>
                        <span className="text-2xl p-2 rounded-md border">
                          <button
                            onClick={() =>
                              navigate(`/superadmin/upd-faq/${row._id}`)
                            }
                          >
                            <EditIcon />
                          </button>
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
