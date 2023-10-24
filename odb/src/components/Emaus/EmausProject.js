import { Center, Heading, Button, Box } from "@chakra-ui/react";
import EmausLocation from "./EmausLocatioin";
import EmausMesaje from "./EmausMesaje";
import { useState } from "react";

function EmausProject(){
    const messages = [
        {
          message: 'Centrul Emaus, un dar oferit cu suflet tuturor celor care au nevoie de sprijin în lupta cu bolile. Locație super ok, oameni cu suflet deschis care mereu oferă sprijin celor în nevoi! L.V.',
          author: 'L.V.',
        },
        {
          message: 'Acesta este un alt mesaj. Autorul acestui mesaj este necunoscut.',
          author: 'Necunoscut',
        },
        {
          message: 'Al treilea mesaj. Părerea cuiva despre Centrul Emaus.',
          author: 'Utilizator Anonim',
        },
        // Adăugați mai multe mesaje aici...
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      const goToPreviousMessage = () => {
        if (currentIndex === 0) {
          setCurrentIndex(messages.length - 1);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
      };
      
      const goToNextMessage = () => {
        if (currentIndex === messages.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      };
    return(
<>
<br/>
<Center>
<Heading as="h1" size="lg" color="#716059">
      In cadrul „Centrul EMAUS” oferim gratuit 3 locuințe în București
    </Heading>
    </Center>
<EmausLocation
imageUrl="https://i.simpalsmedia.com/point.md/news/809x456/10467780d258b417400283cd78f816d4.jpg"
location="Strada Elev Ștefan Ștefănescu nr. 9"
description="Locuința se află la 5 minute de metroul Piața Iancului, stația de STB 382/101/355 care duc spre spitalul Fundeni, există un magazin alimentar la ieșire din bloc."
title="Hartă"
/>    

<br/>
<Box>
      <Button onClick={goToPreviousMessage} disabled={currentIndex === 0}>
        &lt; Mesajul Anterior
      </Button>
      <EmausMesaje
        message={messages[currentIndex].message}
        author={messages[currentIndex].author}
      />
      <Button onClick={goToNextMessage} disabled={currentIndex === messages.length - 1}>
        Mesajul Următor &gt;
      </Button>
    </Box>
</>
    );
}

export default EmausProject