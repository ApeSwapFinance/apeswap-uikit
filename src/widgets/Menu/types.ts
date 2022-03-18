export interface MenuContextProps {
  collapse: boolean;
  active: string;
  setCollapse: (collapse: boolean) => void;
  setActive: (active: string) => void;
}
