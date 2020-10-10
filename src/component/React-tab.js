import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './React-tab.css';

/**
* @author
* @function Reacttab
**/

const Reacttab = (props) => {
  return(
    <React.Fragment>
    <Tabs>
    <TabList>
      <Tab>Contact</Tab>
      <Tab>Overview</Tab>
    </TabList>
    
    <TabPanel>
       <span class="Phone">Phone Number</span>
        <span class="number">+91 114004588</span>
        <div class="Address">The Big Chill Cakery</div>
        <span class="Address1">Shop 1, Plot D, Samruddhi Complex, Chincholi,</span>
        <div class="Address2">Mumbai-400002, Maharashtra</div>
    </TabPanel>
    <TabPanel>
    <div className="About">About this place</div>

    <div className="Cuisine">Cuisine</div>

    <div className="Meal">Bakery, Fast-food</div>

    <div className="Cost">Average Cost</div>

    <div className="People">₹700 for two people (approx.)</div>
    </TabPanel>
  </Tabs>
    </React.Fragment>
   )

 }

export default Reacttab