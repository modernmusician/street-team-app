import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillWarning } from 'react-icons/ai';

// const TABS = {
//   'connect-account': null,
//   'enter-details': null,
//   'fan-actions': null,
//   'add-integrations': null,
//   'review-contest': null,
// };

// const TABSSTATUS = {
//   complete: 'step-complete',
//   active: 'step-active',
//   inactive: 'step-inactive',
//   warning: 'step-warning',
// };

//React.createElement(stepIcon)

function NavbarSteps({
  handleOnClick,
  stepStatus,
  stepText,
  setStepStatus,
  isActive,
  isComplete,
  isInactive,
  isWarning,
  isSelected,
  selectedTab,
  stepIcon,
}) {
  const stepIconDisplayed = isComplete ? (
    <AiOutlineCheck />
  ) : isActive ? (
    <AiFillEdit />
  ) : isSelected ? (
    <AiFillEdit />
  ) : isWarning ? (
    <AiFillWarning />
  ) : null;
  const stepActive = isActive ? ' step-active ' : '';
  const stepComplete = isComplete ? ' step-complete ' : '';
  const stepWarning = isActive && !isSelected ? '  ' : '';
  const stepInactive = isInactive ? ' step-inactive ' : '';

  return (
    <div onClick={handleOnClick} className="sidebar-progress-steps-box">
      <div
        className={
          stepActive +
          stepInactive +
          stepComplete +
          stepWarning +
          ' sidebar-steps-icon ' +
          stepStatus
        }
      >
        {' '}
        {stepIconDisplayed}{' '}
      </div>
      <div
        className={
          stepActive +
          stepInactive +
          stepComplete +
          stepWarning +
          ' sidebar-steps-text ' +
          stepStatus
        }
      >
        {' '}
        {stepText}{' '}
      </div>
    </div>
  );
}

export default NavbarSteps;
