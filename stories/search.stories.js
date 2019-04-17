import React from 'react';
import { storiesOf } from '@storybook/react';
import { QuickSearchListView } from 'mstrweb-search';
// import 'mstrweb-search/src/quickSearch/styles';
import { action } from '@storybook/addon-actions';
import datasetData from './data/datasetData';

storiesOf('Quick Search', module)
  .add('Dataset Result', () => (<QuickSearchListView onItemSelect={action('Object ID')} searchItems={datasetData} />))
