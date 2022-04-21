import React from 'react';

import TrackInformation from './trackInformation';
import TrackProgress from './trackProgress';
import TrackControls from './trackControls';

export const Small = (props) => {
  return (
    <div>

        <TrackInformation {...props} />

        <TrackProgress {...props} />

        <TrackControls {...props} />

    </div>
  )
}

export default Small