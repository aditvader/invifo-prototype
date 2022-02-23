import React, { useState, useEffect } from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import FileViewer from "react-file-viewer";
function CustomFileViewer({ filePath = "", fileType = "" }) {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    setDocs([...docs, { uri: filePath }]);
  }, []);

  return (
    <React.Fragment>
      {fileType === "gif" ||
      fileType === "mp4" ||
      fileType === "webm" ||
      fileType === "mp3" ? (
        <FileViewer
          fileType={fileType}
          filePath={filePath}
          style={{ minHeight: "calc( 100vh - 220px )" }}
        />
      ) : (
        <DocViewer
          documents={docs}
          pluginRenderers={DocViewerRenderers}
          config={{
            header: {
              disableHeader: true,
              disableFileName: true,
              retainURLParams: false,
            },
          }}
          style={{ minHeight: "calc( 100vh - 220px )" }}
        />
      )}
    </React.Fragment>
  );
}

export default CustomFileViewer;
