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
      console.log('CURRENT LISTING: ', data);
      setListing(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProduct();
    console.log('FETCHING PRODUCT');
  }, []);

  if (listing !== {}) {
    return (
      <Stack className="listing" id={listingID} direction="row" sx={{margin: "15px", height: "85vh"}} >
        <ImageList
          className="photos-container"
          variant="quilted"
          sx={{
            width: "auto",
            maxHeight: "90vh",
            maxWidth: "50vw",
            yOverflow: "scroll",
            margin: "15px",
            border: "#c7d6d5 2px solid"
          }}
        >
          { listing.photos ? listing.photos.map( (photo, i) => (
            <ImageListItem key={i}>
              <img src={"https://source.unsplash.com/random/"} />
            </ImageListItem>
          )) : <ImageListItem>Lister has not uploaded any photos</ImageListItem>}
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
            <div style={{fontSize: "60px"}}>{listing.name}</div>
            <div style={{marginLeft: "2px"}}>Listed by {listing.createdBy ? listing.createdBy : "an anonymous user"} on {listing.createdAt ? listing.createdAt.substring(0, 10) : "an unknown date"}</div>
            { listing.createdAt !== listing.updatedAt ?
              <div>Last updated on {listing.updatedAt.substring(0,10)}</div>
              :
              null
            }
            <div className="plain-text" style={{fontSize: "30px"}}>{listing.description}</div>
            {/* Waiting on Category, metadata */}
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
  }
};

export default Product;
