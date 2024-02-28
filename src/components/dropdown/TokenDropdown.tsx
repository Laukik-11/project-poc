import { TOKENS_LIST } from "@/constants/faucetConstants";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: "rgb(19, 24, 35)",
      // opacity: 0.8,
      borderRadius: "12px",
      color: "#FFF",
    },
  },
};

type Props = {
  selectedToken: any;
  setSelectedToken: React.Dispatch<any>;
};

const TokenDropdown: React.FC<Props> = ({
  selectedToken,
  setSelectedToken,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedToken(event.target.value);
  };
  return (
    <FormControl
      sx={{ m: 1, width: { xs: "300px", sm: "350px", md: "450px" } }}
    >
      <InputLabel
        id="token-select-label"
        sx={{
          color: "rgb(163 163 163)",
        }}
      >
        Select a token
      </InputLabel>
      <Select
        labelId="token-select-label"
        id="token-select-small"
        value={selectedToken}
        label="Select a token"
        onChange={handleChange}
        MenuProps={MenuProps}
        sx={{
          fontSize: {
            xs: "14px",
            md: "16px",
          },
          textAlign: "start",
          backgroundColor: "rgba(19, 24, 35, 0.9)",
          color: "#FFF",
          borderRadius: "12px",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 0.25)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(228, 219, 233, 0.25)",
          },
          ".MuiSvgIcon-root ": {
            fill: "white !important",
          },
        }}
      >
        {Object.keys(TOKENS_LIST).map((token: any, index: number) => (
          <MenuItem key={index} value={token}>
            {token}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TokenDropdown;
