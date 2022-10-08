import React from 'react'
import client1 from '../assets/client1.png'

export const OurClients = () => {
    const clients = [
        {
            id: 1,
            logo: client1 
        },
        {
            id: 2,
            logo: client1 
        },
        {
            id: 3,
            logo: client1 
        },
        {
            id: 4,
            logo: client1 
        },
        {
            id: 5,
            logo: client1 
        },
        {
            id: 6,
            logo: client1 
        },
        {
            id: 7,
            logo: client1 
        },
        {
            id: 8,
            logo: client1 
        },
        {
            id: 9,
            logo: client1 
        },
        {
            id: 10,
            logo: client1 
        },
        {
            id: 11,
            logo: client1 
        },
        {
            id: 12,
            logo: client1 
        },
        {
            id: 13,
            logo: client1 
        },
        {
            id: 14,
            logo: client1 
        },
        {
            id: 15,
            logo: client1 
        },
    ]
  return (
    <div className='container mx-auto my-9'>
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-4/12 flex justify-center items-center'>
                <h6 className='font-bold text-4xl my-9'>
                    Our Clients
                </h6>
            </div>
            <div className='w-full md:w-8/12 grid grid-cols-3 gap-4 ml-3'>
                {
                    clients.map(client=> (
                        <div className='py-5 w-full mx-auto mb-3 rounded-md' style={{
                            boxShadow: '0px 3px 25px rgba(0, 0, 0, 0.1)'
                        }} >
                            <img src={client.logo} className="mx-auto" key={client.id} alt="client" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default OurClients