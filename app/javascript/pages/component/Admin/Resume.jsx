import { User, Clock, FileText, X, Upload } from 'lucide-react'
import { useEffect, useState, useRef } from 'react';

//   return (
//     <div className="resumeCard-wrapper">
//       {/* <div className="file">
//         <div id="admin-resume-image" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}></div>
//         <p className="file-name">Ronny_Toribio_Resume.pdf</p>
//         <p className="detail">Click to upload a new version</p>
//       </div> */}


//       <button className="resumeCard-preview">
//         <div className="resumeCard-previewInner">
//           <div className="resumeCard-iconSquare">
//             <FileText size={28} color="#ffffff" strokeWidth={1.75} />
//           </div>
//           <div className="resumeCard-previewText">
//             <p className="resumeCard-fileName">
//               {"No resume uploaded"}
//             </p>
//             <p className="resumeCard-hint">Click to upload a new version</p>
//           </div>
//         </div>
//         <div className="resumeCard-previewOverlay" />
//       </button>


//       <div className="resumeCard-info">
//         <div className="resumeCard-infoRow">
//           <div className="resumeCard-infoIcon">
//             <User size={16} strokeWidth={1.75} />
//           </div>
//           <div>
//             <p className="resumeCard-infoLabel">Name</p>
//             <p className="resumeCard-infoValue">Ronny Toribio Blanco</p>
//           </div>
//         </div>
//         <div className="resumeCard-infoRow">
//           <div className="resumeCard-infoIcon">
//             <Clock size={16} strokeWidth={1.75} />
//           </div>
//           <div>
//             <p className="resumeCard-infoLabel">Latest upload</p>
//             <p className="resumeCard-infoValue">{"Never uploaded"}</p>
//           </div>
//         </div>
//       </div>


//     </div>
//   )
// }

// export default Resume
const Resume = () => { 
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingFile, setPendingFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
 
  // Mock resume state — replace with real data from your backend
  const [resume, setResume] = useState({
    fileName: "Ronny_Toribio_Resume.pdf",
    uploadedAt: "2026-06-20T14:32:00Z",
  });
 
  const formattedDate = resume
    ? new Date(resume.uploadedAt).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : null;
 
  const openModal = () => {
    setPendingFile(null);
    setIsModalOpen(true);
  };
 
  const closeModal = () => {
    setIsModalOpen(false);
    setPendingFile(null);
    setIsDragging(false);
  };
 
  const handleFileSelect = (file) => {
    if (file) setPendingFile(file);
  };
 
  const handleConfirmUpload = () => {
    if (!pendingFile) return;
    // Mock only — swap this for your real upload call, e.g.:
    // await fetch('/resumes', { method: 'POST', body: formData })
    setResume({
      fileName: pendingFile.name,
      uploadedAt: new Date().toISOString(),
    });
    closeModal();
  };
 
  return (
    <div className="resumeCard-wrapper">
      {/* LEFT: resume preview tile, click to open upload modal */}
      <button onClick={openModal} className="resumeCard-preview">
        <div className="resumeCard-previewInner">
          <div className="resumeCard-iconSquare">
            <FileText size={28} color="#ffffff" strokeWidth={1.75} />
          </div>
          <div className="resumeCard-previewText">
            <p className="resumeCard-fileName">
              {resume ? resume.fileName : "No resume uploaded"}
            </p>
            <p className="resumeCard-hint">Click to upload a new version</p>
          </div>
        </div>
        <div className="resumeCard-previewOverlay" />
      </button>
 
      {/* RIGHT: info panel */}
      <div className="resumeCard-info">
        <div className="resumeCard-infoRow">
          <div className="resumeCard-infoIcon">
            <User size={16} strokeWidth={1.75} />
          </div>
          <div>
            <p className="resumeCard-infoLabel">Name</p>
            <p className="resumeCard-infoValue">Ronny Toribio Blanco</p>
          </div>
        </div>
        <div className="resumeCard-infoRow">
          <div className="resumeCard-infoIcon">
            <Clock size={16} strokeWidth={1.75} />
          </div>
          <div>
            <p className="resumeCard-infoLabel">Latest upload</p>
            <p className="resumeCard-infoValue">{formattedDate || "Never uploaded"}</p>
          </div>
        </div>
      </div>
 
      {/* MODAL */}
      {isModalOpen && (
        <div className="resumeCard-modalOverlay" onClick={closeModal}>
          <div className="resumeCard-modal" onClick={(e) => e.stopPropagation()}>
            <div className="resumeCard-modalHeader">
              <h2 className="resumeCard-modalTitle">Upload resume</h2>
              <button
                onClick={closeModal}
                className="resumeCard-closeBtn"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
 
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                handleFileSelect(e.dataTransfer.files?.[0]);
              }}
              onClick={() => fileInputRef.current?.click()}
              className={`resumeCard-dropzone${isDragging ? " is-dragging" : ""}`}
            >
              <Upload size={24} color="rgba(255,255,255,0.4)" strokeWidth={1.75} />
              <div className="resumeCard-dropzoneText">
                <p>
                  Drag and drop a file, or <span className="browse">browse</span>
                </p>
                <p className="resumeCard-dropzoneSubtext">Any file type accepted</p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                className="resumeCard-fileInput"
                onChange={(e) => handleFileSelect(e.target.files?.[0])}
              />
            </div>
 
            {pendingFile && (
              <div className="resumeCard-pendingFile">
                <FileText size={16} className="resumeCard-pendingFileIcon" />
                <span>{pendingFile.name}</span>
              </div>
            )}
 
            <div className="resumeCard-modalActions">
              <button onClick={closeModal} className="resumeCard-btn resumeCard-btnCancel">
                Cancel
              </button>
              <button
                onClick={handleConfirmUpload}
                disabled={!pendingFile}
                className="resumeCard-btn resumeCard-btnUpload"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
 
export default Resume;
