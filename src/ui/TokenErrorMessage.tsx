// Hooks
import { useToken } from '../hooks/useToken';

// Components
import Button from './Button';

type ErrorMessageProps = {
  message: string;
};

export default function TokenErrorMessage({ message }: ErrorMessageProps) {
  const { refetch } = useToken();

  return (
    <div className='flex flex-col gap-2'>
      <div className='text-2xl font-bold'>Well this is arkward!</div>
      <div className='text-lg italic'>{message}</div>
      <div>
        <Button variant='primary' onClick={refetch}>
          Retry
        </Button>
      </div>
    </div>
  );
}
