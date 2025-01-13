import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { IMenuItem, menuItems } from './items';
import { Tooltip } from '@mui/material';

interface ICustomListProps {
  open: boolean;
  setOpen: (open: boolean) => void
}

const CustomList: React.FC<ICustomListProps> = ({ open, setOpen }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleToggleCategory = (category: string) => {
    setOpen(true)
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  useEffect(() => {
    if (!open) setExpandedCategory(null)
  }, [open])

  return (
    <List>
      {menuItems.map((category: IMenuItem) => (
        <div key={category.text}>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => handleToggleCategory(category.text)}
              sx={{
                minHeight: 48,
                px: 2.5,
                justifyContent: open ? 'initial' : 'center',
              }}
            >
              <Tooltip title={`${category.text}`} placement="right">
                <ListItemIcon
                  sx={(theme) => ({
                    minWidth: 0,
                    justifyContent: 'center',
                    mr: open ? theme.spacing(3) : 'auto',
                  })}
                >
                  {category.icon}
                </ListItemIcon>
              </Tooltip>

              <ListItemText
                primary={category.text}
                sx={(theme) => ({
                  opacity: open ? 1 : 0,
                  color: open ? theme.palette.primary.main : 'inherit',
                })}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={expandedCategory === category.text} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {category.items.map((item, index) => (
                <ListItem key={`${item.text}-${index}`} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      maxHeight: 48,
                      pl: open ? 4 : 2.5,
                      justifyContent: open ? 'initial' : 'center',
                    }}
                  >
                    <ListItemIcon
                      sx={(theme) => ({
                        minWidth: 0,
                        justifyContent: 'center',
                        mr: open ? theme.spacing(3) : 'auto',
                      })}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={(theme) => ({
                        opacity: open ? 1 : 0,
                        color: open ? theme.palette.primary.main : 'inherit',
                      })}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default CustomList;
