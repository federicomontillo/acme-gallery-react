import React from 'react';

export const Card = ({article}) => {
    return (
        <div>
            <div className="card card__info">
                <img src={article.img} className="card-img-top" alt="image article" />
                    <div className='card__info-container'>   
                        <img src={article.userImg} alt='image user'/>
                        <div className='card__info-container'>
                            <h3 className="card-title">{article.userName}</h3>
                            <p className="card-text">#{article.title}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
