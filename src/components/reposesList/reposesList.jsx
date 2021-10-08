import {useState} from "react";
import SearchPanel from "../searchPanel/searchPanel";
import Reposes from "../reposes/reposes";

function ReposesList() {

    const [searchValue, setSearchValue] = useState('');

    const onSearch = (event) => {
        event.preventDefault();
    }

    const message =
        <div>
            Введите поискаовый запрос...
        </div>

    return (
        <>
            <SearchPanel
                value={searchValue}
                onChangeValue={(event) => setSearchValue(event.target.value)}
                onSearch={onSearch}
            />
            {searchValue === '' ? message : <Reposes searhValue={searchValue}/> }
        </>
    );
}

export default ReposesList;