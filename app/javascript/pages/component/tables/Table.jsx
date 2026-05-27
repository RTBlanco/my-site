import { Link, router } from "@inertiajs/react"
import { useState } from "react";

// redo the table there is to much happening 
const Table = ({ modalRef, children, name, toggleModal, populateModal, tableType, headers}) => {

  const [items, setItems] = useState(children)
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index)
  }


  const isProject = () => {
    return tableType === "project"
  }

  const isQrCode = () => (
    tableType === "qrCodes"
  )

  const handleDragDrop = (dropIndex) => {
    
   if (dragIndex === null) return;

    const updated = [...items];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(dropIndex, 0, moved);

    const order = updated.map(item => item.id)
    router.patch("/admin", {admin: {projects_order: order}}, {
     preserveState: true,
     preserveScroll: true,
     onSuccess: (page) => {
       setItems(updated);
       setDragIndex(null);
     }
    })
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  // console.log(Object.keys(items[0]))

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th className="table-name">
              {name}

              <button style={{"marginLeft": "10px"}} onClick={(e) => toggleModal(modalRef)}>
                <ion-icon name="add-circle-outline"></ion-icon>
              </button>
            </th>
           
            {
              headers.map(key => 
                <th key={key}>{key}</th>
              )
            }  

          </tr>
        </thead>
        <tbody>
          {items.map((child, index) => (
            <tr
              id={isProject() ? `project-${child.id}` : undefined}
              key={child.id}
              onClick={() => (isProject() ? undefined : populateModal(child))}
              draggable={isProject()}
              onDragStart={() => handleDragStart(index)}
              onDrop={() => handleDragDrop(index)}
              onDragOver={handleDragOver}
            >
              {isQrCode() ? (
                <>
                  <td>
                    <div className="project-cell">
                      {/* if QR Code just show image */}
                      <div className="project-image" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}></div>
                      
                      <Link href={`/qrcode/${child.id}`} className="form-btn" method="delete" as="button">
                        <ion-icon name="trash-bin-outline"></ion-icon>
                      </Link>
                      
                    </div>
                  </td>
                  <td>
                    <div className="project-info">
                      <h3>{child.desciption}</h3>
                    </div>
                  </td>
                  <td>
                    <div className="project-info">
                      <h3>{child.path}</h3>
                    </div>
                  </td>
                  <td>
                    <div className="project-info">
                      <h3>{child.hits}</h3>
                    </div>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <div className="project-cell">
                      <div className="project-image" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}></div>
                      <div className="project-info">
                        <h3>{child.title}</h3>
                      </div>
                      {isProject() && (
                        <Link href={`/Portfolio/${child.id}`} className="form-btn" method="delete" as="button">
                          <ion-icon name="trash-bin-outline"></ion-icon>
                        </Link>
                      )}
                    </div>
                  </td>
                  <td>
                    <span className="tag webdev">{child.category}</span>
                  </td>
                  {tableType === 'qrCodes' ? null : <td>{child.dateLabel.split(', ')[1]}</td>}
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;