export type Data = {
  data: DataItem[];
};

export type DataItem = {
  id: number;
  question: string;
  options: string[];
};
