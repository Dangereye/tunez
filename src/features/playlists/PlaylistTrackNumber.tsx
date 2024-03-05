type PlaylistTrackNumberProps = {
  index: number;
};

export default function PlaylistTrackNumber({
  index,
}: PlaylistTrackNumberProps) {
  return <div className='hidden xl:block'>{`${index + 1}`}</div>;
}
