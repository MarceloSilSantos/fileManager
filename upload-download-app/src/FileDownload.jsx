import React, { useState } from 'react';

const FileDownload = () => {
    const [filename, setFilename] = useState('');

    const handleDownload = () => {
        window.location.href = `http://localhost:8080/api/files/download/${filename}`;
    };

    return (
        <div>
            <input type="text" placeholder="Nome do arquivo" value={filename} onChange={(e) => setFilename(e.target.value)} />
            <button onClick={handleDownload}>Download</button>
        </div>
    );
};

export default FileDownload;
