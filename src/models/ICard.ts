export interface ICard {
  name: string;
  avatar?: string;
  types?: string[];
  height?: number;
  weight?: number;
  baseExperience?: number;
  abilities?: Ability[];
}

type Ability = {
  ability: { name: 'string' };
};
