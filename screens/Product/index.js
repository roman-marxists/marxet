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

/* (Done!)
☑️ Divide component into two containers
☑️ DECIDE: Quilt or woven variant for ImageList
☑️ Create ImageList and map listing"s photos into ImageListItems
☑️ IF there are no images, render the message "Lister has not uploaded any images"
☑️ Create Stack container for listing"s name, category, description, etc.
☑️ IF the user is not logged in, replace the `Make an offer` button with a
  `Log in to make an offer` button that redirects user to login page
*/

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
          <Stack className="listing-text-container" sx={{justifyContent: "space-between", marginLeft: "10px"}}>
            <div className="plain-text" style={{fontSize: "60px"}}>{listing.name}</div>
            <div>Listed by {listing.createdBy ? listing.createdBy : "an anonymous user"} on {listing.createdAt ? listing.createdAt.substring(0, 10) : "an unknown date"}</div>
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
            { user ?
              <OfferModal />
              :
              null
            }
            <Button variant="contained" color="secondary" sx={{width: "30%", marginTop: "5px"}}>View seller</Button>
          </ Stack>
        </ Stack>
      </ Stack>
    )
  }
};

export default Product;

/*
<Button variant="outlined" color="secondary" sx={{ width: "50%" }}>
  Make an offer
</ Button>
*/