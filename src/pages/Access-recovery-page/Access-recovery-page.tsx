import React, {useState} from 'react';
import Header from "../../Components/Header/Header";
import {AccessRecoveryItem} from "../../Components/Access-recovery/Access-recovery-item";
import {stageAccessRecovery} from "../../types/enums";

export const AccessRecoveryPage = () => {

    const [order, setOrder] = useState<number>(0)

    const AccessRecoveryItems = () => {
        switch (order) {
            case 0:
                return <AccessRecoveryItem stage={stageAccessRecovery.email} order={order} setOrder={setOrder}/>
            case 1:
                return <AccessRecoveryItem stage={stageAccessRecovery.password} order={order} setOrder={setOrder}/>
        }
    }

    console.log("render")

    return (
        <div className={'access-recovery-page'}>
            <Header title={'Восстановление доступа'} />
            {AccessRecoveryItems()}
        </div>
    );
};

