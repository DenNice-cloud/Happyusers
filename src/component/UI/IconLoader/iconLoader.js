// iconLoader.js
import { ReactComponent as LeftIcon } from '../../../icons/left.svg';
import { ReactComponent as RightIcon } from '../../../icons/right.svg';
import { ReactComponent as ShareIcon } from '../../../icons/share.svg';
import { ReactComponent as AddPhotoIcon } from '../../../icons/addPhoto.svg';
import { ReactComponent as HelpIcon } from '../../../icons/help.svg';

import { ReactComponent as CloseIcon } from '../../../icons/close.svg';
import { ReactComponent as InfoIcon } from '../../../icons/info.svg';
import { ReactComponent as LightIcon } from '../../../icons/wb_iridescent.svg';
import { ReactComponent as StylusIcon } from '../../../icons/stylus_note.svg';

import { ReactComponent as ChairIcon } from '../../../icons/chair.svg';
import { ReactComponent as LightGroupIcon } from '../../../icons/light_group.svg';
import { ReactComponent as DoorOpenIcon } from '../../../icons/door_open.svg';
import { ReactComponent as PartialIcon } from '../../../icons/stroke_partial.svg';

const iconMap = {
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
