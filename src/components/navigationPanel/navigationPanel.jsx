import React from "react";
import './navigationPanel.css';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../reducers/reposReducer";

function NavigationPanel(){

    const pages = [];
    const currentPage = useSelector(state => state.reposes.currentPage);
    const perPage = useSelector(state => state.reposes.perPage);
    const totalCount = useSelector(state => state.reposes.totalCount);
    const dispatch = useDispatch();
    const totalPages = Math.ceil(totalCount / perPage);
    createPages(pages, totalPages, currentPage);

    function createPages(pages, totalPages, currentPage){
        if(totalPages > 10){
            if(currentPage > 5){
                for (let i=currentPage-4; i <= currentPage+5;i++){
                    pages.push(i)
                    if(i == totalPages){
                        break;
                    }
                }
            } else {
                for (let i = 1; i<=10; i++){
                    pages.push(i);
                    if(i == totalPages){
                        break
                    }
                }
            }
        } else {
            for (let i = 1; i <=totalPages; i++){
                pages.push(i);
            }
        }
    }



    return (
        <div className='navigation-panel'>
            {pages.map((page,index) =>{
                return (
                    <span
                        key={index}
                        className={ currentPage==page ?'currentPage' : 'page'}
                        onClick={() => dispatch(setCurrentPage(page))}
                    >
                        {page}
                    </span>
                )
            })}
        </div>
    );
}

export default NavigationPanel;
