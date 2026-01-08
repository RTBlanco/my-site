export default function Admin() {
  return (
    <article className="admin active" data-page="admin">

      <header>
        <h2 className="h2 article-title">Dashboard</h2>
      </header>

      <section className="dashboard">

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Category</th>
                <th>Client</th>
                <th>Status</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="project-cell">
                    <div className="project-image" style={{background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%);"}}></div>
                    <div className="project-info">
                      <h3>Finance Dashboard</h3>
                      <p>Analytics platform</p>
                    </div>
                  </div>
                </td>
                <td><span className="tag webdev">Web development</span></td>
                <td>FinTech Corp</td>
                <td><span className="status completed">Completed</span></td>
                <td>2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </article>
  )
}