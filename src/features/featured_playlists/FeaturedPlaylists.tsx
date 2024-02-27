// Hooks
import useFeaturedPlaylists from './useFeaturedPlaylists';

// Components
import Loader from '../../ui/Loader';
import ErrorMessage from '../../ui/ErrorMessage';
import Cards from '../../ui/Cards';
import Card from '../../ui/Card';

type FeaturedPlaylistProps = {
  token: string;
};

export default function FeaturedPlaylists({ token }: FeaturedPlaylistProps) {
  const { data, isLoading, error } = useFeaturedPlaylists(token);

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
