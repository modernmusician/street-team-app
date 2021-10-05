export const selectActionsConfig = [
  {
    id: 'vipGroup',
    label: 'Join the Community',
    subText: 'Get more followers...',
    icon: 'MdGroup',
    inputPlaceholder: 'Enter Street Team Group URL',
  },
  {
    id: 'followMusic',
    label: 'Follow My Music',
    subText: 'Get more music followers...',
    icon: 'MdLibraryMusic',
    inputPlaceholder: 'Enter Follow Music URL',
  },
  {
    id: 'email',
    label: 'Send Me An Email',
    subText: 'Get Emails From Fans...',
    icon: 'MdEmail',
    inputPlaceholder: 'Enter Your Email Address',
  },
];

// active={isButtonActive}
// activeBgColor={continueButtonDetails.backgroundColor || "#807650"}
// color={continueButtonDetails.textColor || "#202021"}
// inactiveBgColor="#544c2e"
// handleClick={() => setCurrentStep(2)}
// ctaText={continueButtonDetails.preActionText || "CLAIM YOUR FREE GIFT"}
// iconName={continueButtonDetails.buttonIcon || "Gift"}

export const apiActionsConfig = {
  email: {
    // actionPageID: actionPageId,
    buttonIcon: 'Email',
    // targetURL: newTargetUrl,
    backgroundColor: '#FED93E',
    pointValue: 10,
    position: 3,
    preActionText: 'Send Me an Email',
    postActionText: 'Email Sent!',
    textColor: 'black',
  },
  vipGroup: {
    // actionPageID: actionPageId,
    buttonIcon: 'Group',
    // targetURL: newTargetUrl,
    serviceAction: 'link',
    backgroundColor: '#FED93E',
    pointValue: 10,
    position: 1,
    preActionText: 'Join the Community',
    postActionText: 'Community Joined',
    textColor: 'black',
  },
  starterPack: {
    // actionPageID: actionPageId,
    buttonIcon: 'Gift',
    // targetURL: inputValues.starterPackUrl,
    backgroundColor: '#43C052',
    pointValue: 50,
    position: 4,
    preActionText: 'Claim Your Free Gift',
    postActionText: 'Gift Claimed',
    textColor: 'white',
  },
  followMusic: {
    // actionPageID: actionPageId,
    buttonIcon: 'Music',
    // targetURL: newTargetUrl,
    backgroundColor: '#974FF8',
    pointValue: 10,
    position: 2,
    preActionText: 'Follow My Music',
    postActionText: 'Music Followed',
    textColor: 'white',
  },
};
