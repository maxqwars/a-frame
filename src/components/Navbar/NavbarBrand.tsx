import cn from 'classnames';

type NavbarBrandProps = {
  image: string;
};

const NavbarBrand = ({ image }: NavbarBrandProps) => {
  return (
    <div className={cn('navbar__brand')}>
      <img className={cn('navbar__brand-image')} src={image} alt="" />
    </div>
  );
};

export default NavbarBrand;
