import {useEffect, useState} from "react";
import {getReposes} from "../../actions/reposActions";
import {useDispatch, useSelector} from "react-redux";
import Repos from '../repos/repos.jsx';
import SearchPanel from "../searchPanel/searchPanel";
import NavigationPanel from '../navigationPanel/navigationPanel';
import {setCurrentPage} from "../../reducers/reposReducer";

function ReposesList() {

    const dispatch = useDispatch();
    const reposes = useSelector(state => state.reposes.items);
    const [searchValue, setSearchValue] = useState('');
    const currentPage = useSelector(state => state.reposes.currentPage);
    const perPage = useSelector(state => state.reposes.perPage);


    useEffect(() => {
        dispatch(getReposes(searchValue, currentPage, perPage));
    },[currentPage])

    const onSearch = (event) => {
        event.preventDefault();
        dispatch(setCurrentPage(1));
        dispatch(getReposes(searchValue,currentPage, perPage));
    }

    return (
        <>
            <SearchPanel
                value={searchValue}
                onChangeValue={(event) => setSearchValue(event.target.value)}
                onSearch={onSearch}
            />
            <div>
                {reposes.map(repos => <Repos key={repos.id} repos={repos}/>)}
            </div>
            <NavigationPanel/>
        </>
    );
}

export default ReposesList;