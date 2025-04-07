import { JSX } from 'react';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export interface IMenuItem {
  text: string;
  icon: JSX.Element;
  url: string
  items?: IMenuItem[];
}

export const menuItems: IMenuItem[] = [
  {
    text: 'Dashboard',
    icon: <AutoGraphIcon />,
    url: '/home',
  },
  {
    text: 'Produtos e Estoque',
    icon: <InventoryIcon />,
    url: '',
    items: [
      { text: 'Fornecedores', icon: <ContactMailIcon />, url: '/suppliers' },
      { text: 'Estoque', icon: <ProductionQuantityLimitsIcon />, url: '/stock' },
    ],
  },
  {
    text: 'Controle de Vendas',
    icon: <AddShoppingCartIcon />,
    url: '',
    items: [
      { text: 'Relatórios', icon: <AssignmentIcon />, url: '/reports' },
      { text: 'Vendas', icon: <AttachMoneyIcon />, url: '/sales' },
    ],
  },
];
