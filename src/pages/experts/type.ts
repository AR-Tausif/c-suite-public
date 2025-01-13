export interface ExpertProps {
  index: number;
  arrLength: number;
  imageSrc: string;
  title: string;
  alt: string;
  name?:string;
  height?: string;
}

export interface IMarketer {
  imageSrc: string;
  title: string;
  alt: string;
}
export interface ExpertCardProps {
  marketers: IMarketer[];
  title: string;
}

export interface NumberedItemProps {
  number: string;
  text: string;
  showLine?: boolean;
  lineWidth?: string;
}
