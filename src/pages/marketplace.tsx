import Header from '@/components/Header'
import React from 'react'
import ApartmentCard from '../../public/icons/apartmentCard'


const Marketplace = () => {

    const categories = [
        // {
        //   title: 'Real Estate Companies',
        //   image: icons.card_icon1,
        //   color: '#F1A5C226',
        //   route: 'realEstateCompanies',
        // },
        {
            title: "Rent Estate Companies/ Agent",
            image: "./icons/real-estate.svg",
            color2: "#F1A5C226",
            color: "#FCEDF3",
            route: "RentApartment",
        },
        {
            title: "Rent Apartment",
            image: "./icons/apartment.svg",
            color: "#3D79EF1A",
            color2: "#3d79ef19",
            route: "BuyProperty",
        },
        {
            title: 'Short Lets',
            image: "./icons/real-estate.svg",
            color: '#FCEDF3',
            color2: '#010101',

            route: 'BookEventHall',
        },
        {
            title: "Buy Land",
            image: "./icons/land.svg",
            // color: '#F1A5C226',
            // color2: '#F1A5C2',
            color2: "#35A1621A",
            color: "#35A1621A",
            route: "BuyLand",
        },
        {
            title: "Buy Properrty",
            image: "./icons/property.svg",
            // color: '#F1A5C226',
            // color2: '#F1A5C2',
            color2: "#35A1621A",
            color: "#ECF2FD",
            route: "BuyLand",
        },
    ]

    return (
        <>
            <Header />
            <div className="container market ">
                <div className="row market-category">
                    <h5>Explore Categories</h5>
                    {categories.map((item) => (
                        <div className='market-category-card' style={{ backgroundColor: `${item.color}` }}>
                            <img src={item.image} alt="image" />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container market-apartment">
                <div className='d-flex justify-content-between mb-2'>
                    <h6>Rent Apartments</h6>
                    <h6>View All</h6>
                </div>

                <div className="row gap-5">
                    <ApartmentCard />
                    <ApartmentCard />
                    <ApartmentCard />
                </div>
            </div>

            <div className='market-line'/>

            <div className="container market-apartment">
                <div className='d-flex justify-content-between mb-2'>
                    <h6>Fast Selling Properties</h6>
                    <h6>View All</h6>
                </div>

                <div className="row gap-5">
                    <ApartmentCard />
                    <ApartmentCard />
                    <ApartmentCard />
                </div>
            </div>

            <div className='market-line'/>

            
            <div className="container market-apartment">
                <div className='d-flex justify-content-between mb-2'>
                    <h6>Short Lets</h6>
                    <h6>View All</h6>
                </div>

                <div className="row gap-5">
                    <ApartmentCard />
                    <ApartmentCard />
                    <ApartmentCard />
                </div>
            </div>

            <div className='market-line'/>

            <div className="container market-apartment mb-5">
                <div className='d-flex justify-content-between mb-2'>
                    <h6>Fast Selling Lands</h6>
                    <h6>View All</h6>
                </div>

                <div className="row gap-5">
                    <ApartmentCard />
                    <ApartmentCard />
                    <ApartmentCard />
                </div>
            </div>
        </>
    )
}

export default Marketplace