import Header from '@/components/Header'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Slider from 'react-slick'
import { ApartmentData, ApartmentResponse, Features } from '../../../types/asset.types';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Feature {
    key: string;
    value: number;
}

const AssetSetails = () => {
    const [item, setItem] = useState<ApartmentData | null>(null);

    const router = useRouter();
    const { id } = router.query;

    console.log(id)

    const getData = async () => {
        try {
            const { data } = await axios.get(`https://crestbase-be2.herokuapp.com/assets/${id}`)
            setItem(data.data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (id) {
            getData()
        }
    }, [id])
    console.log(item)
    // const featuresArray: Feature[] = Object.entries(item?.features).map(([name, count]) => ({
    //     name,
    //     count,
    // }));
    const objtoarray = (data:any) => {
        // Convert the object to a list of key-value pairs using Object.entries()
        if (data && item?.features) {
            const list = Object.entries(data)?.map(([key, value]) => ({ key, value }));
            return list;

        }
    };
    const features = objtoarray(item?.features)

    console.log(features)

    const hotelCards = [
        {
            imageSrc:
                'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
            title: 'Studio Room',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 50/Day',
            features: ['Free Wifi', 'Free breakfast'],
        },
        {
            imageSrc:
                'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            title: 'Deluxe Room',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 80/Day',
            features: ['Free Wifi', 'Free breakfast'],
        },
        {
            imageSrc:
                'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
            title: 'King Deluxe Room',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 150/Day',
            features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
        },
        {
            imageSrc:
                'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Royal Suite',
            description: 'Lorem ipsum dolor sit amet, consectur dolori',
            pricingText: 'USD 299/Day',
            features: [
                'Free Wifi',
                'Free breakfast',
                'Discounted Meals',
                "MacBook for work use (hotel's property)",
            ],
        },
    ]

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
    }

    return (
        <>
            <section className="container details mt-5">
                <div className="row">
                    <div className="col-lg-7 col-md-11 mx-auto">
                        <div className="details-img">
                            <Slider {...sliderSettings}>
                                {item?.views.map((view, index) => (
                                    <div key={index} className='position-relative'>
                                        {view.url.endsWith('.mp4') ? ( // Check if the URL ends with '.mp4' to identify it as a video
                                            <video controls className='details-img-content' >
                                                <source src={view.url} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : (
                                            <img src={view.url} alt={view.name} className='details-img-content' />
                                        )}
                                        <p className='details-img-content-tag'>{index + 1}/{item?.views?.length}</p>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        <div className='d-flex flex-column details-info align-items-start'>
                            <div className='d-flex '>
                                <p className='details-type'>{item?.apartmentType?.name}</p>
                                <div className='card-line ' />
                                <p className='details-area'>{item?.location}</p>
                            </div>
                            <div className='d-flex align-items-center mt-3'>
                                <p className='details-price'>{item?.annualPayment}</p>
                                <div className='card-line ' />
                                <p className='details-price'>{item?.totalPrice}</p>
                            </div>

                        </div>


                        <div className="details-info mb-2">
                            <h6>Property Description</h6>
                            <p>{item?.description}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-11 mx-auto">
                        <div className="details-features">
                            <h6>Features</h6>
                            <div className='details-features-list'>
                                {features?.map((item:any) => (
                                    <p>{item.key}: <span>{item.value}</span></p>
                                ))}
                            </div>
                        </div>

                        <div className="details-contact">
                            <h6 className='mb-4'>Contact Agent</h6>
                            <div className='d-flex gap-5'>
                                <img src="/images/details-call.svg" alt="" />
                                <img src="/images/details-whatsapp.svg" alt="" />
                            </div>
                        </div>

                        <div className='details-inspections'>
                            <h6>Inspection Schedule</h6>
                            <div className='details-inspections-list'>
                                {item?.inspectionSchedule.map((item) => (
                                    <div className='d-flex align-items-center me-3'>
                                        <p>{item.date}: </p>
                                        <span>{item.time}</span>
                                    </div>

                                ))}
                                {/* <div className='card-line ' />
                                <p>Tuesdays: <span>10am</span></p> */}

                            </div>
                        </div>

                        <div className="details-profile">
                            <div className='d-flex align-items-start gap-3'>
                                <img src="/images/avatar.svg" alt="" />
                                <div className='d-flex flex-column gap-1'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <p className='details-profile-name'>{item?.agent.user.firstName} {item?.agent.user.lastName}</p>
                                        <span className='details-profile-tag'><img src="/icons/verified.svg" alt="" /> Verified</span>
                                    </div>
                                    <p className='details-profile-type'>Agent</p>
                                </div>
                            </div>
                            <p className='details-profile-text'>Note that this money will not be transferred to the apartment owner until you confirm that you have also verify and satisfied with the apartment.</p>
                        </div>

                        <div className="details-additiional">
                            <p>The information displayed about this property comprises a property advertisement. Crestbase makes no warranty as to the
                                accuracy or completeness of the advertisement or any linked or associated information, and Crestbase has no control over the content.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AssetSetails