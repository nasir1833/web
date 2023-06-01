import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PrivateRoute from "./important/PrivateRoute";
import GeneralKnowledge from "./pages/GeneralKnowledge";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPageFound from "./pages/NoPageFound";
import Post from "./pages/Post";
import CategorySelect from "./pages/CategorySelect";
import Planets from "./pages/GeneralKnowledge/Planets";
import Viruses from "./pages/GeneralKnowledge/Viruses";
import Diseases from "./pages/GeneralKnowledge/Diseases";
import InternationalSports from "./pages/GeneralKnowledge/InternationalSports";
import FirstInWorld from "./pages/GeneralKnowledge/FirstInWorld";
import Organizations from "./pages/GeneralKnowledge/Organizations";
import Beaches from "./pages/GeneralKnowledge/Beaches";
import Dams from "./pages/GeneralKnowledge/Dams";
import Continents from "./pages/GeneralKnowledge/Continents";
import NationalAnimals from "./pages/GeneralKnowledge/NationalAnimals";
import NobelPrizes from "./pages/GeneralKnowledge/NobelPrizes";
import Geography from "./pages/GeneralKnowledge/Geography";
import MajorReligion from "./pages/GeneralKnowledge/MajorReligion";
import Covid19 from "./pages/GeneralKnowledge/Covid19";
import IntelligenceAgencies from "./pages/GeneralKnowledge/IntelligenceAgencies";
import Computer from "./pages/Computer";
import Html from "./pages/Computer/Html";
import Css from "./pages/Computer/Css";
import Js from "./pages/Computer/Js";
import EverydayScience from "./pages/EveydayScience/EverydayScience";
import MatricInterComp from "./components/MatricInterComp";
import { ninethCategory } from "./categories/NinethCategory";
import { tenthCategory } from "./categories/tenthCategory";
import Chapter1 from "./pages/9th/Chapter1";
import Chapter2 from "./pages/9th/Chapter2";
import Chapter3 from "./pages/9th/Chapter3";
import Chapter4 from "./pages/9th/Chapter4";
import Chapter5 from "./pages/9th/Chapter5";
import Chapter6 from "./pages/9th/Chapter6";
import Chapter7 from "./pages/9th/Chapter7";
import Chapter8 from "./pages/9th/Chapter8";
import Chapter9 from "./pages/9th/Chapter9";
import Chapter10 from "./pages/10th/Chapter10";
import Chapter11 from "./pages/10th/Chapter11";
import Chapter12 from "./pages/10th/Chapter12";
import Chapter13 from "./pages/10th/Chapter13";
import Chapter14 from "./pages/10th/Chapter14";
import Chapter15 from "./pages/10th/Chapter15";
import Chapter16 from "./pages/10th/Chapter16";
import Chapter17 from "./pages/10th/Chapter17";
import Chapter18 from "./pages/10th/Chapter18";
import { eleventhCategory } from "./categories/eleventhCategory";
import Chapter111 from "./pages/11th/Chapter111";
import Chapter211 from "./pages/11th/Chapter211";
import Chapter311 from "./pages/11th/Chapter311";
import Chapter411 from "./pages/11th/Chapter411";
import Chapter511 from "./pages/11th/Chapter511";
import Chapter611 from "./pages/11th/Chapter611";
import Chapter711 from "./pages/11th/Chapter711";
import Chapter811 from "./pages/11th/Chapter811";
import Chapter911 from "./pages/11th/Chapter911";
import Chapter1011 from "./pages/11th/Chapter1011";
import Chapter1111 from "./pages/11th/Chapter1111";
import Chapter1211 from "./pages/11th/Chapter1211";
import Chapter1311 from "./pages/11th/Chapter1311";
import Chapter1411 from "./pages/11th/Chapter1411";
import { twelvethCategory } from "./categories/twelveCategory";
import Chapter1512 from "./pages/12th/Chapter1512";
import Chapter1612 from "./pages/12th/Chapter1612";
import Chapter1712 from "./pages/12th/Chapter1712";
import Chapter1812 from "./pages/12th/Chapter1812";
import Chapter1912 from "./pages/12th/Chapter1912";
import Chapter2012 from "./pages/12th/Chapter2012";
import Chapter2112 from "./pages/12th/Chapter2112";
import Chapter2212 from "./pages/12th/Chapter2212";
import Chapter2312 from "./pages/12th/Chapter2312";
import Chapter2412 from "./pages/12th/Chapter2412";
import Chapter2512 from "./pages/12th/Chapter2512";
import Chapter2612 from "./pages/12th/Chapter2612";
import Chapter2712 from "./pages/12th/Chapter2712";
import PrivateRouteSelection from "./important/PrivateRouteSelection";

export default function CustomRoutes() {
  return (
    <Router>
      <div className="app__container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* GENERAL KNOWLEDGE */}
            <Route path="/generalKnowledge" element={<GeneralKnowledge />} />
            <Route path="/generalKnowledge/planets" element={<Planets />} />
            <Route path="/generalKnowledge/viruses" element={<Viruses />} />
            <Route path="/generalKnowledge/diseases" element={<Diseases />} />
            <Route
              path="/generalKnowledge/internationalSports"
              element={<InternationalSports />}
            />
            <Route
              path="/generalKnowledge/firstInWorld"
              element={<FirstInWorld />}
            />
            <Route
              path="/generalKnowledge/organizations"
              element={<Organizations />}
            />
            <Route path="/generalKnowledge/beaches" element={<Beaches />} />
            <Route path="/generalKnowledge/dams" element={<Dams />} />
            <Route
              path="/generalKnowledge/continents"
              element={<Continents />}
            />
            <Route
              path="/generalKnowledge/nationalAnimals"
              element={<NationalAnimals />}
            />
            <Route
              path="/generalKnowledge/nobelPrizes"
              element={<NobelPrizes />}
            />
            <Route path="/generalKnowledge/geography" element={<Geography />} />
            <Route
              path="/generalKnowledge/majorReligions"
              element={<MajorReligion />}
            />
            <Route path="/generalKnowledge/covid-19" element={<Covid19 />} />
            <Route
              path="/generalKnowledge/intelligenceAgencies"
              element={<IntelligenceAgencies />}
            />
            {/* COMPUTER SCIENCE */}
            <Route path="/computer" element={<Computer />} />
            <Route path="/computer/html" element={<Html />} />
            <Route path="/computer/css" element={<Css />} />
            <Route path="/computer/js" element={<Js />} />
            {/* EVERYDAY SCIENCE */}
            <Route path="/everydayScience" element={<EverydayScience />} />
            {/* 9th BIO */}
            <Route
              path="/9th"
              element={<MatricInterComp matricninter={ninethCategory} />}
            />
            <Route path="/9th/introduction" element={<Chapter1 />} />
            <Route path="/9th/biologicalProblems" element={<Chapter2 />} />
            <Route path="/9th/biodiversity" element={<Chapter3 />} />
            <Route path="/9th/cellBiology" element={<Chapter4 />} />
            <Route path="/9th/cellCycle" element={<Chapter5 />} />
            <Route path="/9th/enzymes" element={<Chapter6 />} />
            <Route path="/9th/bioenergetics" element={<Chapter7 />} />
            <Route path="/9th/nutrition" element={<Chapter8 />} />
            <Route path="/9th/transport" element={<Chapter9 />} />
            {/* 10th BIO */}
            <Route
              path="/10th"
              element={<MatricInterComp matricninter={tenthCategory} />}
            />
            <Route path="/10th/gaseousExchange" element={<Chapter10 />}/>
            <Route path="/10th/homeostasis" element={<Chapter11 />}/>
            <Route path="/10th/coordinationAndControl" element={<Chapter12 />}/>
            <Route path="/10th/supportAndMovement" element={<Chapter13 />}/>
            <Route path="/10th/reproduction" element={<Chapter14 />}/>
            <Route path="/10th/inheritance" element={<Chapter15 />}/>
            <Route path="/10th/manAndEnvironment" element={<Chapter16 />}/>
            <Route path="/10th/biotechnology" element={<Chapter17 />}/>
            <Route path="/10th/pharmacology" element={<Chapter18 />}/>

            {/* 11th BIO */}
            <Route path="/11th" element={<MatricInterComp matricninter={eleventhCategory}/>} />
            <Route path="/11th/introduction" element={<Chapter111/>} />
            <Route path="/11th/biologicalMolecules" element={<Chapter211/>} />
            <Route path="/11th/enzymes" element={<Chapter311/>} />
            <Route path="/11th/theCell" element={<Chapter411/>} />
            <Route path="/11th/varietyOfLife" element={<Chapter511/>} />
            <Route path="/11th/kingdomProkaryote" element={<Chapter611/>} />
            <Route path="/11th/theKingdomProtista" element={<Chapter711/>} />
            <Route path="/11th/fungi" element={<Chapter811/>} />
            <Route path="/11th/kingdomPlantae" element={<Chapter911/>} />
            <Route path="/11th/kingdomAnimalia" element={<Chapter1011/>} />
            <Route path="/11th/bioenergetics" element={<Chapter1111/>} />
            <Route path="/11th/nutrition" element={<Chapter1211/>} />
            <Route path="/11th/gaseousExchange" element={<Chapter1311/>} />
            <Route path="/11th/transport" element={<Chapter1411/>} />

            {/* 12th BIO */}
            <Route path="/12th" element={<MatricInterComp matricninter={twelvethCategory}/>} />
            <Route path="/12th/homeostasis" element={<Chapter1512/>} />
            <Route path="/12th/supportAndMovements" element={<Chapter1612/>} />
            <Route path="/12th/coordinationAndControl" element={<Chapter1712/>} />
            <Route path="/12th/reproduction" element={<Chapter1812/>} />
            <Route path="/12th/growthAndDevelopment" element={<Chapter1912/>} />
            <Route path="/12th/chromosomesAndDNA" element={<Chapter2012/>} />
            <Route path="/12th/cellCycle" element={<Chapter2112/>} />
            <Route path="/12th/variationAndGenetics" element={<Chapter2212/>} />
            <Route path="/12th/biotechnology" element={<Chapter2312/>} />
            <Route path="/12th/evolution" element={<Chapter2412/>} />
            <Route path="/12th/ecosystem" element={<Chapter2512/>} />
            <Route path="/12th/someMajorEcosystem" element={<Chapter2612/>} />
            <Route path="/12th/manAndHisEnvironment" element={<Chapter2712/>} />






            <Route path="/selectCategory" element={<PrivateRouteSelection Component={CategorySelect}/>} />
            <Route path="/upload" element={<PrivateRoute Component={Post} />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoPageFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
