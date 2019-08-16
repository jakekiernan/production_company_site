import { iTeamItem, iManifestoItem, iRoleItem } from './index';

export interface iUiState {
  activeNavItem: iTeamItem;
  navIsOpen: boolean;
  modalIsOpen: boolean;
  modalData: iTeamItem;
  manifestoIsOpen: boolean;
  manifestoData: iManifestoItem;
  navIsScrolled: boolean;
  selectedRole: iRoleItem;
}