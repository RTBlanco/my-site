// import Logo from "../../images/logo-1-color.png"
// import Logo2 from "../../images/logo-2-color.png"
// import Logo3 from "../../images/logo-3-color.png"
// import Logo4 from "../../images/logo-4-color.png"
// import Logo5 from "../../images/logo-5-color.png"
// import Logo6 from "../../images/logo-6-color.png"

const Clients = () => {

  // const clientsItems = [
  //   {
  //     logo: Logo,
  //     alt: "Client logo",
  //     link: "#"
  //   },
  //   {
  //     logo: Logo2,
  //     alt: "Client logo",
  //     link: "#"
  //   },
  //   {
  //     logo: Logo3,
  //     alt: "Client logo",
  //     link: "#"
  //   },
  //   {
  //     logo: Logo4,
  //     alt: "Client logo",
  //     link: "#"
  //   },
  //   {
  //     logo: Logo5,
  //     alt: "Client logo",
  //     link: "#"
  //   },
  //   {
  //     logo: Logo6,
  //     alt: "Client logo",
  //     link: "#"
  //   }
  // ];


  const renderClients = () => (
    clientsItems.map((item, index) => (
      <li key={index} className="clients-item">
        <a href={item.link}>
          <img src={item.logo} alt={item.alt} />
        </a>
      </li>
    )
  ))
  


  return (
    <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

       {renderClients()}

      </ul>

    </section>
  )
}

export default Clients;