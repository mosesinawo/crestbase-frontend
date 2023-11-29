import Header from '@/components/Header'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Slider from 'react-slick'
import { ApartmentData, ApartmentResponse, Features } from '../../../types/asset.types';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Head from 'next/head';

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
    const objtoarray = (data: any) => {
        // Convert the object to a list of key-value pairs using Object.entries()
        if (data && item?.features) {
            const list = Object.entries(data)?.map(([key, value]) => ({ key, value }));
            return list;

        }
    };
    const features = objtoarray(item?.features)

    console.log(features)

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
    }


    const shareUrl = `https://staging-crestbase-frontend.vercel.app/assetDetails/${item?._id}`;
    const imageUrl = `${item?.views[0].url}`;

    console.log(imageUrl)

    return (
        <>
           {item && <Head>
                <title>{item?.name || 'Property Details'}</title>
                <meta name="description" content={item?.description || 'Property description'} />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={item?.name || 'Property Details'} />
                <meta property="og:description" content={item?.description || 'Property description'} />
                <meta property="og:image" content={imageUrl || 'default-image-url'} />
                <meta property="og:url" content={shareUrl} /> {/* Use shareUrl instead of url */}
            </Head>}
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
                                {features?.map((item: any, index:number) => (
                                    <p key={index}>{item.key}: <span>{item.value}</span></p>
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
                                {item?.inspectionSchedule.map((item, index:number) => (
                                    <div className='d-flex align-items-center me-3' key={index}>
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