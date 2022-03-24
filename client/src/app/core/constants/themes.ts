export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--primary': 'hsl(252deg 94% 67%)',
    '--primary-light': 'hsl(252deg 100% 73%)',
    '--white': 'hsl(0deg 0% 100%)',
    '--black': 'hsl(0deg 0% 0%)',
    '--base': 'hsl(228deg 29% 7%)',
    '--shamrock': 'hsl(160deg 67% 52%)',
    '--shamrock-light': 'hsl(160deg 67% 52% / 6%)',
    '--pizazz': 'hsl(34deg 100% 50%)',
    '--pizazz-light': 'hsl(34deg 100% 50% / 6%)',
    '--background-primary': 'hsl(240deg 27% 98%)',
    '--background-secondary': 'hsl(0deg 0% 100%)',
    '--background-tetriary': 'hsl(0deg 0% 100%)',
    '--foreground-primary': 'hsl(231deg 20% 61%)',
    '--sidebar-background': 'hsl(231deg 20% 27%)',
    '--sidebar-border': 'hsl(232deg 20% 36%)',
    '--danger': 'hsl(0deg 80% 63%)',
    '--danger-light': 'hsl(0deg 100% 80%)',
    '--button-3-bg': 'hsl(231deg 67% 99%)',
    '--button-3-fg': 'hsl(231deg 36% 63%)',
    '--button-3-bg-hover': 'hsl(231deg 73% 91%)',
    '--button-3-fg-hover': 'hsl(231deg 36% 63%)',
    '--button-4-bg': 'hsl(231deg 20% 27%)',
    '--button-4-fg': 'hsl(231deg 20% 61%)',
    '--button-4-bg-hover': 'hsl(231deg 28% 7%)',
    '--button-4-fg-hover': 'hsl(231deg 20% 61%)',
    '--button-6-bg': 'hsl(231deg 67% 99%)',
    '--button-6-fg': 'hsl(231deg 36% 63%)',
    '--button-6-bg-hover': 'hsl(231deg 73% 93%)',
    '--button-6-fg-hover': 'hsl(231deg 36% 63%)',
    '--header-foreground': 'hsl(231deg 28% 7%)',
    '--radio-background': 'hsl(231deg 73% 93%)',
    '--draft-background': 'hsl(231deg 20% 27% / 6%)',
    '--draft-foreground': 'hsl(231deg 20% 27%)',
    '--hash-symbol': 'hsl(231deg 36% 63%)',
    '--payer': 'hsl(231deg 23% 61%)',
    '--payment-due': 'hsl(231deg 36% 63%)',
    '--invoice-placeholder': 'hsl(231deg 20% 61%)',
    '--invoice-detail': 'hsl(231deg 36% 63%)',
    '--invoice-table-body': 'hsl(231deg 67% 99%)',
    '--invoice-grand-total': 'hsl(231deg 20% 27%)',
    '--invoice-item-title': 'hsl(231deg 36% 63%)',
    '--input-inner-border': 'hsl(231deg 75% 93%)',
    '--label-foreground': 'hsl(231deg 36% 63%)',
    '--select-option-divider': 'hsl(231deg 75% 93%)',
    // box-shadows
    '--box-shadow-primary': 'hsl(232deg 38% 45% / 25%)',
    '--box-shadow-secondary': 'hsl(232deg 38% 45% / 10%)',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--primary': 'hsl(252deg 94% 67%)',
    '--primary-light': 'hsl(252deg 100% 73%)',
    '--white': 'hsl(0deg 0% 100%)',
    '--base': 'hsl(0deg 0% 100%)',
    '--shamrock': 'hsl(160deg 67% 52%)',
    '--shamrock-light': 'hsl(160deg 67% 52% / 6%)',
    '--pizazz': 'hsl(34deg 100% 50%)',
    '--pizazz-light': 'hsl(34deg 100% 50% / 6%)',
    '--background-primary': 'hsl(233deg 30% 11%)',
    '--background-secondary': 'hsl(233deg 30% 21%)',
    '--background-tetriary': 'hsl(231deg 31% 17%)',
    '--foreground-primary': 'hsl(231deg 75% 93%)',
    '--sidebar-background': 'hsl(233deg 31% 17%)',
    '--sidebar-border': 'hsl(232deg 20% 36%)',
    '--danger': 'hsl(0deg 80% 63%)',
    '--danger-light': 'hsl(0deg 100% 80%)',
    '--button-3-bg': 'hsl(233deg 30% 21%)',
    '--button-3-fg': 'hsl(231deg 75% 93%)',
    '--button-3-bg-hover': 'hsl(0deg 0% 100%)',
    '--button-3-fg-hover': 'hsl(231deg 75% 93%)',
    '--button-4-bg': 'hsl(231deg 20% 27%)',
    '--button-4-fg': 'hsl(231deg 75% 93%)',
    '--button-4-bg-hover': 'hsl(233deg 31% 17%)',
    '--button-4-fg-hover': 'hsl(231deg 75% 93%)',
    '--button-6-bg': 'hsl(231deg 67% 99%)',
    '--button-6-fg': 'hsl(231deg 36% 63%)',
    '--button-6-bg-hover': 'hsl(231deg 73% 93%)',
    '--button-6-fg-hover': 'hsl(231deg 36% 63%)',
    '--header-foreground': 'hsl(0deg 0% 100%)',
    '--radio-background': 'hsl(233deg 31% 17%)',
    '--draft-background': 'hsl(231deg 75% 93% / 6%)',
    '--draft-foreground': 'hsl(231deg 75% 93%)',
    '--hash-symbol': 'hsl(231deg 20% 61%)',
    '--payer': 'hsl(0deg 0% 100%)',
    '--payment-due': 'hsl(231deg 75% 93%)',
    '--invoice-placeholder': 'hsl(231deg 75% 93%)',
    '--invoice-detail': 'hsl(231deg 75% 93%)',
    '--invoice-table-body': 'hsl(233deg 30% 21%)',
    '--invoice-grand-total': 'hsl(231deg 28% 7%)',
    '--invoice-item-title': 'hsl(231deg 20% 61%)',
    '--input-inner-border': 'hsl(233deg 20% 21%)',
    '--label-foreground': 'hsl(231deg 75% 93%)',
    '--select-option-divider': 'hsl(233deg 31% 17%)',
    // box-shadows
    '--box-shadow-primary': 'hsl(0deg 0% 0% / 25%)',
    '--box-shadow-secondary': 'hsl(232deg 38% 45% / 10%)',
  },
};
