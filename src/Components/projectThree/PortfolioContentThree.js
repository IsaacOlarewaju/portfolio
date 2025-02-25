// All of the content in the third project

import { PortfolioImg3 } from "../projectContent/PortfolioImg3";
import { PortfolioImg4 } from "../projectContent/PortfolioImg4";
import { PortfolioImg5 } from "../projectContent/PortfolioImg5";
import { PortfolioVid1 } from "../projectContent/PortfolioVid1";
import { ProjectNameTitle } from "../projectContent/ProjectNameTitle";
import { PortfolioDescription } from "../projectContent/PortfolioDescription";

export function PortfolioContentThree() {
  return (
    <section id="intro">
      <div className="container">
        <div className="intro-name">
          <h1 className="buyan">
            fully
            <br />
            captured
          </h1>
        </div>
        <div id="intro-job-title">
          <ProjectNameTitle
            desc="PHOTO SHARING APP"
            job="FRONTEND DEVELOPMENT, UI, GRAPGIC DESIGN"
          />
          <PortfolioDescription sentence="A cloud-based mobile messaging app targeted at mobile phone photographers, as it allows the transferring of large data at once." />
          <PortfolioImg4 pic="/images/iPhone-photo.webp" />

          <div className="standard-project-description">
            <p>
              <a href="https://fullycaptured.co.uk/" target={"_blank"}>
                <u>Fully Captured </u>
              </a>
              is a personal project that has been developed to pose as a web
              application for efficient large data transfer between users. It
              features an interactive dashboard that allows users to search for
              specific contacts and messages, and uses Fetch API to retrieve
              contact data.
              <br />
              <br />
              Fully Captured was developed with React, along with its useful and
              latest technologies, such as custom hooks. Other formats and
              methods were also implemented such as JSON files and Fetch API's.
            </p>
          </div>

          <PortfolioImg5 pic="images/fully-captured-left-right-1.webp" />
          <PortfolioImg3 pic="images/fully-captured-left-right-1-mobile.webp" />

          <p>
            Fully Captured features chat pages. It also allows users to write
            new messages.
          </p>

          <PortfolioImg5 pic="images/fully-captured-left-right-2.webp" />
          <PortfolioImg3 pic="images/fully-captured-left-right-2-mobile.webp" />

          <p>
            I thought of the need for users to quickly find specific contacts
            and messages within the dashboard. Displaying the basic listview of
            chats alone in the dashboard was very impractical for users to go
            through, adding to user dissatisfaction and poor user experience.
            <br />
            <br />
            I took the initiative to develop an interactive search
            functionality. This involved creating a React component for the
            search bar, and placing it on top of the dashboard. In this search
            bar, I’ve implemented the logic to filter data based on user input.
            <br />
            <br />
            <b>How does this search bar work?</b> The search bar updates the
            component's state as the user types. This state is then used to
            filter the displayed list of contacts and messages in real-time. I
            utilized React hooks such as useState, useEffect, and useRef to
            manage the search term and the filtered results.
          </p>

          <PortfolioVid1 vid="/images/app-filtering-function.mp4" />

          <p>
            The interactive search significantly improves the user experience. I
            enabled users to quickly locate specific contacts and messages they
            needed. This function is scalable, as it can function even with
            large amounts of data. It is also reusable, as it can easily be used
            elsewhere in the app, being a React component. The optimized search
            algorithm ensures smooth performance, and improved user experience.
          </p>

          {/* <FilteringCode /> */}

          <PortfolioImg5 pic="images/fully-captured-left-right-3.webp" />
          <PortfolioImg3 pic="images/fully-captured-left-right-3-mobile.webp" />

          <p>
            The contacts page allows users to view information about each of
            their contacts, with each contact being another photographer. Users
            are able to store a large amount of contacts.
            <br />
            <br />
            An efficient way of retrieving contacts data robustly and
            efficiently was to utilize a Fetch API which sends HTTP requests to
            a server.
            <br />
            <br />I was tasked with implementing the front-end data fetching
            logic using the fetch API in JavaScript within the React
            application.
            <br />
            <br />
            <b>Action included:</b>
            <br />
            - Creating a database json file in the root directory of my app.
            This file contains numerous arrays of objects (details of numerous
            contacts).
            <br />
            - Using my terminal to wrap the file in API endpoints. Within the
            React useEffect hook, I used a fetch() request that contains the
            endpoints that have been previously provided.
            <br />
            - I used .then() and .catch() to handle successful responses and
            potential errors. Specific errors are written out in the app,
            providing feedback to the user. Errors are also logged in the
            console.
            <br />
            - I managed loading states using React useState, displaying a
            loading message while data is being fetched.
            <br />
            - useFetch, a custom hook was created. This ensures this same fetch
            method is easily reusable in the app, preventing repeated code.
            <br />
            <br />
            <br />
            The usage of Fetch API significantly improved data loading times.
            The user experience was enhanced by the loading indicators and error
            handling. The React useEffect hook prevents unnecessary API calls,
            saving time, thus, increasing the speed and efficiency of the app.
          </p>
          <PortfolioImg4 pic="/images/fully-captured-mockup.webp" />

          <div className="visit-project-link">
            <p>
              <a
                href="https://github.com/IsaacOlarewaju/fullycaptured"
                target={"_blank"}
              >
                <u>GitHub Repository →</u>
              </a>
              <br />
              <br />
              <a href="https://fullycaptured.co.uk/" target={"_blank"}>
                <u>Visit Fully Captured →</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
