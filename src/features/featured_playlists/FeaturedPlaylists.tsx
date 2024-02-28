// Hooks
import useFeaturedPlaylists from './useFeaturedPlaylists';

// Components
import Loader from '../../ui/Loader';
import ErrorMessage from '../../ui/TokenErrorMessage';
import Cards from '../../ui/Cards';
import Card from '../../ui/Card';

export default function FeaturedPlaylists() {
  const { data, isLoading, error } = useFeaturedPlaylists();

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <Cards
      heading={data?.message}
      data={data?.playlists?.items}
      render={(item) => (
        <Card
          key={item.id}
          link={`/playlist/${item.id}`}
          image={item.images[0]}
          name={item.name}
          description={item.description}
        />
      )}
    />
  );
}
