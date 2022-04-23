import React from 'react';

import TrackInformation from './trackInformation';
import TrackProgress from './trackProgress';

export const Small = (props) => {
  return (
    <div>

        <TrackInformation {...props} />

        <TrackProgress {...props} />

    </div>
  )
}

export default Small