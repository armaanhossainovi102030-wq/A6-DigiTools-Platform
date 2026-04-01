import React, { use } from 'react';
import CardMain from '../CardMain';

const Card = ({CardPromise,Carts,setCarts}) => {
const CardInfos =use(CardPromise)
    console.log(CardInfos)


    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[80%] mx-auto space-y-3'>
                {
                    CardInfos.map(CardInfo=>{
                        return(
                            <CardMain CardInfo={CardInfo} Carts={Carts} setCarts={setCarts} />
                        )
                    })
                }
            </div>
            
            
        </div>
    );
};

export default Card;