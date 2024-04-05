import TextBox from './Textbox';
import Label from './Label'
import RButton from './RButton';
import RButtonSecondary from './RButtomSecondary';
import {  Stack, ThemeProvider } from 'react-ui'
import { tokens, components } from 'react-ui/themes/dark'
import React, {useEffect,useState} from 'react';
import RCard from './RCard';


export default function SearchSection(){
    let upcTemp = "0"
    const [productdetails, setProductDetails] = useState({});
    const [upc_code, setupcCode] = useState("0"); 
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true); // Set loading state to true
        fetch(`https://api.redcircleapi.com/request?api_key=E03EDDC3244A4580A7449D1DA7812BB6&type=product&gtin=` + upc_code)
        .then(response => response.json()) // Wait for the promise to resolve
        .then(data => {     
          // Now you have the parsed JSON data in 'data'
          console.log(JSON.stringify(data, 0, 2));
          
          setProductDetails({
            price: data.product.buybox_winner.price.value,
            title : data.product.title,
            image : data.product.main_image.link
          });
          setIsLoading(false); // Set loading state to false
          // Use 'data' for further processing
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false); // Set loading state to false
        }); 
            
          
    },[upc_code])
    return (
      <ThemeProvider tokens={tokens} components={components}>
        <Stack>UPC Code:<TextBox onChange={(e) => {upcTemp = e.target.value;}} /> </Stack>  
        <RButton value="Product Lookup" onClick={ProductLookupClick}></RButton>
       
        {isLoading ? (
        <p>Loading product details...</p>
      ) : (
        productdetails.price ? (
        <RCard product_details={productdetails} />
      ) : (<p></p>)
      )}
      <Stack><RButton value = "Yes"></RButton>
      <RButtonSecondary value = "No"></RButtonSecondary> </Stack>
      
      </ThemeProvider>
    );

    function ProductLookupClick(){  
        
       setupcCode(upcTemp)
} 
}
