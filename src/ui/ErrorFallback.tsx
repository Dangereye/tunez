import Button from './Button';

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  console.log(error.message);
  return (
    <div className='flex flex-col justify-center w-full h-screen gap-2 p-4 text-white md:p-8 align-center bg-zinc-950'>
      <h1 className='text-2xl font-black text-center md:text-4xl xl:text-7xl'>
        Well, this is awkward!
      </h1>
      <p className='text-lg text-center text-zinc-200'>
        It seems like something is a little out of tune. If the problem
        persists, please try again later.
      </p>
      <div className='flex justify-center mt-8 '>
        <Button variant='primary' onClick={() => resetErrorBoundary()}>
          Retune and try again
        </Button>
      </div>
    </div>
  );
}
