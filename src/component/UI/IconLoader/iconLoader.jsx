// iconLoader.js
import { ReactComponent as LeftIcon } from 'icons/left.svg';
import { ReactComponent as RightIcon } from 'icons/right.svg';
import { ReactComponent as ShareIcon } from 'icons/share.svg';
import { ReactComponent as AddPhotoIcon } from 'icons/addPhoto.svg';
import { ReactComponent as HelpIcon } from 'icons/help.svg';

import { ReactComponent as CloseIcon } from 'icons/close.svg';
import { ReactComponent as InfoIcon } from 'icons/info.svg';
import { ReactComponent as LightIcon } from 'icons/wb_iridescent.svg';
import { ReactComponent as StylusIcon } from 'icons/stylus_note.svg';

import { ReactComponent as ChairIcon } from 'icons/chair.svg';
import { ReactComponent as LightGroupIcon } from 'icons/light_group.svg';
import { ReactComponent as DoorOpenIcon } from 'icons/door_open.svg';
import { ReactComponent as PartialIcon } from 'icons/stroke_partial.svg';

import { ReactComponent as ExpandIcon } from 'icons/expand_more.svg';
import { ReactComponent as ExpandSmallIcon } from 'icons/expand_more_small.svg';

import { ReactComponent as ExpandColorIcon } from 'icons/expand_more_color.svg';
import { ReactComponent as FilterIcon } from 'icons/filter_list.svg';
import { ReactComponent as ExpandSortIcon } from 'icons/expand_more_sort.svg';

import { ReactComponent as DirectionsIcon } from 'icons/directions_walk.svg';
import { ReactComponent as NestMultiIcon } from 'icons/nest_multi_room.svg';

const iconMap = {
  NestMultiIcon,
  DirectionsIcon,
  ExpandColorIcon,
  FilterIcon,
  ExpandSortIcon,
  ExpandIcon,
  ExpandSmallIcon,
  LeftIcon,
  RightIcon,
  ShareIcon,
  AddPhotoIcon,
  HelpIcon,
  CloseIcon,
  InfoIcon,
  LightIcon,
  StylusIcon,
  PartialIcon,
  DoorOpenIcon,
  LightGroupIcon,
  ChairIcon
};

const loadIcon = (iconName) => {
  return iconMap[iconName] || null;
};

export default loadIcon;
