import { JSX } from 'react';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

export interface IMenuItem {
  text: string;
  icon: JSX.Element;
  items: { text: string; icon: JSX.Element }[];
}

export const menuItems: IMenuItem[] = [
  {
    text: 'Produtos e Estoque',
    icon: <InventoryIcon />,
    items: [
      { text: 'Fornecedores', icon: <ContactMailIcon /> },
      { text: 'Estoque', icon: <ProductionQuantityLimitsIcon /> },
    ],
  },
  {
    text: 'Controle de Vendas',
    icon: <AttachMoneyIcon />,
    items: [
      { text: 'Relatórios', icon: <AssignmentIcon /> },
      { text: 'Vendas', icon: <AddShoppingCartIcon /> },
    ],
  },
];
