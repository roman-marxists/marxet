import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "@context/auth";
import {
  Stack,
  ImageList,
  ImageListItem,
  Typography,
  Button,
  Divider
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
      console.log('DATA: ', data);
      setListing(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Stack className="listing" direction="row" sx={{margin: "15px", height: "85vh"}} >
      <ImageList
        className="photos-container"
        variant="quilted"
        sx={{
          height: "90vh",
          width: "50vw",
          margin: "15px",
          border: "#c7d6d5 2px solid"
        }}
      >
        {/* { listing.photos.length ? listing.photos.map( (photo, i) => (
          <ImageListItem key={i}>
            <img src={photo} />
          </ImageListItem>
        )) : <ImageListItem>Lister has not uploaded any photos</ImageListItem>} */}
        <img src={listing.photos[0]} />
      </ImageList>
      <br />
      <Stack className="listing-info-container"
        sx={{
          justifyContent: "space-evenly",
          border: "#801f12 3px solid",
          borderRadius: "20px",
          width: "40vw",
          margin: "15px"
        }}
      >
        <Stack className="listing-text-container plain-text" sx={{justifyContent: "space-between", marginLeft: "35px"}}>
          <div style={{fontSize: "50px"}}>{listing.name}</div>
          <div style={{marginLeft: "2px"}}>Listed by {listing?.createdBy?.username} on {listing?.createdAt.substring(0,10)}</div>
          { listing.createdAt !== listing.updatedAt ?
            <div>Last updated on {listing.updatedAt.substring(0,10)}</div>
            :
            null
          }
          <br />
          <div className="plain-text" style={{fontSize: "20px"}}>{listing.description}</div>
        </Stack>
        <Divider sx={{alignSelf: "center", width: "70%"}}/>
        <Stack id="listing-button-container" sx={{alignItems: "center", marginBottom: "10px"}}>
          { user ?
            <OfferModal />
            :
            <Link href="/login">
              <Button variant="outlined" color="secondary" sx={{ width: "50%" }}>
                Log in to make an offer
              </ Button>
            </Link>
          }
          <Button variant="contained" color="secondary" sx={{width: "30%", marginTop: "5px"}}>View seller</Button>
        </ Stack>
      </ Stack>
    </ Stack>
  )
};

export default Product;
