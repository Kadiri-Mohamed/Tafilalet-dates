import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = (props) => {
  return (
    <footer className="footer bg-black text-white p-2">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="image">
              <img src="tafilalet-dattes.png" className="img-fluid w-28" alt="logo" />
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <h4 className="text-2xl ">Informations</h4>
            <ul className="list-none">
              <li ><a className="hover:text-[#ffd700]" href="#">A propos</a></li>
              <li ><a className="hover:text-[#ffd700]" href="#">Contact</a></li>
              <li ><a className="hover:text-[#ffd700]" href="#">Mentions légales</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12">
            <h4 className="text-2xl">Services</h4>
            <ul className="list-none ">
              <li ><a className="hover:text-[#ffd700]" href="#">Livraison</a></li>
              <li ><a className="hover:text-[#ffd700]" href="#">Retour</a></li>
              <li ><a className="hover:text-[#ffd700]" href="#">Paiement sécurisé</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12">
            <h4 className="text-2xl">Newsletter</h4>
            <form action="">
              <input type="email" className="border-2 rounded-md p-1 text-black" placeholder="Votre email" />

              <button className="bg-[#efd338b1] text-black rounded-md p-1 ml-2 mt-4 hover:bg-[#ffd700] " type="submit" >Envoyer</button>
            </form>
          </div>
        </div>
        <hr className="border-white my-4" />
        <div className="flex justify-between">
          <p className="text-white">© 2024 - Tous droits réservés</p>
          <div className="flex">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="mr-4"><FaFacebook size={25} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram  size={25}/></a>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
