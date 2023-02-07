import ListHeader from './components/ListHeader';

const App = ({ listName }) => {
  return (
    <div className='app'>
      <ListHeader listName={'🏖️ My Holiday Checklist'} />
    </div>
  );
};

export default App;
