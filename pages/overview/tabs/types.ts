export interface TabProps {
  index: number;
  title: string;
  handleClick: (index: number) => void;
  currentTabIndex: number;
}
