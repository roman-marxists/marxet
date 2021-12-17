import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "@context/auth";
import {
  Stack,
  ImageList,
  ImageListItem,
  Typography,
  Button
} from "@mui/material";
import { doGetProductById } from "@api/product";

import OfferModal from "@components/modals/Offer";


const Product = () => {
  const { user } = useAuth();
  const router = useRouter();
  const { productId } = router.query;
  const listingID = `listing-${productId}`;
  const [ listing, setListing ] = useState({});

  const fetchProduct = async () => {
    try {
      const data = await doGetProductById(productId);
      setListing(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (listing !== {}) {
    return (
      <Stack className="listing" id={listingID} direction="row" sx={{border: 'black 10px solid', margin: '15px', height: '85vh'}} >
        <ImageList
          className="photos-container"
          variant="quilted"
          sx={{
            maxHeight: '90vh',
            width: '50vw',
            yOverflow: 'scroll',
            margin: '15px'
          }}
        >
          { listing.photos ? listing.photos.map( (photo, i) => (
            <ImageListItem key={i}>
              <img src={'https://source.unsplash.com/random/?melons'} />
            </ImageListItem>
          )) : <ImageListItem>Lister has not uploaded any photos</ImageListItem>}
        </ImageList>
        <br />
        <Stack className="listing-info-container" sx={{justifyContent: 'space-between', border: '#801f12 10px solid', width: '40vw', margin: '15px'}}>
          <span className='plain-text' style={{fontSize: '40px'}}>{listing.name}</span>
          <span className='plain-text' style={{fontSize: '25px'}}>{listing.description}</span>
          {/* Waiting on Category, metadata */}
          <br />
          <Stack id='listing-button-container' sx={{alignItems: 'center', marginBottom: '10px'}}>
            { user ?
              <Button variant="outlined" color="secondary" sx={{width: '50%'}}>
                Make an offer
              </ Button>
              :
              <Link href='/login'>
                <Button variant="outlined" color="secondary" sx={{width: '50%'}}>
                  Log in to make an offer
                </ Button>
              </Link>
            }
            { user ?
              <OfferModal />
              :
              null
            }
            {/* <OfferModal /> */}
            <Button variant='contained' color='secondary' sx={{width: '30%', marginTop: '5px'}}>View seller</Button>
          </ Stack>
        </ Stack>
      </ Stack>
    )
  }
};

/*
TODO:
☑️ Divide component into two containers
☑️ DECIDE: Quilt or woven variant for ImageList
☑️ Create ImageList and map listing's photos into ImageListItems
☑️ IF there are no images, render the message "Lister has not uploaded any images"
☑️ Create Stack container for listing's name, category, description, etc.
☑️ IF the user is not logged in, replace the `Make Offer` button with a `Log in to make an offer` button that redirects user to login page
*/

export default Product;
