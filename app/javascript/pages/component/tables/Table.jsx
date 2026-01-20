const Table = ({children, name, toggleModal, populateModal}) => {

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th className="table-name">
              {name}

              <button style={{"marginLeft": "10px"}} onClick={toggleModal}>
                <ion-icon name="add-circle-outline"></ion-icon>
              </button>
            </th>
            <th>Category</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {children.map(child => (
            <tr key={child.id} onClick={() => populateModal(child)}>
              <td>
                <div className="project-cell">
                  <div className="project-image" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}></div>
                  <div className="project-info">
                    <h3>{child.title}</h3>
                  </div>
                </div>
              </td>
              <td><span className="tag webdev">{child.category}</span></td>
              <td>{child.dateLabel.split(', ')[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;