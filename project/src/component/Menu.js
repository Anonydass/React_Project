import React,{useState} from "react";
import { Container, Row,Col } from "react-bootstrap";
import PizzaCard from './PizzaCard';
export default function Menu()
{
    const [menu]= useState([1,2,3,4,5,6]);
  return (
 <section id='menu' className="bg-light">
<Container>
    <div className="text-center">
<h3 className="text-primary py-5 my-5">Treat Yourself With Our Every Menu<i className="bi bi-fire"/>
</h3>
</div>
<div>
<Row>
    {menu.map((el)=>{
        return(<Col md={6} lg={4} key={el} ><PizzaCard/></Col>)})}
</Row>
</div>
</Container>

 </section>
  );
}

