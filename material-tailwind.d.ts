import {} from '@material-tailwind/react';

type EventCapture = {
  onPointerEnterCapture?: unknown;
  onPointerLeaveCapture?: unknown;
};

declare module '@material-tailwind/react' {
  export interface ButtonProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface InputProps extends EventCapture {
    crossOrigin?: unknown;
  }
  export interface SelectProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TypographyProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
  export interface CardProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
  export interface CardHeaderProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
  export interface CardBodyProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
  export interface CardFooterProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
  export interface ListProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
  export interface ListItemProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
  export interface ListItemPrefixProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
  export interface ListItemSuffixProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
  export interface AvatarProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
  export interface DrawerProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
  export interface IconButtonProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
  export interface MenuListProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
  export interface MenuItemProps extends EventCapture {
    placeholder?: unknown;
    children?: unknown;
  }
}
