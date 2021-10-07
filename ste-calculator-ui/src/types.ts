export interface GeneralObject {
  [key: string]: any;
}

export interface StarTerraEnergy {
  address: string;
  // block_time: number;
  ste_value: number;
  stt_amount: number;
  lp_amount: number;
  faction: string;
}
export interface StakingResult {
  lp_amount: number;
  stt_amount: number;
}
