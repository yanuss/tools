/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import { StarTerraEnergy, StakingResult } from "./types";
import constants from "./constants";
import {
  layout,
  headerStyle,
  buttonStyle,
  inputContainer,
  wrapper,
  container,
  formControl,
  detailsContainer,
  detailsRow,
  divider,
  paddingTop,
  paddingBottom,
  spinner,
  rowMarginBottom,
  center,
  bold,
  messageWrapper,
  errorIcon,
  factionWrapper,
} from "./App.style";

const apiUrl = "https://starterra-tools-ste-be.herokuapp.com/ste/";

const STE_RATIO: number = 1.25;

const calculateSte = (stakingInfo: StakingResult): number =>
  stakingInfo.stt_amount + stakingInfo.lp_amount * STE_RATIO;

const App = () => {
  const [wallet, setWallet] = useState("");
  const [data, setData] = useState<StarTerraEnergy | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const getData = async () => {
    setData(null);
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch(`${apiUrl}/${wallet}`);
      if (response.status === 200) {
        const payload = await response.json();
        setData({
          address: wallet,
          // block_time: currentBlock,
          ste_value: calculateSte(payload),
          lp_amount: payload.lp_amount,
          stt_amount: payload.stt_amount,
          faction: payload.faction,
        });
      } else {
        setData(null);
        throw response;
      }
    } catch (error: any) {
      await error.json().then(({ description }: { description: string }) => {
        setErrorMessage(description);
      });
    }
    setLoading(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWallet(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Enter") {
      getData();
    }
  };

  const factionData = constants.factions.find((el) => el.key === data?.faction);
  const themeColor = data?.faction || "";

  return (
    <div
      css={layout({ background: factionData?.backgroundImage || "" })}
      data-testid="appPage"
    >
      <header css={headerStyle}></header>
      <main>
        <div css={container}>
          <div css={wrapper({ color: themeColor })}>
            <FormControl css={formControl}>
              <InputBase
                css={inputContainer}
                id="wallet-address"
                value={wallet}
                onChange={handleChange}
                onKeyPress={handleKeyDown}
                placeholder="Input your wallet address"
              />
            </FormControl>
            <Button
              css={buttonStyle}
              variant="contained"
              onClick={loading ? () => {} : getData}
            >
              {loading ? constants.labels.loading : constants.labels.run}
            </Button>
            <Collapse in={Boolean(errorMessage)}>
              <div css={[messageWrapper]}>
                <ErrorOutlineIcon css={errorIcon} />
                <span>{errorMessage}</span>
              </div>
            </Collapse>
            <Collapse in={loading}>
              <div css={[paddingTop, center]}>
                {loading && <CircularProgress size={32} css={spinner} />}
              </div>
            </Collapse>
            <Collapse in={!loading && Boolean(data)}>
              <div
                css={detailsContainer({
                  color: themeColor,
                })}
              >
                {data && !loading && (
                  <>
                    <div css={[paddingTop, paddingBottom]}>
                      <Divider css={divider} />
                    </div>
                    <div css={[rowMarginBottom, detailsRow]}>
                      <span>{constants.labels.address}:</span>
                      <span>{data?.address}</span>
                    </div>
                    <div css={[rowMarginBottom, detailsRow]}>
                      <span>{constants.labels.stt_sat}:</span>
                      <span>{data?.stt_amount}</span>
                    </div>
                    <div css={[rowMarginBottom, detailsRow]}>
                      <span>{constants.labels.stt_lp}:</span>
                      <span>{data?.lp_amount}</span>
                    </div>
                    <div css={[bold, detailsRow]}>
                      <span>{constants.labels.ste}:</span>
                      <span>{data?.ste_value}</span>
                    </div>
                    <div css={paddingTop}>
                      <Divider css={divider} />
                    </div>
                    {factionData && (
                      <div css={factionWrapper}>
                        <span css={paddingTop}>
                          {constants.labels.youAre}: {factionData.name}
                        </span>
                        <img
                          css={paddingTop}
                          src={factionData.bannerUrl}
                          alt={factionData.name}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </Collapse>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
