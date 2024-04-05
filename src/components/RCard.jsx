import { Card,Stack,Text,Image } from 'react-ui'

export default function RCard({product_details}){
return(
<Card>
  <Stack justify="center">
    <Stack justify="space-between" align="center">
    <Stack direction="vertical" align="flex-end">
        <Text size={5}>Price : ${product_details?.price}</Text>
        <Text size={5} >{product_details?.title}</Text>
      </Stack>
    
    </Stack>
   

      <Stack direction="vertical" align="flex-start">
      <Image
  alt="sky full of stars"
  src={product_details.image}
/>
      </Stack>

  </Stack>
</Card>
);
}