export const selectActionsConfig = [
  {
    id: 'vipGroup',
    label: 'Join the VIP Group',
    subText: 'Get More Street Team Members...',
    icon: 'MdGroup',
    inputPlaceholder: 'Enter Street Team Group URL',
  },
  {
    id: 'followMusic',
    label: 'Follow My Music',
    subText: 'Get More Music Followers...',
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
  {
    id: 'starterPack',
    label: 'Claim Your Free Started Pack',
    subText: 'Get More Starter Pack Sales...',
    icon: 'FaGift',
    inputPlaceholder: 'Enter Starter Pack URL',
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
    preActionText: 'Join the VIP Group',
    postActionText: 'VIP Group Joined',
    textColor: 'black',
  },
  starterPack: {
    // actionPageID: actionPageId,
    buttonIcon: 'Ticket',
    // targetURL: inputValues.starterPackUrl,
    backgroundColor: '#43C052',
    pointValue: 50,
    position: 4,
    preActionText: 'Claim Your Free Starter Pack',
    postActionText: 'Starter Pack Claimed',
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
