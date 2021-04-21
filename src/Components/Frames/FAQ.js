import React from "react";
import { Collapse } from "antd";
import "./FAQ.css";
const { Panel } = Collapse;

function FAQ() {
  return (
    <div class="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <center>
            <h2> Fequently Asked Questions</h2>

            <p>A reason to travel</p>
          </center>
        </div>

        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Which style of trip is right for me?" key="1">
            <display class="faq_item">
              <p className="content-type">
                Our three styles of travel – Basix, Original and Comfort – cover
                a whole gamut of travel experiences.
              </p>
            </display>
          </Panel>

          <Panel
            header="Can people who have recently from COVID-19 travel?"
            key="2"
          >
            <display class="faq_item">
              <p className="content-type">
                If you had COVID-19 in the past 3 months, follow all
                requirements and recommendations for fully vaccinated travelers
                except: You can show documentation of recovery from COVID-19
                instead of a negative test result before boarding an
                international flight to the United States. You do NOT need to
                tested 3-5 days after travel to the United States unless you
                have symptoms of COVID-19. We know that people can continue to
                test positive for up to 3 months after they had COVID-19 and not
                be infectious to others.
              </p>
            </display>
          </Panel>
          <Panel header="Can I make a booking over the phone?" key="3">
            <display class="faq_item">
              <p className="content-type">
                Yes, you can call us on +91 92111 77444 (standard charges apply)
              </p>
            </display>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default FAQ;
