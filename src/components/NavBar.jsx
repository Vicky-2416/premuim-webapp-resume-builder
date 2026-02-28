import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/builder', label: 'Builder' },
  { to: '/preview', label: 'Preview' },
  { to: '/proof', label: 'Proof' }
];

function NavBar() {
  return (
    <header className="top-nav">
      <div className="top-nav__inner">
        <p className="brand-mark">AI Resume Builder</p>
        <nav className="top-nav__menu" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `top-nav__link${isActive ? ' top-nav__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
