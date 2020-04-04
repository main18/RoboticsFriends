import React, {Component} from 'react'; 
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import {setSearchField, requestRobots} from '../actions';
import {connect} from 'react-redux';


const mapStateToProps = (state) =>{
    return{
        searchField: state.searchRobots.searchField,
        robots : state.requestRobots.robots,
        isPending : state.requestRobots.isPending,
        error : state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onSearchChange : (event) => dispatch(setSearchField(event.target.value)),

        //requestRobots ==> action
        onRequesRobots : () => dispatch(requestRobots())
    }
}

class App extends Component {

componentDidMount(){
    this.props.onRequesRobots();
}

    render(){
        const {searchField,onSearchChange,robots,isPending} = this.props;
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ?
            <h1 className='tc'>Loading</h1>:
        (
            <div  className='tc'>
                 <h1 className='f1'>RoboFriends</h1>
                <SearchBox SearchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }

    }
//the App component is now subscribed to any states changes in the redux store
export default connect(mapStateToProps , mapDispatchToProps)(App);