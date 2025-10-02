import ProductCard from "./ProductCard";

const products = [
  {
    id:1, title:"Margherita Pizza",
    img:"https://yumtonight.com/wp-content/uploads/2025/01/Mushroom-Pizza-Margherita-1.jpg",
    oldPrice:"40.00", price:"24.00", flag:"SALE"
  },
  {
    id:2, title:"Mushroom Pizza",
    img:"https://allforpizza.com/wp-content/uploads/2022/10/Mushroom-and-white-sauce-pizza-16.jpg",
    price:"25.00"
  },
  {
    id:3, title:"Hawaiian Pizza",
    img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge_EpituiIpq3ENaHfAe5CWcdE4AA1URv6et_fCEGxJk4M1sqFv71uis2JKJiRJ5Cc3oGPwQz41tgsp0-O3G9XgWrnec3-AfL7ese7rFrTegx_Aq9NtRyui-Tis1nBoRfubYa9X7EJBERXoKyXS8N_ILSYgI_AeI8e0npEupj_pvJ9uOEAIs7EBFpT/s16000/Pesto%20Margherita%20Pizza.jpg",
    price:"30.00", flag:"NEW"
  },
  {
    id:4, title:"Pesto Pizza",
    img:"https://www.myfoodbag.co.nz/wp-content/uploads/2023/11/Best-Ever-Creamy-Pesto-Mushroom-Pizzas.jpg",
    oldPrice:"50.00", price:"16.00", flag:"SALE"
  }
];

export default function ProductList(){
  return (
    <div className="container pb-4">
      <div className="row g-4">
        {products.map(p=>(
          <div className="col-12 col-sm-6 col-lg-3" key={p.id}>
            <ProductCard {...p}/>
          </div>
        ))}
      </div>
    </div>
  );
}
