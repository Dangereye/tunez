// React icons
import { PiSpinnerBold } from 'react-icons/pi';

export default function Loader() {
  return (
    <div className='flex items-center justify-center w-full h-full text-6xl'>
      <PiSpinnerBold className='animate-spin' />
    </div>
  );
}
