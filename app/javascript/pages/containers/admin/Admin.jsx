import Table from "../../component/tables/Table"
import { usePage } from "@inertiajs/react";

export default function Admin() {

  const { blogs } = usePage().props

  const projects = [
    {
      id: 1,
      title: "Finance Dashboard",
      description: "Analytics platform",
      category: "Web development",
      dateLabel: "Jan 12, 2026"
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
          {blogs}
        </Table>
      </section>

    </article>
  )
}