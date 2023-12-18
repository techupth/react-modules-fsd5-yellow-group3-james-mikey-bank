import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function FAQ() {
  return (
    <section id="faq">
      <h1>FAQ (คำถามที่พบบ่อย)</h1>
      <Accordion defaultIndex={[0]}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <strong>Q: What makes XYZ Company's products so unique?</strong>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            A: At XYZ Company, we pride ourselves on innovation and cutting-edge
            technology. Our products are crafted with a perfect blend of
            creativity and functionality, setting them apart from the
            competition. We constantly strive to push the boundaries of what's
            possible to deliver a truly exceptional user experience.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <strong>
                Q: How does XYZ Company contribute to sustainability and
                environmental conservation?
              </strong>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            A: XYZ Company is committed to environmental responsibility. We
            implement eco-friendly practices throughout our production process,
            from sourcing materials to manufacturing. Our dedication to
            sustainability extends beyond our products, as we actively engage in
            initiatives to reduce our carbon footprint and promote a greener
            future.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <strong>
                Q: What kind of support can customers expect from XYZ Company's
                customer service team?
              </strong>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            A: At XYZ Company, customer satisfaction is our top priority. Our
            dedicated support team is available 24/7 to address any inquiries or
            concerns you may have. Whether you need assistance with product
            usage, troubleshooting, or general information, our knowledgeable
            and friendly customer service representatives are always ready to
            provide prompt and effective support.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <strong>
                Q: How does XYZ Company stay ahead of industry trends?
              </strong>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            A: XYZ Company stays at the forefront of industry trends through
            continuous research and development. We invest heavily in staying
            ahead of the curve, monitoring market dynamics, and actively seeking
            feedback from our customers. By embracing innovation and staying
            agile, we ensure that our products and services evolve to meet the
            ever-changing needs of our dynamic customer base.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <strong>
                Q: Can you tell us about XYZ Company's commitment to community
                involvement?
              </strong>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            A: XYZ Company is deeply committed to giving back to the communities
            we serve. We actively engage in philanthropic initiatives,
            supporting local charities and community projects. Additionally, we
            encourage our employees to participate in volunteer programs,
            fostering a culture of social responsibility. By being actively
            involved in the community, we aim to make a positive impact beyond
            the products and services we offer.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
