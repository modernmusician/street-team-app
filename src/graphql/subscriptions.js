/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist($owner: String) {
    onCreateArtist(owner: $owner) {
      id
      name
      genre
      route
      createdAt
      updatedAt
      owner
      actionPages {
        items {
          id
          artistID
          creatorUserID
          pictureID
          pageTitle
          heading
          subheading
          pageRoute
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            createdAt
            updatedAt
            owner
          }
          owner
          subscribers {
            nextToken
          }
          actionButtons {
            nextToken
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      contests {
        items {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
          owner
          actions {
            nextToken
          }
          subscribers {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist($owner: String) {
    onUpdateArtist(owner: $owner) {
      id
      name
      genre
      route
      createdAt
      updatedAt
      owner
      actionPages {
        items {
          id
          artistID
          creatorUserID
          pictureID
          pageTitle
          heading
          subheading
          pageRoute
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            createdAt
            updatedAt
            owner
          }
          owner
          subscribers {
            nextToken
          }
          actionButtons {
            nextToken
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      contests {
        items {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
          owner
          actions {
            nextToken
          }
          subscribers {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist($owner: String) {
    onDeleteArtist(owner: $owner) {
      id
      name
      genre
      route
      createdAt
      updatedAt
      owner
      actionPages {
        items {
          id
          artistID
          creatorUserID
          pictureID
          pageTitle
          heading
          subheading
          pageRoute
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            createdAt
            updatedAt
            owner
          }
          owner
          subscribers {
            nextToken
          }
          actionButtons {
            nextToken
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      contests {
        items {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
          owner
          actions {
            nextToken
          }
          subscribers {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateEnduser = /* GraphQL */ `
  subscription OnCreateEnduser($owner: String) {
    onCreateEnduser(owner: $owner) {
      id
      username
      firstName
      lastName
      email
      phone
      profileName
      profilePicture
      profileDescription
      profileSocialLink
      createdAt
      updatedAt
      owner
      actionPageSubscriptions {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          enduserPoints
          completedActionButtonIDs
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      referredSubscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          enduserPoints
          completedActionButtonIDs
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      completedActions {
        items {
          id
          enduserID
          actionID
          actionPageID
          artistID
          isExpired
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          action {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateEnduser = /* GraphQL */ `
  subscription OnUpdateEnduser($owner: String) {
    onUpdateEnduser(owner: $owner) {
      id
      username
      firstName
      lastName
      email
      phone
      profileName
      profilePicture
      profileDescription
      profileSocialLink
      createdAt
      updatedAt
      owner
      actionPageSubscriptions {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          enduserPoints
          completedActionButtonIDs
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      referredSubscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          enduserPoints
          completedActionButtonIDs
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      completedActions {
        items {
          id
          enduserID
          actionID
          actionPageID
          artistID
          isExpired
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          action {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteEnduser = /* GraphQL */ `
  subscription OnDeleteEnduser($owner: String) {
    onDeleteEnduser(owner: $owner) {
      id
      username
      firstName
      lastName
      email
      phone
      profileName
      profilePicture
      profileDescription
      profileSocialLink
      createdAt
      updatedAt
      owner
      actionPageSubscriptions {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          enduserPoints
          completedActionButtonIDs
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      referredSubscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          enduserPoints
          completedActionButtonIDs
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      completedActions {
        items {
          id
          enduserID
          actionID
          actionPageID
          artistID
          isExpired
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          action {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateArtistUser = /* GraphQL */ `
  subscription OnCreateArtistUser($owner: String) {
    onCreateArtistUser(owner: $owner) {
      id
      username
      firstName
      lastName
      email
      phoneNumber
      artistID
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
      actionPages {
        items {
          id
          artistID
          creatorUserID
          pictureID
          pageTitle
          heading
          subheading
          pageRoute
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            createdAt
            updatedAt
            owner
          }
          owner
          subscribers {
            nextToken
          }
          actionButtons {
            nextToken
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateArtistUser = /* GraphQL */ `
  subscription OnUpdateArtistUser($owner: String) {
    onUpdateArtistUser(owner: $owner) {
      id
      username
      firstName
      lastName
      email
      phoneNumber
      artistID
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
      actionPages {
        items {
          id
          artistID
          creatorUserID
          pictureID
          pageTitle
          heading
          subheading
          pageRoute
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            createdAt
            updatedAt
            owner
          }
          owner
          subscribers {
            nextToken
          }
          actionButtons {
            nextToken
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteArtistUser = /* GraphQL */ `
  subscription OnDeleteArtistUser($owner: String) {
    onDeleteArtistUser(owner: $owner) {
      id
      username
      firstName
      lastName
      email
      phoneNumber
      artistID
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
      actionPages {
        items {
          id
          artistID
          creatorUserID
          pictureID
          pageTitle
          heading
          subheading
          pageRoute
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            createdAt
            updatedAt
            owner
          }
          owner
          subscribers {
            nextToken
          }
          actionButtons {
            nextToken
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateActionPage = /* GraphQL */ `
  subscription OnCreateActionPage($owner: String) {
    onCreateActionPage(owner: $owner) {
      id
      artistID
      creatorUserID
      pictureID
      pageTitle
      heading
      subheading
      pageRoute
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      creatorUser {
        id
        username
        firstName
        lastName
        email
        phoneNumber
        artistID
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
      subscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          enduserPoints
          completedActionButtonIDs
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      actionButtons {
        items {
          id
          actionPageID
          preActionText
          postActionText
          buttonIcon
          backgroundColor
          textColor
          pointValue
          position
          targetURL
          serviceAction
          createdAt
          updatedAt
          actionpage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          owner
          enduserCompletedActions {
            nextToken
          }
        }
        nextToken
      }
      picture {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
    }
  }
`;
export const onUpdateActionPage = /* GraphQL */ `
  subscription OnUpdateActionPage($owner: String) {
    onUpdateActionPage(owner: $owner) {
      id
      artistID
      creatorUserID
      pictureID
      pageTitle
      heading
      subheading
      pageRoute
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      creatorUser {
        id
        username
        firstName
        lastName
        email
        phoneNumber
        artistID
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
      subscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          enduserPoints
          completedActionButtonIDs
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      actionButtons {
        items {
          id
          actionPageID
          preActionText
          postActionText
          buttonIcon
          backgroundColor
          textColor
          pointValue
          position
          targetURL
          serviceAction
          createdAt
          updatedAt
          actionpage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          owner
          enduserCompletedActions {
            nextToken
          }
        }
        nextToken
      }
      picture {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
    }
  }
`;
export const onDeleteActionPage = /* GraphQL */ `
  subscription OnDeleteActionPage($owner: String) {
    onDeleteActionPage(owner: $owner) {
      id
      artistID
      creatorUserID
      pictureID
      pageTitle
      heading
      subheading
      pageRoute
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      creatorUser {
        id
        username
        firstName
        lastName
        email
        phoneNumber
        artistID
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
      subscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          enduserPoints
          completedActionButtonIDs
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
      actionButtons {
        items {
          id
          actionPageID
          preActionText
          postActionText
          buttonIcon
          backgroundColor
          textColor
          pointValue
          position
          targetURL
          serviceAction
          createdAt
          updatedAt
          actionpage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          owner
          enduserCompletedActions {
            nextToken
          }
        }
        nextToken
      }
      picture {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
    }
  }
`;
export const onCreateActionPageSubscriptions = /* GraphQL */ `
  subscription OnCreateActionPageSubscriptions($owner: String) {
    onCreateActionPageSubscriptions(owner: $owner) {
      id
      actionPageID
      enduserID
      referralEnduserID
      enduserPoints
      completedActionButtonIDs
      createdAt
      updatedAt
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      referralEnduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionPage {
        id
        artistID
        creatorUserID
        pictureID
        pageTitle
        heading
        subheading
        pageRoute
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        actionButtons {
          items {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      owner
    }
  }
`;
export const onUpdateActionPageSubscriptions = /* GraphQL */ `
  subscription OnUpdateActionPageSubscriptions($owner: String) {
    onUpdateActionPageSubscriptions(owner: $owner) {
      id
      actionPageID
      enduserID
      referralEnduserID
      enduserPoints
      completedActionButtonIDs
      createdAt
      updatedAt
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      referralEnduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionPage {
        id
        artistID
        creatorUserID
        pictureID
        pageTitle
        heading
        subheading
        pageRoute
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        actionButtons {
          items {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      owner
    }
  }
`;
export const onDeleteActionPageSubscriptions = /* GraphQL */ `
  subscription OnDeleteActionPageSubscriptions($owner: String) {
    onDeleteActionPageSubscriptions(owner: $owner) {
      id
      actionPageID
      enduserID
      referralEnduserID
      enduserPoints
      completedActionButtonIDs
      createdAt
      updatedAt
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      referralEnduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionPage {
        id
        artistID
        creatorUserID
        pictureID
        pageTitle
        heading
        subheading
        pageRoute
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        actionButtons {
          items {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      owner
    }
  }
`;
export const onCreateActionPageButton = /* GraphQL */ `
  subscription OnCreateActionPageButton($owner: String) {
    onCreateActionPageButton(owner: $owner) {
      id
      actionPageID
      preActionText
      postActionText
      buttonIcon
      backgroundColor
      textColor
      pointValue
      position
      targetURL
      serviceAction
      createdAt
      updatedAt
      actionpage {
        id
        artistID
        creatorUserID
        pictureID
        pageTitle
        heading
        subheading
        pageRoute
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        actionButtons {
          items {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      owner
      enduserCompletedActions {
        items {
          id
          enduserID
          actionID
          actionPageID
          artistID
          isExpired
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          action {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateActionPageButton = /* GraphQL */ `
  subscription OnUpdateActionPageButton($owner: String) {
    onUpdateActionPageButton(owner: $owner) {
      id
      actionPageID
      preActionText
      postActionText
      buttonIcon
      backgroundColor
      textColor
      pointValue
      position
      targetURL
      serviceAction
      createdAt
      updatedAt
      actionpage {
        id
        artistID
        creatorUserID
        pictureID
        pageTitle
        heading
        subheading
        pageRoute
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        actionButtons {
          items {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      owner
      enduserCompletedActions {
        items {
          id
          enduserID
          actionID
          actionPageID
          artistID
          isExpired
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          action {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteActionPageButton = /* GraphQL */ `
  subscription OnDeleteActionPageButton($owner: String) {
    onDeleteActionPageButton(owner: $owner) {
      id
      actionPageID
      preActionText
      postActionText
      buttonIcon
      backgroundColor
      textColor
      pointValue
      position
      targetURL
      serviceAction
      createdAt
      updatedAt
      actionpage {
        id
        artistID
        creatorUserID
        pictureID
        pageTitle
        heading
        subheading
        pageRoute
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        actionButtons {
          items {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      owner
      enduserCompletedActions {
        items {
          id
          enduserID
          actionID
          actionPageID
          artistID
          isExpired
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          action {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateEnduserCompletedActions = /* GraphQL */ `
  subscription OnCreateEnduserCompletedActions($owner: String) {
    onCreateEnduserCompletedActions(owner: $owner) {
      id
      enduserID
      actionID
      actionPageID
      artistID
      isExpired
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionPage {
        id
        artistID
        creatorUserID
        pictureID
        pageTitle
        heading
        subheading
        pageRoute
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        actionButtons {
          items {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      action {
        id
        actionPageID
        preActionText
        postActionText
        buttonIcon
        backgroundColor
        textColor
        pointValue
        position
        targetURL
        serviceAction
        createdAt
        updatedAt
        actionpage {
          id
          artistID
          creatorUserID
          pictureID
          pageTitle
          heading
          subheading
          pageRoute
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            createdAt
            updatedAt
            owner
          }
          owner
          subscribers {
            nextToken
          }
          actionButtons {
            nextToken
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
        }
        owner
        enduserCompletedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateEnduserCompletedActions = /* GraphQL */ `
  subscription OnUpdateEnduserCompletedActions($owner: String) {
    onUpdateEnduserCompletedActions(owner: $owner) {
      id
      enduserID
      actionID
      actionPageID
      artistID
      isExpired
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionPage {
        id
        artistID
        creatorUserID
        pictureID
        pageTitle
        heading
        subheading
        pageRoute
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        actionButtons {
          items {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      action {
        id
        actionPageID
        preActionText
        postActionText
        buttonIcon
        backgroundColor
        textColor
        pointValue
        position
        targetURL
        serviceAction
        createdAt
        updatedAt
        actionpage {
          id
          artistID
          creatorUserID
          pictureID
          pageTitle
          heading
          subheading
          pageRoute
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            createdAt
            updatedAt
            owner
          }
          owner
          subscribers {
            nextToken
          }
          actionButtons {
            nextToken
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
        }
        owner
        enduserCompletedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteEnduserCompletedActions = /* GraphQL */ `
  subscription OnDeleteEnduserCompletedActions($owner: String) {
    onDeleteEnduserCompletedActions(owner: $owner) {
      id
      enduserID
      actionID
      actionPageID
      artistID
      isExpired
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionPage {
        id
        artistID
        creatorUserID
        pictureID
        pageTitle
        heading
        subheading
        pageRoute
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        creatorUser {
          id
          username
          firstName
          lastName
          email
          phoneNumber
          artistID
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
        subscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        actionButtons {
          items {
            id
            actionPageID
            preActionText
            postActionText
            buttonIcon
            backgroundColor
            textColor
            pointValue
            position
            targetURL
            serviceAction
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      action {
        id
        actionPageID
        preActionText
        postActionText
        buttonIcon
        backgroundColor
        textColor
        pointValue
        position
        targetURL
        serviceAction
        createdAt
        updatedAt
        actionpage {
          id
          artistID
          creatorUserID
          pictureID
          pageTitle
          heading
          subheading
          pageRoute
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            createdAt
            updatedAt
            owner
          }
          owner
          subscribers {
            nextToken
          }
          actionButtons {
            nextToken
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
        }
        owner
        enduserCompletedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($owner: String) {
    onCreatePicture(owner: $owner) {
      id
      publicUrl
      name
      owner
      visibility
      createdAt
      file {
        bucket
        region
        key
      }
      updatedAt
    }
  }
`;
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($owner: String) {
    onUpdatePicture(owner: $owner) {
      id
      publicUrl
      name
      owner
      visibility
      createdAt
      file {
        bucket
        region
        key
      }
      updatedAt
    }
  }
`;
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($owner: String) {
    onDeletePicture(owner: $owner) {
      id
      publicUrl
      name
      owner
      visibility
      createdAt
      file {
        bucket
        region
        key
      }
      updatedAt
    }
  }
`;
export const onCreateContest = /* GraphQL */ `
  subscription OnCreateContest($owner: String) {
    onCreateContest(owner: $owner) {
      id
      headline
      description
      encouragementHeadline
      encouragementDescription
      landingButtonText
      deadline
      artistID
      pictureID
      testPictureUrl
      streetTeamUrl
      spotifyPlayUrl
      spotifyFollowPlaylistUrl
      spotifyFollowArtistUrl
      spotifySaveUrl
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      picture {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      owner
      actions {
        items {
          id
          preActionText
          postActionText
          pointValue
          contestID
          actionType {
            id
            value
            createdAt
            updatedAt
            owner
          }
          url
          createdAt
          updatedAt
          contest {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          owner
          enduserActions {
            nextToken
          }
        }
        nextToken
      }
      subscribers {
        items {
          id
          contestID
          enduserID
          referralEnduserID
          enduserPoints
          completeStreetTeamJoin
          completeSpotifyFollow
          completeSpotifySave
          completeSpotifyPlay
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          contest {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateContest = /* GraphQL */ `
  subscription OnUpdateContest($owner: String) {
    onUpdateContest(owner: $owner) {
      id
      headline
      description
      encouragementHeadline
      encouragementDescription
      landingButtonText
      deadline
      artistID
      pictureID
      testPictureUrl
      streetTeamUrl
      spotifyPlayUrl
      spotifyFollowPlaylistUrl
      spotifyFollowArtistUrl
      spotifySaveUrl
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      picture {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      owner
      actions {
        items {
          id
          preActionText
          postActionText
          pointValue
          contestID
          actionType {
            id
            value
            createdAt
            updatedAt
            owner
          }
          url
          createdAt
          updatedAt
          contest {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          owner
          enduserActions {
            nextToken
          }
        }
        nextToken
      }
      subscribers {
        items {
          id
          contestID
          enduserID
          referralEnduserID
          enduserPoints
          completeStreetTeamJoin
          completeSpotifyFollow
          completeSpotifySave
          completeSpotifyPlay
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          contest {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteContest = /* GraphQL */ `
  subscription OnDeleteContest($owner: String) {
    onDeleteContest(owner: $owner) {
      id
      headline
      description
      encouragementHeadline
      encouragementDescription
      landingButtonText
      deadline
      artistID
      pictureID
      testPictureUrl
      streetTeamUrl
      spotifyPlayUrl
      spotifyFollowPlaylistUrl
      spotifyFollowArtistUrl
      spotifySaveUrl
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
        owner
        actionPages {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      picture {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      owner
      actions {
        items {
          id
          preActionText
          postActionText
          pointValue
          contestID
          actionType {
            id
            value
            createdAt
            updatedAt
            owner
          }
          url
          createdAt
          updatedAt
          contest {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          owner
          enduserActions {
            nextToken
          }
        }
        nextToken
      }
      subscribers {
        items {
          id
          contestID
          enduserID
          referralEnduserID
          enduserPoints
          completeStreetTeamJoin
          completeSpotifyFollow
          completeSpotifySave
          completeSpotifyPlay
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          contest {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateContestAction = /* GraphQL */ `
  subscription OnCreateContestAction($owner: String) {
    onCreateContestAction(owner: $owner) {
      id
      preActionText
      postActionText
      pointValue
      contestID
      actionType {
        id
        value
        createdAt
        updatedAt
        owner
      }
      url
      createdAt
      updatedAt
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        pictureID
        testPictureUrl
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
        owner
        actions {
          items {
            id
            preActionText
            postActionText
            pointValue
            contestID
            url
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        subscribers {
          items {
            id
            contestID
            enduserID
            referralEnduserID
            enduserPoints
            completeStreetTeamJoin
            completeSpotifyFollow
            completeSpotifySave
            completeSpotifyPlay
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
      enduserActions {
        items {
          id
          enduserID
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionID
          action {
            id
            preActionText
            postActionText
            pointValue
            contestID
            url
            createdAt
            updatedAt
            owner
          }
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateContestAction = /* GraphQL */ `
  subscription OnUpdateContestAction($owner: String) {
    onUpdateContestAction(owner: $owner) {
      id
      preActionText
      postActionText
      pointValue
      contestID
      actionType {
        id
        value
        createdAt
        updatedAt
        owner
      }
      url
      createdAt
      updatedAt
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        pictureID
        testPictureUrl
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
        owner
        actions {
          items {
            id
            preActionText
            postActionText
            pointValue
            contestID
            url
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        subscribers {
          items {
            id
            contestID
            enduserID
            referralEnduserID
            enduserPoints
            completeStreetTeamJoin
            completeSpotifyFollow
            completeSpotifySave
            completeSpotifyPlay
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
      enduserActions {
        items {
          id
          enduserID
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionID
          action {
            id
            preActionText
            postActionText
            pointValue
            contestID
            url
            createdAt
            updatedAt
            owner
          }
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteContestAction = /* GraphQL */ `
  subscription OnDeleteContestAction($owner: String) {
    onDeleteContestAction(owner: $owner) {
      id
      preActionText
      postActionText
      pointValue
      contestID
      actionType {
        id
        value
        createdAt
        updatedAt
        owner
      }
      url
      createdAt
      updatedAt
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        pictureID
        testPictureUrl
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
        owner
        actions {
          items {
            id
            preActionText
            postActionText
            pointValue
            contestID
            url
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        subscribers {
          items {
            id
            contestID
            enduserID
            referralEnduserID
            enduserPoints
            completeStreetTeamJoin
            completeSpotifyFollow
            completeSpotifySave
            completeSpotifyPlay
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
      enduserActions {
        items {
          id
          enduserID
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionID
          action {
            id
            preActionText
            postActionText
            pointValue
            contestID
            url
            createdAt
            updatedAt
            owner
          }
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateActionType = /* GraphQL */ `
  subscription OnCreateActionType($owner: String) {
    onCreateActionType(owner: $owner) {
      id
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateActionType = /* GraphQL */ `
  subscription OnUpdateActionType($owner: String) {
    onUpdateActionType(owner: $owner) {
      id
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteActionType = /* GraphQL */ `
  subscription OnDeleteActionType($owner: String) {
    onDeleteActionType(owner: $owner) {
      id
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateContestSubscription = /* GraphQL */ `
  subscription OnCreateContestSubscription($owner: String) {
    onCreateContestSubscription(owner: $owner) {
      id
      contestID
      enduserID
      referralEnduserID
      enduserPoints
      completeStreetTeamJoin
      completeSpotifyFollow
      completeSpotifySave
      completeSpotifyPlay
      createdAt
      updatedAt
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      referralEnduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        pictureID
        testPictureUrl
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
        owner
        actions {
          items {
            id
            preActionText
            postActionText
            pointValue
            contestID
            url
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        subscribers {
          items {
            id
            contestID
            enduserID
            referralEnduserID
            enduserPoints
            completeStreetTeamJoin
            completeSpotifyFollow
            completeSpotifySave
            completeSpotifyPlay
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateContestSubscription = /* GraphQL */ `
  subscription OnUpdateContestSubscription($owner: String) {
    onUpdateContestSubscription(owner: $owner) {
      id
      contestID
      enduserID
      referralEnduserID
      enduserPoints
      completeStreetTeamJoin
      completeSpotifyFollow
      completeSpotifySave
      completeSpotifyPlay
      createdAt
      updatedAt
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      referralEnduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        pictureID
        testPictureUrl
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
        owner
        actions {
          items {
            id
            preActionText
            postActionText
            pointValue
            contestID
            url
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        subscribers {
          items {
            id
            contestID
            enduserID
            referralEnduserID
            enduserPoints
            completeStreetTeamJoin
            completeSpotifyFollow
            completeSpotifySave
            completeSpotifyPlay
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteContestSubscription = /* GraphQL */ `
  subscription OnDeleteContestSubscription($owner: String) {
    onDeleteContestSubscription(owner: $owner) {
      id
      contestID
      enduserID
      referralEnduserID
      enduserPoints
      completeStreetTeamJoin
      completeSpotifyFollow
      completeSpotifySave
      completeSpotifyPlay
      createdAt
      updatedAt
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      referralEnduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        pictureID
        testPictureUrl
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
        owner
        actions {
          items {
            id
            preActionText
            postActionText
            pointValue
            contestID
            url
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        subscribers {
          items {
            id
            contestID
            enduserID
            referralEnduserID
            enduserPoints
            completeStreetTeamJoin
            completeSpotifyFollow
            completeSpotifySave
            completeSpotifyPlay
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateEnduserContestActions = /* GraphQL */ `
  subscription OnCreateEnduserContestActions($owner: String) {
    onCreateEnduserContestActions(owner: $owner) {
      id
      enduserID
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionID
      action {
        id
        preActionText
        postActionText
        pointValue
        contestID
        actionType {
          id
          value
          createdAt
          updatedAt
          owner
        }
        url
        createdAt
        updatedAt
        contest {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
          owner
          actions {
            nextToken
          }
          subscribers {
            nextToken
          }
        }
        owner
        enduserActions {
          items {
            id
            enduserID
            actionID
            status
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateEnduserContestActions = /* GraphQL */ `
  subscription OnUpdateEnduserContestActions($owner: String) {
    onUpdateEnduserContestActions(owner: $owner) {
      id
      enduserID
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionID
      action {
        id
        preActionText
        postActionText
        pointValue
        contestID
        actionType {
          id
          value
          createdAt
          updatedAt
          owner
        }
        url
        createdAt
        updatedAt
        contest {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
          owner
          actions {
            nextToken
          }
          subscribers {
            nextToken
          }
        }
        owner
        enduserActions {
          items {
            id
            enduserID
            actionID
            status
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteEnduserContestActions = /* GraphQL */ `
  subscription OnDeleteEnduserContestActions($owner: String) {
    onDeleteEnduserContestActions(owner: $owner) {
      id
      enduserID
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        referredSubscribers {
          items {
            id
            actionPageID
            enduserID
            referralEnduserID
            enduserPoints
            completedActionButtonIDs
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionID
      action {
        id
        preActionText
        postActionText
        pointValue
        contestID
        actionType {
          id
          value
          createdAt
          updatedAt
          owner
        }
        url
        createdAt
        updatedAt
        contest {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
          owner
          actions {
            nextToken
          }
          subscribers {
            nextToken
          }
        }
        owner
        enduserActions {
          items {
            id
            enduserID
            actionID
            status
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
