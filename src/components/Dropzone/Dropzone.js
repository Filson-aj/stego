import { useMemo, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out',
    margin: '10px 0',
    minHeight: '150px',
    textAlign: 'center',
};
const activeStyle = {
    borderColor: '#2196f3',
};
const acceptStyle = {
    borderColor: '#00e676',
};
const rejectStyle = {
    borderColor: '#ff1744',
};

const Dropzone = ({ onDrop, files}) =>{

    const {getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject} = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png',
        maxFiles: 1,
    });

    const style = useMemo(() =>({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
    }), [isDragActive, isDragAccept, isDragReject]);

    const thumbs = files.map(file =>(
        <div key={file.name}>
            <img src={file.preview} alt={file.name}
                style={{width: '100%', height: '300px', boxSizing: 'border-box'}} />
        </div>
    ));

    useEffect(() => () =>{
        files.forEach(file =>URL.revokeObjectURL(file.preview));
    }, [files]);

    return(
        <div {...getRootProps({style})}>
            <input {...getInputProps()} />
            {files.length > 0 ?<aside>{thumbs}</aside> : 
                <div>Drag and drop file here or click to select file.</div>}
        </div>
    );
};

export default Dropzone;