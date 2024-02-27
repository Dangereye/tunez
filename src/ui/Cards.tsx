// React
import { useState } from 'react';

type SectionProps<T> = {
  heading: string | undefined;
  data: T[] | undefined;
  render: (item: T) => React.ReactNode;
};

export default function Cards<T>({
  heading,
  data = [],
  render,
}: SectionProps<T>) {
  const [expanded, setExpanded] = useState(false);

  function toggleExpand() {
    setExpanded((E) => !E);
  }

  if (!expanded) data = data?.filter((_, i) => i < 8);

  return (
    <section className='flex flex-col gap-4'>
      <header className='flex justify-between'>
        <h2 className='text-2xl font-bold'>{heading}</h2>
        <button onClick={toggleExpand}>
          {expanded ? 'Show less' : 'Show all'}
        </button>
      </header>
      <div className='grid md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-2'>
        {data?.map((item: T) => render(item))}
      </div>
    </section>
  );
}
