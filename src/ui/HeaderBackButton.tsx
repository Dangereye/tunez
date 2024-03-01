// React router
import { useLocation, useNavigate } from 'react-router-dom';

// Components
import Button from './Button';

// Icons
import { MdOutlineNavigateBefore } from 'react-icons/md';

export default function HeaderBackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.key !== 'default') {
    return (
      <div>
        <Button
          variant='navigation'
          onClick={() => navigate(-1)}
          ariaLabel='Go back'
        >
          <MdOutlineNavigateBefore />
        </Button>
      </div>
    );
  }

  return null;
}
