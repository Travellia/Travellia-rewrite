const termsList = [
  {
    id: 1,
    heading: "VERIFYING ALL FLIGHT DETAILS & PASSENGER NAMES",
    content: (
      <>
        It is the responsibility of the traveler to meticulously review all
        details for accuracy, including passenger names (matching those on
        passports/travel documents), travel dates, transit times, origin and
        destination points, stopovers, baggage allowances, and other pertinent
        flight information. Once the ticket is issued by Travellia Limited, no
        alterations or changes can be made. It is imperative that passengers
        ensure the correctness of all provided information before the ticket
        issuance to avoid complications or issues during travel.
      </>
    ),
  },

  {
    id: 2,
    heading: "PASSPORT, VISA & IMMIGRATION REQUIREMENTS",
    content: (
      <>
        For all
        <span className="font-bold">
          {" "}
          flights, hotel bookings, and transport services,
        </span>{" "}
        it is the sole responsibility of the client to verify and fulfil all
        passport, visa (including any required transit visa), and other
        immigration requirements. Your passport must be valid for{" "}
        <span className="font-bold">
          {" "}
          at least six (6) months from your departure date.
        </span>{" "}
        We strongly recommend consulting the relevant Embassy or Consulate well
        in advance of your departure, as requirements may change without notice.
        Travellia Limited cannot accept responsibility for: <br />
        <span className="text-primary font-bold text-2xl pr-2">›</span>
        Any refusal of entry onto a flight, at a hotel, or into any country due
        to insufficient or incorrect travel documentation <br />
        <span className="text-primary font-bold text-2xl pr-2">›</span>Any
        issues arising from missing or invalid visas, passports, or permits{" "}
        <br />
        If Travellia Limited applies for a visa on your behalf, we will do so as
        an administrative service only. We have no control over visa approval
        decisions and cannot be held responsible in the event of a rejection. In
        such cases, we will also not be liable for any resulting financial
        losses, including—but not limited to—
        <span className="font-bold">
          {" "}
          flight tickets, hotel bookings, or transport cancellations.
        </span>{" "}
        <br />
        br It is the client’s responsibility to ensure all necessary travel
        documentation is in order before travel to avoid complications, delays,
        or denials of entry.
      </>
    ),
  },

  {
    id: 3,
    heading: "FLIGHT, HOTEL & TRANSPORT RE-CONFIRMATION",
    content: (
      <>
        It is the responsibility of the traveler to{" "}
        <span className="font-bold">
          reconfirm all flight, hotel, and transport arrangements with Travellia
          Limited at least 72 hours before the scheduled departure or service
          time.
        </span>{" "}
        Travellia Limited will not be held liable for any inconvenience, missed
        services, or additional costs resulting from failure to reconfirm.
        Timely reconfirmation is essential to ensure smooth and uninterrupted
        travel.
      </>
    ),
  },

  {
    id: 4,
    heading: "TRAVEL INSURANCE AND HEALTH COMPLIANCE",
    content: (
      <>
        For an enhanced travel experience, Travellia Limited strongly encourages
        travelers to consider purchasing travel insurance. It becomes the sole
        responsibility of the traveler to guarantee possession of valid travel
        insurance that sufficiently caters to their needs. Additionally,
        travelers must ensure compliance with all health and vaccination
        prerequisites applicable to the countries they intend to visit. Valuable
        advice on these matters can be obtained from their General Practitioner
        (GP) or a reputable travel clinic. This proactive approach ensures a
        smoother and well-prepared travel journey with Travellia Limited.
      </>
    ),
  },

  {
    id: 5,
    heading: "SPECIAL REQUESTS & MEDICAL CONCERNS",
    content: (
      <>
        If you have any special requests—such as meal preferences, seat
        selection, wheelchair assistance, specific room types, or transport
        needs—please inform <span className="font-bold">Travellia Limited</span>{" "}
        at the time of booking or ticket issuance. We will make every effort to
        forward these requests to the relevant service providers (airlines,
        hotels, transport companies, etc.); however,{" "}
        <span className="font-bold">
          we cannot guarantee that such requests will be fulfilled. <br />
        </span>
        Travellia Limited cannot be held liable for any inconvenience or claims
        arising from unfulfilled special requests. Early communication of your
        requirements helps us better support your travel experience.
      </>
    ),
  },

  {
    id: 6,
    heading: "BAGGAGE CLAIM POLICY",
    content: (
      <>
        Travellia Limited does not accept responsibility for{" "}
        <span className="font-bold">lost, stolen, or damaged baggage</span>
        related to{" "}
        <span className="font-bold">
          airlines, hotels, or transport services.
        </span>
        In the event of such incidents, travelers must{" "}
        <span className="font-bold">
          directly contact the relevant service provider
        </span>{" "}
        (airline, hotel, or transport company) for resolution. Travellia Limited
        is not liable for any baggage-related claims and strongly advises
        passengers to report and resolve such issues directly with the
        responsible provider.
      </>
    ),
  },

  {
    id: 7,
    heading: "IMPORTANT DISCLAIMER",
    content: (
      <>
        Travellia Limited explicitly disclaims any responsibility for financial
        losses arising from airline operational failures. In such instances,
        passengers bear sole responsibility, and it is strongly advised to
        procure independent travel insurance to mitigate the risk of potential
        financial loss. This precaution is paramount to ensure the protection
        and well-being of travelers under the services of Travellia Limited.
      </>
    ),
  },

  {
    id: 8,
    heading: "ADJUSTMENTS TO YOUR TRAVEL ITINERARY",
    content: (
      <>
        In the event that Travellia Limited is compelled to make minor
        adjustments to the arrangements for your holiday, we commit to promptly
        informing you of such changes. This ensures transparency and allows for
        clear communication regarding any modifications made to enhance your
        travel experience with us.
      </>
    ),
  },

  {
    id: 9,
    heading: "SIGNIFICANT MODIFICATIONS TO YOUR TRAVEL PLANS",
    content: (
      <>
        In the uncommon circumstance that Travellia Limited is compelled to make
        major changes to your holiday arrangements, such as a departure time
        shift exceeding 12 hours or a change of airport (excluding alterations
        between airports in the London region, aircraft type, or airline) it
        will be solely due to circumstances typically beyond our control. In
        such an unlikely event - we will promptly inform you; with our primary
        objective being to minimize any inconvenience you may face. We will
        whenever feasible; present you with alternative arrangements closely
        aligned with your original choice. Subsequently, you will have the
        option to accept the alternative, opt for an available holiday of
        similar value or cancel your reservation. In the event of cancellation,
        we will process your refund in accordance with the policies stipulated
        by the airlines or suppliers. This policy underscores our commitment to
        transparency and client satisfaction at Travellia Limited.
      </>
    ),
  },

  {
    id: 10,
    heading: "PRICE ASSURANCE POLICY",
    content: (
      <>
        Travellia Limited aims to provide transparent and fair pricing for all
        <span className="font-bold">
          {" "}
          flight, hotel, and transport bookings.
        </span>
        The price stated on the confirmation invoice will remain unchanged once{" "}
        <span className="font-bold">
          full payment has been received by the due date. <br />
        </span>
        However, in cases involving
        <span className="font-bold">
          {" "}
          scheduled flights, hotels, or transport services,
        </span>{" "}
        where providers reserve the right to adjust prices, the quoted price is
        <span className="font-bold">
          {" "}
          not guaranteed until full payment is made.
        </span>{" "}
        A deposit may secure your booking but{" "}
        <span className="font-bold"> does not fix the final price.</span> Our
        price guarantee
        <span className="font-bold">
          {" "}
          does not apply to increases caused by government actions,
        </span>{" "}
        such as the introduction of VAT, Passenger Levy, or other regulatory
        charges. This policy reflects Travellia Limited's commitment to
        transparent pricing and outlines the conditions under which pricing is
        guaranteed.
      </>
    ),
  },

  {
    id: 11,
    heading: "FLIGHT DETAILS",
    content: (
      <>
        Information regarding airlines, flight numbers/schedules, and
        destination airports will be provided on your invoice/confirmation with
        Travellia Limited. While we strive to accommodate preferences, we regret
        that we cannot guarantee specific aircraft types or airlines. This
        policy ensures transparency in the disclosure of flight details and sets
        expectations regarding the flexibility of aircraft and airline
        assignments for your travel arrangements with Travellia Limited.
      </>
    ),
  },

  {
    id: 12,
    heading: "CONFIRMATION DEPOSIT",
    content: (
      <>
        Travellia Limited requires an initial deposit to initiate the booking
        process. However, the booking will remain unconfirmed until full payment
        is received. Paying the deposit secures a provisional reservation only
        and does not guarantee the final price or availability. A confirmed
        booking is only guaranteed once the total balance is paid in full within
        the specified time frame.
      </>
    ),
  },

  {
    id: 13,
    heading: "MODIFYING YOUR TRAVEL ARRANGEMENTS",
    content: (
      <>
        If you wish to make changes to any part of your flight, hotel, or
        transport arrangements, Travellia Limited will do its best to
        accommodate your request, subject to availability and the policies of
        the service providers. An Amendment Fee per person will apply, and the
        exact fee will be confirmed at the time of the change. <br /> All change
        requests must be provided to Travellia Limited in writing. Please note
        that additional charges, such as taxes, fare differences, or surcharges
        may apply and these will be communicated before issuing revised tickets
        or confirmations. <br />
        This policy ensures transparency and helps you understand the potential
        costs involved in modifying your travel plans.
      </>
    ),
  },

  {
    id: 14,
    heading: "CANCELLATION POLICY",
    content: (
      <>
        If you or any member of your party needs to cancel your flight, hotel,
        or transport booking, written notification must be provided by the
        person who made the booking and is responsible for payment. Cancellation
        charges will be calculated based on the date Travellia Limited receives
        the written notice of cancellation and in accordance with the terms and
        conditions of the relevant service providers. This policy ensures clear
        communication and sets out the process for handling cancellations with
        Travellia Limited.
      </>
    ),
  },
  {
    id: 15,
    heading: "RESOLUTION OF ISSUES",
    content: (
      <>
        If you encounter any concerns or issues during your flight, hotel stay,
        or transport service, you must immediately inform the relevant service
        provider (airline staff, hotel management, transport operator) and/or
        our local agent so they can attempt to resolve the matter on the spot.{" "}
        <br /> If the issue is not resolved locally, you must obtain written
        confirmation that your complaint was officially lodged. You are then
        required to notify Travellia Limited in writing within 3 days of the
        incident, providing all relevant details and supporting documents.{" "}
        <br /> Failure to follow this procedure may limit our ability to fully
        investigate and resolve your complaint. This policy ensures that
        problems are addressed promptly and effectively.
      </>
    ),
  },
  {
    id: 16,
    heading: "AGENCY ARRANGEMENTS",
    content: (
      <>
        Travellia Limited operates solely as an agent in arranging flights,
        hotel accommodation, transport services, and other travel-related
        products on behalf of the client with the relevant supplier or operator
        (the “Principal”). All bookings are made subject to the terms,
        conditions, and policies of the respective suppliers, and Travellia
        Limited is required to follow the rules of those suppliers in all
        matters, including amendments, cancellations, and refunds. <br /> All
        amendments and cancellations will be subject to the supplier’s charges
        and conditions, in addition to any applicable Travellia Limited fees.
        Travellia Limited will make every effort to meet clients’ requirements;
        however, as we operate strictly as an intermediary, we cannot accept
        responsibility for the acts or omissions of the suppliers. In the event
        of a complaint, Travellia Limited will pass the matter to the relevant
        supplier on the client’s behalf.
      </>
    ),
  },
  {
    id: 17,
    heading: "BOOKING RESPONSIBILITY",
    content: (
      <>
        The individual making a booking for flights, hotels, or transport
        services with Travellia Limited accepts full responsibility for all
        booking conditions on behalf of every passenger in their party. This{" "}
        includes liability for any amendment fees, late payment charges, or
        cancellation fees that may apply to any member of the booking. <br />
        This individual is also responsible for carefully reviewing all booking
        confirmations, invoices, tickets, and any future documentation issued,
        and for promptly notifying Travellia Limited of any missing or incorrect
        information. Failure to do so may result in additional costs or
        disruptions for which Travellia Limited will not be held liable. <br />{" "}
        This policy ensures that the booking holder maintains responsibility for
        accuracy, compliance with conditions, and timely communication, helping
        to ensure a smooth travel experience for all members of the party.
      </>
    ),
  },
  {
    id: 18,
    heading: "PAYMENT TERMS",
    content: (
      <>
        Clients are required to pay the balance for all flight, hotel, and
        transport bookings by the due date stated on their confirmation. For
        certain bookings made by telephone, full payment may be required
        immediately before confirmation is issued. Where this applies, clients
        will be informed at the time of booking. <br /> Timely payment is
        essential. Failure to pay the balance by the due date may result in the
        cancellation of the booking, and clients will remain liable for any
        applicable cancellation charges. If a ‘booking charge’ applies, this
        will be advised at the time of booking. <br /> To avoid cancellation, a
        late payment fee of £100 may be applied to overdue balances. This policy
        highlights the importance of meeting payment deadlines to ensure a
        smooth and uninterrupted travel experience with Travellia Limited.
      </>
    ),
  },
  {
    id: 19,
    heading: "CONDUCT AND RESPONSIBILITY",
    content: (
      <>
        By booking flights, hotels, or transport services with Travellia
        Limited, you accept full responsibility for any damage, loss, or
        additional costs caused by you or any member of your party. Payment for
        such damage or loss must be made promptly and directly to the airline,
        hotel, transport provider, or any other relevant supplier. Failure to do
        so will require you to indemnify Travellia Limited against any claims,
        costs, or legal expenses arising from your actions. <br /> We expect all
        clients to behave respectfully and considerately towards others. If, in
        the opinion of Travellia Limited, the service provider, or any person in
        authority, your behaviour causes distress, danger, annoyance, or damage
        to property, we reserve the right to terminate your travel arrangements
        immediately without notice. In such circumstances, all services to you
        will be ceased, and Travellia Limited will not be liable for any
        refunds, compensation, or expenses incurred. <br /> This policy reflects
        our commitment to ensuring a safe, respectful, and enjoyable travel
        experience for all clients.
      </>
    ),
  },
  {
    id: 20,
    heading: "FORCE MAJEURE EVENTS",
    content: (
      <>
        Travellia Limited shall not be held responsible or liable for any loss,
        damage, or disruption caused by extraordinary and unforeseeable
        circumstances beyond our control. Such events include, but are not
        limited to, war or threat of war, riot, civil disturbance, industrial
        disputes (including air traffic control strikes), terrorist activity,
        natural or nuclear disasters, fire, adverse weather conditions,
        technical problems with transport, closure or congestion of airports,
        ports, or stations, and cancellations or schedule changes by airlines,
        hotels, or transport operators. In the event of a force majeure
        situation:
      </>
    ),
  },
];
export default termsList;
