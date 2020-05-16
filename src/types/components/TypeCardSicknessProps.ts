export type CardSicknessProps = {
  id?: string;
  name: string;
  scientificNotation: string;
  img: string;
  description: string;
  deleteSickness?: (id: string) => void;
  AddSickness?: (id: string) => void;
};
