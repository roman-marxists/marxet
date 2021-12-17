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
  const userLink = `/users/${user?._id}`;
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

  return (
    <Stack className="listing" direction="row" sx={{margin: "15px", height: "85vh", alignItems: "center"}} >
      <div
        className="photo-container"
        style={{
          alignItems: "center",
          topMargin: "100px",
          width: "800px",
          height: "500px",
          margin: "15px",
          border: "#c7d6d5 2px solid"
        }}
      >
        {/* { listing.photos.length ? listing.photos.map( (photo, i) => (
          <ImageListItem key={i}>
            <img src={photo} />
          </ImageListItem>
        )) : <ImageListItem>Lister has not uploaded any photos</ImageListItem>} */}
        <img src={listing?.photos} style={{width: "800px", height: "500px"}}/>
      </div>
      <br />
      <Stack className="listing-info-container"
        sx={{
          justifyContent: "space-evenly",
          border: "#c7d6d5 3px solid",
          borderRadius: "20px",
          width: "40vw",
          height: 500,
          margin: "15px"
        }}
      >
        <Stack className="listing-text-container plain-text" sx={{justifyContent: "space-between", marginLeft: "25px", marginRight: "25px"}}>
          <div className='display' style={{fontSize: "40px"}}><b>{listing.name}</b></div>
          <div style={{marginLeft: "2px"}}>Listed by {listing?.createdBy?.username ? listing.createdBy.username : "an anonymous user"} on {listing?.createdAt?.substring(0,10)}</div>
          { listing.createdAt !== listing?.updatedAt ?
            <div>Last updated on {listing?.updatedAt?.substring(0,10)}</div>
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
              <Button variant="outlined" color="primary" sx={{ width: "50%" }}>
                Log in to make an offer
              </ Button>
            </Link>
          }
          <Link href={userLink}>
            <Button variant="contained" color="primary" sx={{width: "30%", marginTop: "5px"}}>View seller</Button>
          </Link>
        </ Stack>
      </ Stack>
    </ Stack>
  )
};

export default Product;
