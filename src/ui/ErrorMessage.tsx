// React router
import { useNavigate } from 'react-router-dom';

// Components
import Button from './Button';

type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-2'>
      <div className='text-2xl font-bold'>Well this is arkward!</div>
      <div className='text-lg italic'>{message}</div>
      <div className='flex gap-4 mt-4'>
        <Button variant='primary' onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button variant='secondary' onClick={() => navigate('/')}>
          Homepage
        </Button>
      </div>
    </div>
  );
}
