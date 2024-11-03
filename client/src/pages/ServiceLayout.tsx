import { useParams } from 'react-router-dom'
import useService from '../Hooks/useService'
import Servicelist from '../components/service/Servicelist'
import ServiceListBanner from '../components/service/ServiceListBanner'
import LoadingSpinner from '../components/Home/LoadingSpinner'

const ServiceLayout = () => {
    const { slug } = useParams()
    const { serviceList, isLoading } = useService(slug as string)

    if (isLoading) return <LoadingSpinner />

    return (
        <>
            {
                serviceList.map((mainService) => (
                    <div key={mainService._id}>
                        <ServiceListBanner
                            serviceName={mainService.name}
                            serviceImage={mainService.image}
                            serviceDescription={mainService.description}
                        />

                        <div className='mt-12'>
                            {
                                mainService.result.map((item) => (
                                    <Servicelist
                                        key={item._id}
                                        mainServiceID={mainService._id}
                                        mainServiceSlug={mainService.slug}
                                        _id={item._id}
                                        name={item.name}
                                        type={item.type}
                                        address={item.address}
                                        phone={item.phone}
                                        image={item.image}
                                        branch={item.branch}
                                        founded={item.founded}
                                        campus={item.campus}
                                        students={item.students}
                                        contact={item.contact}
                                        location={item.location}
                                        description={item.description}
                                        destinations={item.destinations}
                                        email={item.email}
                                        website={item.website}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ServiceLayout
