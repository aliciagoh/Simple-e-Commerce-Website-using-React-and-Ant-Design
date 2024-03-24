import React from "react";
import { Routes, Route } from "react-router-dom";
import Mission from "../../Pages/About Us/Mission";
import WhatWeOffer from "../../Pages/About Us/WhatWeOffer";
import ViewEvents from "../../Pages/Events/BrowseEvents";
import EventDetails from "../../Pages/Events/EventData/EventDetails"; // Import the EventDetails component
import LatestHappenings from "../..//Pages/Community/LatestHappenings"
import ArticleDetails from '../../Pages/Community/ArticleDetails'; // Import the new component
import dummyArticles from '../../Pages/Community/dummyArticles'; 
import NewPostForm from "../../Pages/Community/NewPostForm";
import SilverThreads from "../../Pages/Community/SilverThreads";
import WeeklyGatherings from "../../Pages/Community/WeeklyGatherings";
import HomePage from "../../Pages/Home/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/mission-statement" element={<Mission />} />
      <Route path="/what-we-offer" element={<WhatWeOffer />} />
      <Route path="/browse-events" element={<ViewEvents />} />
      <Route path="/browse-events/event/:eventId" element={<EventDetails />} />
      <Route path="/latest-happenings" element={<LatestHappenings />} />
      <Route path="/latest-happenings/:articleId" element={<ArticleDetails articles={dummyArticles} />} />
      <Route path="/silver-threads" element={<SilverThreads />} />
      <Route path="/silver-threads/new" element={<NewPostForm />} />
      <Route path="/weekly-gatherings" element={<WeeklyGatherings />} />
      
    </Routes>
  );
}

export default AppRoutes;
