interface DepositAction {
  type: "deposit";
  payload: number;
}

interface WithdrawAction {
  type: "withdraw";
  payload: number;
}
interface BankruptAction {
  type: "bankrupt";
}

interface OpenAccountAction {
  type: "openaccount";
  amount: number;
}

export type Action =
  | DepositAction
  | WithdrawAction
  | BankruptAction
  | OpenAccountAction;
