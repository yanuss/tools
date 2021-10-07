export interface GeneralObject {
  [key: string]: any;
}

export interface StarTerraEnergy {
  address: string;
  // block_time: number;
  ste_value: number | null;
  stt_amount: number | null;
  lp_amount: number | null;
  faction: string;
}
export interface StakingResult {
  lp_amount: number;
  stt_amount: number;
}
