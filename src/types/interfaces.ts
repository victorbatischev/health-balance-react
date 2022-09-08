export interface IListLeadersChallengeItem {
  id: number;
  reward: number;
  place: number;
  isYourCommand?: boolean;
  avatar?: string;
  title: string;
  isYou?: boolean;
}

export interface ITeam {
  id: number;
  name: string;
}

export interface IMyChallange {
  team: ITeam;
  challangeId: number;
}
