import React, { useState } from "react";
import Cover from "../../shared/cover/Cover";
import { Helmet } from "react-helmet-async";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import UseMenu from "../../../hooks/UseMenu";
import OrderTab from "../orderTab/OrderTab";

const Order = () => {
  const [menu] = UseMenu();
  const Categories = ['salad', 'pizza', 'soup' , 'dessert' , 'drinks'];
  const { category } = useParams();
  const initialIndex = Categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const offered = menu.filter((items) => items.category === "offered");
  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  const salad = menu.filter((items) => items.category === "salad");
  const soup = menu.filter((items) => items.category === "soup");
  const drinks = menu.filter((items) => items.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our shop</title>
      </Helmet>
      <Cover
        img={shopImg}
        title="our shop"
        subTitle="Would you like to try a dish?"
      ></Cover>
      <div className="my-4">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUP</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            {" "}
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
