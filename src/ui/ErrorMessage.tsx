// React router
import { useNavigate } from 'react-router-dom';

type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  const navigate = useNavigate();

  return (
    <div>
      <div className='text-2xl'>Well, this is arkward</div>
      <div>{message}</div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
