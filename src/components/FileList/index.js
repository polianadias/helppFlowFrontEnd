import React from 'react'
import { Container, FileInfo, Preview } from './styles'
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

const FileList = () => (

    <Container>
        <li>
            <FileInfo>
                <Preview src="/Users/polianadias/Documents/helppflowfrontend/src/iconfinder_icon-102-document-file-xml_315587.png" />
                <div>
                    <strong>arquivo.xml</strong>
                    <span>64kb <button onClick={() => { }}>Excluir</button></span>
                </div>
            </FileInfo>

            <div>
                <CircularProgressbar
                    styles={{
                        root: { width: 24 },
                        path: { stroke: '#7159c1' }
                    }}
                    strokeWidth={10}
                    percentage={60}
                />


                <a
                    href="/Users/polianadias/Documents/helppflowfrontend/src/iconfinder_icon-102-document-file-xml_315587.png"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MdLink style={{ marginRight: 8 }} size={24} color="#222"></MdLink>
                </a>
                <MdCheckCircle size={24} color="#78e5d5"></MdCheckCircle>
                <MdError size={24} color="#e57878"></MdError>

            </div>


        </li>
    </Container >

)
export default FileList