import { ChainOptions, Chains, TOKENS_LIST } from "@/constants/faucetConstants";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { useChainId, useSwitchNetwork } from "wagmi";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: "rgb(19, 24, 35)",
      borderRadius: "12px",
      color: "#FFF",
    },
  },
};

type Props = {
  selectedToken: any;
  selectedChain: any;
  setSelectedChain: React.Dispatch<any>;
};

const ChainDropdown: React.FC<Props> = ({
  selectedToken,
  selectedChain,
  setSelectedChain,
}) => {
  const chainId = useChainId();
  const { switchNetwork } = useSwitchNetwork();
  const handleChange = (event: SelectChangeEvent) => {
    if (Number(event.target.value) !== chainId) {
      switchNetwork!(Number(event.target.value));
    }
    setSelectedChain(event.target.value);
  };

  return (
    <FormControl
      sx={{ m: 1, width: { xs: "300px", sm: "350px", md: "450px" } }}
    >
      <InputLabel id="chain-select-label" sx={{ color: "rgb(163 163 163)" }}>
        Select a chain
      </InputLabel>
      <Select
        labelId="chain-select-label"
        id="chain-select-small"
        value={selectedChain}
        label="Select a chain"
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
        {TOKENS_LIST[selectedToken] !== undefined
          ? TOKENS_LIST[selectedToken].map((token: any, index: number) => (
              <MenuItem key={index} value={token.chainId}>
                {`${token.chainName.substring(0, 1)}${token.chainName
                  .substring(1)
                  .toLowerCase()}`}
              </MenuItem>
            ))
          : ChainOptions.map((chain, index: number) => (
              <MenuItem key={index} value={chain.name}>
                {`${chain.name.substring(0, 1)}${chain.name
                  .substring(1)
                  .toLowerCase()}`}
              </MenuItem>
            ))}
      </Select>
    </FormControl>
  );
};

export default ChainDropdown;
