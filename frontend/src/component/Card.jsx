import React from 'react'

function Card() {
    return (
        <div className='flex items-center justify-center w-fit'>
            <div className="card bg-base-100 w-72 shadow-xl ">
                <figure className='lg:h-80 aspect-h-1 aspect-w-1 w-full lg:aspect-none group-hover:opacity-75'>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className='h-20 w-full object-cover object-center lg:h-full lg:w-full'
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Card