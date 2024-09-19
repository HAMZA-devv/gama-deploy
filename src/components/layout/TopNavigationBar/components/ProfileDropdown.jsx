import Image from 'next/image';
import { Dropdown, DropdownDivider, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const ProfileDropdown = () => {
  return <Dropdown className="topbar-item">
      <DropdownToggle className="nav-link arrow-none nav-icon" role="button" aria-haspopup="false" aria-expanded="false">
        <Image src={avatar1} alt="user" className="thumb-lg rounded-circle" />
      </DropdownToggle>
      <DropdownMenu align={'end'} className="py-0">
        <div className="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
          <div className="flex-shrink-0">
            <Image src={avatar1} alt="avatar" className="thumb-md rounded-circle" />
          </div>
          <div className="flex-grow-1 ms-2 text-truncate align-self-center">
            <h6 className="my-0 fw-medium text-dark fs-13">Nizar Hentati</h6>
            <small className="text-muted mb-0">Directeur</small>
          </div>
        </div>
        <DropdownDivider className="mt-0" />
        <small className="text-muted px-2 pb-1 d-block">Compte</small>
        <DropdownItem href="/pages/profile">
          <IconifyIcon icon="la:user" className="fs-18 me-1 align-text-bottom" /> Profile
        </DropdownItem>
        <small className="text-muted px-2 py-1 d-block">Settings</small>
        <DropdownItem href="/pages/profile">
          <IconifyIcon icon="la:cog" className="fs-18 me-1 align-text-bottom" />
          Paramètres
        </DropdownItem>
        <DropdownItem href="/pages/profile">
          <IconifyIcon icon="la:lock" className="fs-18 me-1 align-text-bottom" /> Securite
        </DropdownItem>
        <DropdownItem href="/pages/faqs">
          <IconifyIcon icon="la:question-circle" className="fs-18 me-1 align-text-bottom" /> Centre d'aide
        </DropdownItem>
        <DropdownDivider className="mb-0" />
        <DropdownItem className="text-danger" href="/auth/login">
          <IconifyIcon icon="la:power-off" className="fs-18 me-1 align-text-bottom" /> Déconnexion
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>;
};
export default ProfileDropdown;