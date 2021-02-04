export interface Quiz {
  title: string;
  completed: string;
  timeSpent: string;
  bestScore: boolean;
  questions: Question[];
  skills: Skill[];
}

export interface Skill {
  title: string;
  uuid: string;
  description: string;
}

export interface Question {
  title: string;
  skill: string;
  answers: Answer[];
}

export interface Answer {
  response: string;
  score: number;
  selected: boolean;
}
