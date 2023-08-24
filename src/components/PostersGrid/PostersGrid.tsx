import { Objects } from '@maxqwars/metaform/metaform3';
import cn from 'classnames';

import './PostersGrid.css';
import PostersGridPoster from './PostersGridPoster';

type PostersGridProps = {
  items: Objects.Title[];
};

const PostersGrid = ({ items }: PostersGridProps) => {
  return (
    <div className={cn('posters-grid')}>
      {items.map((data) => (
        <PostersGridPoster key={data.code} code={data.code} alt={data.names?.en} image={data.posters?.original?.url} />
      ))}
    </div>
  );
};

export default PostersGrid;
