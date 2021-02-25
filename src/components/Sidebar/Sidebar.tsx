import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import { toggleSidebar } from '../../redux/actions/system/system';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import FoldersList from '../FoldersList';
import AddButton from '../AddButton';
import CategoriesList from '../CategoriesList';
import NavHeader from '../NavHeader';

import classes from './Sidebar.scss';

type StateType = {
  system: InitialSystemStateType;
};

const Sidebar = React.memo(
  (): JSX.Element => {
    const dispatch = useDispatch();

    const isMinifiedSidebar = useSelector(
      (state: StateType) => state.system.isMinifiedSidebar
    );

    const panelHandler = useCallback(() => {
      dispatch(toggleSidebar());
    }, [dispatch]);

    return (
      <aside
        className={classNames(classes.Sidebar, {
          [classes.Hide]: isMinifiedSidebar,
        })}
      >
        <NavHeader onToggle={panelHandler} />
        <CategoriesList />
        <FoldersList />
        <AddButton modalType="folder" label="Добавить папку" />
        <AddButton modalType="task" label="Добавить задачу" />
      </aside>
    );
  }
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
