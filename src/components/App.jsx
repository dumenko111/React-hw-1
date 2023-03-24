import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import FriendList from '../components/Friends/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';
import transactions from './TransactionHistory/transaction.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />;
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
