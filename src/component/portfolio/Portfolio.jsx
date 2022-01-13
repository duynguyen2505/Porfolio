
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { useState, useEffect } from "react"
import {featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio}  from"../../data"
import { SettingsSystemDaydreamTwoTone } from "@material-ui/icons"


export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data,setData] = useState([])
    
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "desing",
            title: "Desing"
        },
        {
            id: "brand",
            title: "Branding"
        },

    ]

    useEffect(() => {
        switch(selected) {
                    case "featured" :
                                setData(featuredPortfolio)     
                                break;    
                    case "web" :
                                setData(webPortfolio)     
                break; 
                    case "mobile" :
                                setData(mobilePortfolio)     
                                break; 
                    case "desing" :
                                setData(designPortfolio)     
                                break; 
                    case "brand" :
                                setData(contentPortfolio)     
                                break; 
                    default:
                                setData(featuredPortfolio)     
                                break;                
                       
        }
    },[selected])

    return (
        <div className='portfolio' id="portfolio">
            <h1>Portfolio</h1>
            <ul>
               {list.map(item => (
                   <PortfolioList   title={item.title} 
                                    active= {selected === item.id} 
                                    setSelected= {setSelected}
                                    id = {item.id} />
               ))}
            </ul>
            <div className="container">
                {data.map((dat) => (
                <div className="item">
                    <img src={dat.img} alt="" />
                    <h3>{dat.title}</h3>
                </div>
                ))}
                
            </div>
        </div>
    )
}
