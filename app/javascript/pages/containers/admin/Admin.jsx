import Table from "../../component/tables/Table"

export default function Admin() {

  const projects = [
    {
      id: 1,
      title: "Finance Dashboard",
      description: "Analytics platform",
      category: "Web development",
      year: 2024,
    },
  ];

  return (
    <article className="admin active" data-page="admin">

      <header>
        <h2 className="h2 article-title">Dashboard</h2>
      </header>

      <section className="dashboard">

        <Table name={"projects"}>
          {projects}
        </Table>
        <Table name={"Blogs"}>
          {projects}
        </Table>
      </section>

    </article>
  )
}