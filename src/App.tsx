import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProgressPage } from "./pages/progressPage";
import { AwardsPage } from "./pages/awardsPage";
import { CommunityPage } from "./pages/communityPage";
import { JourneyPage } from "./pages/journeyPage";
import { LeaguePage } from "./pages/leaguePage";
import { GoalsPage } from "./pages/goalsPage";
import { EventDetailPage } from "./pages/eventDetailPage";
import {FriendsPage} from "./pages/friendsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={ProgressPage} />
        <Route path="/awards" Component={AwardsPage} />
        <Route path="/community" Component={CommunityPage} />
        <Route path="/journey" Component={JourneyPage} />
        <Route path="/goals" Component={GoalsPage} />
        <Route path="/league" Component={LeaguePage} />
        <Route path="/eventDetail" Component={EventDetailPage} />
        <Route path="/friends" Component={FriendsPage} />
        <Route Component={ProgressPage} />
      </Routes>
    </Router>
  );
}

export default App;
