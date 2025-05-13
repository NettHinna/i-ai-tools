import { db } from "@/lib/db"
import {
  chatSessions,
  chatMessages,
  contactSubmissions,
  products,
  productFeatures,
  productImages,
  productSpecifications,
} from "./schema"
import { v4 as uuidv4 } from "uuid"

// Seed chat sessions and messages
export async function seedChatData() {
  try {
    console.log("Seeding chat data...")

    // Create sample chat sessions
    const sessionIds = [{ sessionId: uuidv4() }, { sessionId: uuidv4() }, { sessionId: uuidv4() }]

    // Insert chat sessions
    await db.insert(chatSessions).values(sessionIds)

    // Create sample messages for each session
    const messages = []

    // Session 1: Product inquiry
    messages.push(
      {
        sessionId: sessionIds[0].sessionId,
        role: "assistant",
        content: "Hei! Hvordan kan jeg hjelpe deg i dag? / Hello! How can I help you today?",
      },
      {
        sessionId: sessionIds[0].sessionId,
        role: "user",
        content: "Jeg lurer på om dere har IBIX 25 på lager?",
      },
      {
        sessionId: sessionIds[0].sessionId,
        role: "assistant",
        content:
          "Ja, vi har IBIX 25 Basic på lager. Den er tilgjengelig for umiddelbar levering. Ønsker du mer informasjon om denne modellen eller er du interessert i å kjøpe?",
      },
      {
        sessionId: sessionIds[0].sessionId,
        role: "user",
        content: "Hva er prisen på den?",
      },
      {
        sessionId: sessionIds[0].sessionId,
        role: "assistant",
        content:
          "For nøyaktig prisinformasjon på IBIX 25 Basic, vennligst kontakt vårt salgskontor på telefon +47 123 45 678 eller send en e-post til post@derksentrading.no. Vi kan også sende deg et uforpliktende tilbud tilpasset dine behov.",
      },
    )

    // Session 2: Service inquiry
    messages.push(
      {
        sessionId: sessionIds[1].sessionId,
        role: "assistant",
        content: "Hei! Hvordan kan jeg hjelpe deg i dag? / Hello! How can I help you today?",
      },
      {
        sessionId: sessionIds[1].sessionId,
        role: "user",
        content: "Do you offer sandblasting services in Tromsø?",
      },
      {
        sessionId: sessionIds[1].sessionId,
        role: "assistant",
        content:
          "Yes, we offer mobile sandblasting services in Tromsø and surrounding areas. Our team can come to your location with all the necessary equipment. What kind of project are you working on?",
      },
      {
        sessionId: sessionIds[1].sessionId,
        role: "user",
        content: "I need to remove rust from a metal structure",
      },
      {
        sessionId: sessionIds[1].sessionId,
        role: "assistant",
        content:
          "We specialize in rust removal from metal structures. Our sandblasting equipment is perfect for this type of work. To provide you with a quote, we would need some details about the size of the structure and its location. Would you like to schedule a site visit for a free assessment?",
      },
    )

    // Session 3: General inquiry
    messages.push(
      {
        sessionId: sessionIds[2].sessionId,
        role: "assistant",
        content: "Hei! Hvordan kan jeg hjelpe deg i dag? / Hello! How can I help you today?",
      },
      {
        sessionId: sessionIds[2].sessionId,
        role: "user",
        content: "Hva er forskjellen mellom våt og tørr sandblåsing?",
      },
      {
        sessionId: sessionIds[2].sessionId,
        role: "assistant",
        content:
          "Tørr sandblåsing bruker kun blåsemiddel og trykkluft, og er effektivt for å fjerne rust, maling og belegg. Våt sandblåsing tilsetter vann i prosessen, som reduserer støv, er mer miljøvennlig og skånsom mot underlaget. Våt sandblåsing er ideell for fasader, graffitifjerning og områder hvor støvkontroll er viktig. Begge metodene har sine fordeler avhengig av prosjektets krav.",
      },
      {
        sessionId: sessionIds[2].sessionId,
        role: "user",
        content: "Hvilken metode anbefaler dere for en trebåt?",
      },
      {
        sessionId: sessionIds[2].sessionId,
        role: "assistant",
        content:
          "For trebåter anbefaler vi våt sandblåsing med lavt trykk og et skånsomt blåsemiddel som sodablasting. Dette er mer skånsomt mot treverket, reduserer risikoen for å skade fibrene, og gir en jevn overflate for ny behandling. Vi kan justere trykk og blåsemiddel nøyaktig etter tilstanden på båten din. Ønsker du en befaring for å vurdere din spesifikke trebåt?",
      },
    )

    // Insert all messages
    await db.insert(chatMessages).values(messages)

    console.log(`Seeded ${sessionIds.length} chat sessions with ${messages.length} messages`)
    return { success: true }
  } catch (error) {
    console.error("Error seeding chat data:", error)
    return { success: false, error }
  }
}

// Seed contact submissions
export async function seedContactData() {
  try {
    console.log("Seeding contact submissions...")

    const contacts = [
      {
        name: "Ole Nordmann",
        email: "ole.nordmann@example.com",
        phone: "+47 912 34 567",
        company: "Nordmann Bygg AS",
        message: "Jeg er interessert i å kjøpe en IBIX 25 Basic til vårt firma. Kan dere sende meg et tilbud?",
      },
      {
        name: "Kari Hansen",
        email: "kari.hansen@example.com",
        phone: "+47 876 54 321",
        company: "Hansen Malerfirma",
        message: "Vi trenger en demonstrasjon av IBIX Problaster 40 H2O. Er det mulig å få til neste uke?",
      },
      {
        name: "John Smith",
        email: "john.smith@example.com",
        phone: "+47 555 12 345",
        company: "Smith Marine Services",
        message:
          "I'm looking for equipment for sandblasting a 40-foot yacht. Can you recommend the best model for this purpose and provide a quote?",
      },
      {
        name: "Anna Johansen",
        email: "anna.johansen@example.com",
        phone: "+47 333 44 555",
        message: "Jeg har en gammel bil jeg restaurerer og lurer på om dere leier ut sandblåsere til privatpersoner?",
      },
      {
        name: "Lars Pedersen",
        email: "lars.pedersen@example.com",
        phone: "+47 444 55 666",
        company: "Pedersen Eiendom",
        message:
          "Vi har et stort prosjekt med graffitifjerning på flere bygårder i Oslo. Kan dere gi et tilbud på dette arbeidet?",
      },
    ]

    // Insert contact submissions
    await db.insert(contactSubmissions).values(contacts)

    console.log(`Seeded ${contacts.length} contact submissions`)
    return { success: true }
  } catch (error) {
    console.error("Error seeding contact data:", error)
    return { success: false, error }
  }
}

// Seed product data
export async function seedProductData() {
  try {
    console.log("Seeding product data...")

    // Define products
    const productData = [
      {
        slug: "ibix-9-basic",
        name: "IBIX® 9 Basic",
        description: "9L tørrblåser, superlett (12kg), ypperlig for småskala arbeid og hobby.",
        longDescription:
          "IBIX® 9 Basic er en kompakt og lett sandblåser som er perfekt for mindre prosjekter og hobbybruk. Med sin lave vekt på kun 12 kg er den enkel å transportere og håndtere. Til tross for sin kompakte størrelse, leverer den effektiv sandblåsing for fjerning av rust, maling og andre belegg fra ulike overflater.",
        category: "dry",
      },
      {
        slug: "ibix-25-basic",
        name: "IBIX® 25 Basic",
        description: "25L tørrblåser, kompakt og effektiv, ideell for mellomstore prosjekter.",
        longDescription:
          "IBIX® 25 Basic er en allsidig sandblåser med 25 liters kapasitet, designet for profesjonell bruk på mellomstore prosjekter. Den kombinerer høy ytelse med god mobilitet, og er et populært valg blant håndverkere og industribedrifter. Maskinen er robust bygget for å tåle krevende arbeidsforhold.",
        category: "dry",
      },
      {
        slug: "ibix-problaster-25-h2o",
        name: "IBIX® Problaster 25 H2O",
        description: "25L kombiblåser for både tørr og våt sandblåsing, allsidig og kompakt.",
        longDescription:
          "IBIX® Problaster 25 H2O er en avansert kombiblåser som tilbyr både tørr og våt sandblåsing i samme maskin. Med 25 liters kapasitet og mulighet for vanninjeksjon, er den ideell for fasaderengjøring, graffitifjerning og andre oppgaver hvor støvreduksjon er viktig. Den innovative designen gjør det enkelt å veksle mellom tørr og våt blåsing.",
        category: "wet",
      },
      {
        slug: "ibix-problaster-40-h2o",
        name: "IBIX® Problaster 40 H2O",
        description: "40L kombiblåser, kraftig og effektiv, for større prosjekter.",
        longDescription:
          "IBIX® Problaster 40 H2O er en kraftig kombiblåser med 40 liters kapasitet, designet for større prosjekter og lengre driftstid. Den tilbyr både tørr og våt sandblåsing, og er utstyrt med avansert teknologi for optimal ytelse og brukervennlighet. Med sin robuste konstruksjon er den bygget for å tåle krevende industrielle miljøer.",
        category: "wet",
      },
      {
        slug: "ibix-problaster-60-h2o",
        name: "IBIX® Problaster 60 H2O",
        description: "60L kombiblåser for proff bruk, med HiPower dobbel lufttilførsel.",
        longDescription:
          "IBIX® Problaster 60 H2O er vår mest kraftfulle kombiblåser, med 60 liters kapasitet og HiPower dobbel lufttilførsel for maksimal effekt. Den er designet for profesjonelle brukere med store prosjekter og høye krav til effektivitet. Maskinen håndterer både tørr og våt sandblåsing, og er ideell for industrielle applikasjoner.",
        category: "wet",
      },
      {
        slug: "ibix-helix-dyse",
        name: "IBIX® Helix dyse",
        description: "Patentert roterende dyse for 30% raskere rengjøring og skånsom behandling.",
        longDescription:
          "IBIX® Helix dyse er en revolusjonerende, patentert dyse som øker effektiviteten ved sandblåsing med opptil 30%. Den unike roterende designen skaper en spiralformet strøm av blåsemiddel som gir en mer jevn og skånsom behandling av overflaten. Dysen reduserer også forbruket av blåsemiddel og kompressorluft.",
        category: "accessory",
      },
    ]

    // Insert products
    for (const product of productData) {
      const [insertedProduct] = await db.insert(products).values(product).returning({ id: products.id })

      // Add features for each product
      if (product.slug === "ibix-9-basic") {
        await db.insert(productFeatures).values([
          { productId: insertedProduct.id, feature: "9 liter kapasitet" },
          { productId: insertedProduct.id, feature: "Kun 12 kg vekt" },
          { productId: insertedProduct.id, feature: "Enkel å transportere" },
          { productId: insertedProduct.id, feature: "Ideell for hobbybruk" },
        ])

        // Add specifications
        await db.insert(productSpecifications).values([
          { productId: insertedProduct.id, name: "Kapasitet", value: "9 liter" },
          { productId: insertedProduct.id, name: "Vekt", value: "12 kg" },
          { productId: insertedProduct.id, name: "Maks trykk", value: "8 bar" },
          { productId: insertedProduct.id, name: "Luftforbruk", value: "350-700 l/min" },
        ])

        // Add images
        await db.insert(productImages).values([
          {
            productId: insertedProduct.id,
            url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%283%29-RrXNXQiS0K518yqePzzEmZ1K5n8cJt.jpeg",
            alt: "IBIX 9 Basic sandblåser",
            isPrimary: true,
          },
        ])
      }

      if (product.slug === "ibix-problaster-25-h2o") {
        await db.insert(productFeatures).values([
          { productId: insertedProduct.id, feature: "Kombinert tørr og våt blåsing" },
          { productId: insertedProduct.id, feature: "25 liter kapasitet" },
          { productId: insertedProduct.id, feature: "Støvreduserende teknologi" },
          { productId: insertedProduct.id, feature: "Justerbart vanntrykk" },
        ])

        // Add specifications
        await db.insert(productSpecifications).values([
          { productId: insertedProduct.id, name: "Kapasitet", value: "25 liter" },
          { productId: insertedProduct.id, name: "Vekt", value: "28 kg" },
          { productId: insertedProduct.id, name: "Maks trykk", value: "9 bar" },
          { productId: insertedProduct.id, name: "Luftforbruk", value: "700-1400 l/min" },
          { productId: insertedProduct.id, name: "Vanntrykk", value: "0.5-10 bar" },
        ])

        // Add images
        await db.insert(productImages).values([
          {
            productId: insertedProduct.id,
            url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandbl%C3%A5ser%20%286%29-XaPI1VRqmQPLtpYlncbxkzHK4GS6IH.jpeg",
            alt: "IBIX Problaster 25 H2O kombiblåser",
            isPrimary: true,
          },
        ])
      }
    }

    console.log(`Seeded ${productData.length} products with features, specifications, and images`)
    return { success: true }
  } catch (error) {
    console.error("Error seeding product data:", error)
    return { success: false, error }
  }
}

// Main seed function
export async function seedDatabase() {
  try {
    await seedChatData()
    await seedContactData()
    await seedProductData()
    return { success: true }
  } catch (error) {
    console.error("Error seeding database:", error)
    return { success: false, error }
  }
}
