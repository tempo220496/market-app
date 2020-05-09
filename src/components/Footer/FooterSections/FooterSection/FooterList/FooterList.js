import React from 'react';
import FooterItem from './FooterItem/FooterItem';
import uniqid from "uniqid";

const FooterList = ({footerList}) => {
    //const footer_item=[];
    //for(let item of footerList){
    //    footer_item.push(<FooterItem footerItemLink={item} />);
    //}
    //footerList.forEach(footerItem=>footer_item.push(<FooterItem footerItemLink={footerItem} />));
    return (
        <ul className="footer__list">
            {/*footerList.forEach(footerItem=><FooterItem footerItemLink={footerItem} />) This method doesn't work anyway*/}
            {/*footer_item*/}
            {footerList.map(footerItem=><FooterItem key={uniqid()} footerItemLink={footerItem} />)}
        </ul>
    );
}

export default FooterList;
