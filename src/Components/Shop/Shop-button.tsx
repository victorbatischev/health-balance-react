import React, {FC} from 'react';
import './shop.scss'
import {Link} from "react-router-dom";
import {MAKING_ORDER_ROUTE} from "../../provider/constants-route";
import {RewardCount} from "../Reward/Reward-count";

interface IShopButton {
    title: string,
    rewardCount: number,
    onClick: ()=>void
}

export const ShopButton:FC<IShopButton> = ({rewardCount,title,onClick}) => {
    return (
        <button className="shop-button" onClick={onClick}>
            <span className="shop-button__text text-blue">{title}</span>
            <RewardCount count={rewardCount} fontSize={15}/>
        </button>
    );
};

