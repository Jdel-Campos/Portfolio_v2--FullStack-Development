export type ButtonProps = {
    width: string;
    height: string;
    content: string;
}

export type DeleteButtonProps = {
    width: string;
    height: string;
    content: string;
    onClick: () => void;
  };

export type DeleteConfirmation = {
    onConfirm: () => void;
    onCancel: () => void;
}

export type HeaderProps = {
    activeSection: string | null;
  }