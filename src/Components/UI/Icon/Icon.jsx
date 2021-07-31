import React from 'react';
import * as MaterialDesign from 'react-icons/md';
import * as Heroicons from 'react-icons/hi';
import * as FontAwesome from 'react-icons/fa';

// TEMPORARY back compat

// const checkIconOld = name => {
//   switch (name) {
//     case 'Ticket':
//       icon = FaLock;
//       break;
//     case 'Trophy':
//       icon = FaTrophy;
//       break;
//     case 'Email':
//       icon = HiOutlineMail;
//       break;
//     case 'Group':
//       icon = HiUserGroup;
//       break;
//     case 'Music':
//       icon = MdLibraryMusic;
//       break;
//     default:
//       icon = MdLibraryMusic;
//   }
// };

const checkIcon = name => {
  let library = FontAwesome;
  switch (name) {
    case 'Md':
      library = MaterialDesign;
      break;
    case 'Hi':
      library = Heroicons;
      break;
    case 'Fa':
      library = FontAwesome;
      break;
  }
  return library;
};

export const Icon = ({ name, size, color }) => {
  const iconLibraryId = name.substring(0, 2);
  const Library = checkIcon(iconLibraryId);
  console.log('checkIcon', checkIcon(iconLibraryId));

  const Icon = Library[name];
  return <Icon size={size} style={{ color: color }} />;
};
