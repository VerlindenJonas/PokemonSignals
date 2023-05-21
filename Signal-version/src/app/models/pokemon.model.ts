export class Pokemon {
  constructor(
    public name: string,
    public types: Types[],
    public moves: Moves[],
    public stats: Stats[],
    public sprites: Sprites,
    public baseHp: number,
    public currentHp: number
  ) {}
}
export interface Types {
  slot: string;
  type: Type
}

export interface Type {
  name: string;
  url: string;
}

export interface Moves {
  move: Move;
}
export interface Move{
  name:string;
  maxPp: number;
  currentPp: number;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
}
export interface Stat{
  name: string;
  url: string;
}

export interface Sprites {
  front_default: string;
  back_default: string;
  frontShiny: string;
  backShiny: string;
}