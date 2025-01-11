export interface ExpertProps {
    imageSrc: string;
    title: string;
    alt: string;
    height?: string;
  }

  export interface IMarketer {
    imageSrc: string;
    title: string;
    alt: string;
  }
export interface ExpertCardProps {
  marketers:IMarketer[]
  }
  
  export interface NumberedItemProps {
    number: string;
    text: string;
    showLine?: boolean;
    lineWidth?: string;
  }