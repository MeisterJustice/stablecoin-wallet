export interface ButtonProps {
  onClick?: () => void;
  text: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  icon?: React.ReactNode;
}
