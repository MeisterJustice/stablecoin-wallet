export default interface InputProps {
  value: string;
  onChange: (value: string) => void;
  max?: () => void;
  label?: string;
  variant?: "primary" | "secondary";
  placeholder: string;
  name: string;
}
