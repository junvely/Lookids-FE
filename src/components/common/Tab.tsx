import { useNavigate, useLocation } from 'react-router-dom';
import { ITabType } from './TabBar';
import { PATH_URL } from '../../utils/constants';

const Tab: React.FC<ITabType> = ({ label, path }: ITabType) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <button
      className={`w-1/2 h-12 font-semibold font-notoSansKr ${
        (location.pathname === path ||
          (location.pathname === '/' && path === PATH_URL.LOOK.KIDS)) &&
        'border-b-2 border-black'
      }`}
      onClick={() => navigate(path)}
    >
      {label}
    </button>
  );
};

export default Tab;
