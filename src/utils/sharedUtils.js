import { data } from 'browserslist';
import { getAllActionPagesAndSubscriptionDetailsByArtist } from '../graphql-custom/queries';

export const compareId = (key, order = 'asc') => {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }

        const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return order === 'desc' ? comparison * -1 : comparison;
    };
}

export const cleanUrl = (urlString) => {
    var link = ""
    if (urlString != null) {
        //if the link is a mailto link, don't add HTTP to it
        if (urlString.toUpperCase().includes("MAILTO:")) {
            link = urlString;
        }
        else {
            link = (urlString.indexOf('://') === -1) ? 'http://' + urlString : urlString;
        }
    }
    return link;
}

export const getTotalPointsByEnduserIdAndActionPage = (enduserId, artistRoute) => { 
    
    let enduserResult = {};
    let resultPageRoute = "";

    const { data: actionPageAndSubscriptionData } = useQuery(
        gql(getAllActionPagesAndSubscriptionDetailsByArtist),
        {
          variables: { artistRoute: artistRoute },
        }
    );

    // extract the data returned from the query that we care about
    let totalActionPagePoints = 0;
    if (actionPageAndSubscriptionData.items.length > 1) {
        resultPageRoute = data.items.actionPages.items.pageRoute;
        
        let subscriberData = actionPageAndSubscriptionData.items.actionPages.items[0].subscribers.items.filter (subscriber => {
            subscriber.items.enduserId = enduserId    
        });
        
        // loop through all enduser's completedActions to build the total tally
        subscriberData.items.enduser.completedActions.items.forEach(action => {
            totalActionPagePoints += action.pointValue
        });

        subscriberData.enduserPoints = totalActionPagePoints

        enduserResult = [{ resultPageRoute, subscriberData }];
    }
    
    return [enduserResult]
}