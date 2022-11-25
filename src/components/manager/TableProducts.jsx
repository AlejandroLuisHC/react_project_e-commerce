import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../spinner/Spinner'
import { H2 } from '../style/H2'
import { SectionProducts, TableProductsInfo } from '../style/managementStyle';
import fetchBands from '../../api/fetchBands'
import fetchAlbums from '../../api/fetchAlbums';

const TableProducts = () => {
    // Store all bands
    const { data : bands, status : bandsStatus } = useQuery({ queryKey: ['bands'], queryFn: fetchBands});

    // Store all albums
    const [albums, setAlbums] = useState([]);
    
    useEffect(() => {
        bands?.map( async b => {
            const albumsData = await fetchAlbums(b.data);
            setAlbums(prev => prev = [...prev, albumsData])
        })
    }, [bands])

    return (
        <SectionProducts>
            <H2>Table of products</H2>
            <TableProductsInfo className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Release</th>
                        <th>Image path</th>
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {bandsStatus === 'loading' 
                        ? <Spinner />
                        : bandsStatus === 'error'
                        ? <H2>There has been a problem accessing the database. Please, try refreshing the page.</H2>
                        : albums.flat()?.map(e =>
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.price}</td>
                                <td>{e.stock}</td>
                                <td>{e.release}</td>
                                <td>{e.img}</td>
                                {/* <td><button className='btn btn-warning btn-sm'>Edit</button></td> */}
                            </tr> 
                        )
                    }
                </tbody>
            </TableProductsInfo>
        </SectionProducts>
    )
}

export default TableProducts