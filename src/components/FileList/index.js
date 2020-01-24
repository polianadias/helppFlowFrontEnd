import React from 'react'
import { Container, FileInfo, Preview } from './styles'
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

const FileList = ({ files }) => (

    <Container>
        {files.map(uploadedFile => (
            <li>
                <FileInfo>
                    <Preview src={uploadedFile.preview} />
                    <div>
                        <strong>{uploadedFile.name}</strong>
                        <span>{uploadedFile.readableSize} <button onClick={() => { }}>Excluir</button></span>
                    </div>
                </FileInfo>

                <div>
                    {!uploadedFile.uploaded && !uploadedFile.error && (

                        <CircularProgressbar
                            styles={{
                                root: { width: 24 },
                                path: { stroke: '#7159c1' }
                            }}
                            strokeWidth={10}
                            percentage={uploadedFile.progress}
                        />
                    )}


                    {uploadedFile.url && (

                        <a
                            href="/Users/polianadias/Documents/helppflowfrontend/src/iconfinder_icon-102-document-file-xml_315587.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdLink style={{ marginRight: 8 }} size={24} color="#222"></MdLink>
                        </a>
                    )}
                    {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5"></MdCheckCircle>}
                    {uploadedFile.error && <MdError size={24} color="#e57878"></MdError>}

                </div>


            </li>
        ))}
    </Container >

)
export default FileList