import { useState } from "react";
import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";
import TableRow from "@mui/material/TableRow";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selecetFoodAtom } from "../../atom/selecetFoodAtom";

// ----------------------------------------------------------------------

export default function UserTableRow(props) {
  const [open, setOpen] = useState(null);
  const [selectFood, setSelcetFood] = useRecoilState(selecetFoodAtom)
  const navigate = useNavigate();


  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleClickButton = () => {
    setSelcetFood(props.row)
    navigate("/exercise")
  }

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox">

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle2" noWrap>
              {props.row.createDate}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{props.row.id}</TableCell>

        <TableCell>{props.row.foodName}</TableCell>

        <TableCell>{props.row.totalCalories} Kcal</TableCell>
        <TableCell>
          <Button onClick={handleClickButton}>자세히</Button>
        </TableCell>

      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          {/* <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} /> */}
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: "error.main" }}>
          {/* <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} /> */}
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  isVerified: PropTypes.any,
  name: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
  row: PropTypes.any,
};
