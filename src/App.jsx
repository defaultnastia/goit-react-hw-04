import Profile from './components/Profile/Profile'
import FriendsList from './components/FriendList/FriendsList.jsx'
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx'

import userData from "./data/userData.json" 
import friends from "./data/friends.json"
import transactions from "./data/transactions.json"

const App = () => 
    (<>
    <div>
    <Profile {...userData} />
    <FriendsList friends={friends} />
    <TransactionHistory transactions={transactions} />
    </div>
</>)
    
// I changed props names so that json can be destructured, but if it was not allowed ===> another version of const App can be uncommented along with another const Profile in the proper component ('./components/Profile/Profile').

// const App = () => 
//     (<>
//     <div>
//     <Profile name={userData.username}
//         tag={userData.tag}
//         location={userData.location}
//         image={userData.avatar}
//         stats={userData.stats} />
//     <FriendsList friends={friends} />
//     <TransactionHistory transactions={transactions} />
//     </div>
//     </>)
  
export default App
