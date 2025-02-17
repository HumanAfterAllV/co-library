import { useRef, useState } from "react";
import { NextResponse } from 'next/server';

import ImageKit from 'imagekit'
import { 
    IKImage, 
    IKVideo, 
    ImageKitProvider, 
    IKUpload, 
    ImageKitContext 
} from "imagekitio-next";

import { config } from "@/lib/config";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";


const {
    env: {
        apiEndpoint,
        imagekit: {
            publicKey, urlEndpoint
        }
    },
} = config


const authenticator = async () => {
    try{
        const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`)

        if(!response.ok){

            const errorText = await response.text()

            throw new Error(`Request failed with status ${response.status}: ${errorText}`)
        }

        const data = await response.json();

        const {signature, expire, token} = data;

        console.log(apiEndpoint)
        return {
            token,
            expire,
            signature,
        }
    }
    catch(err: any){
        throw new Error(`Authentication request failed: ${err.message}`);

    }
}

type ImageUploadProps = {
    type?: "image" | "video";
    accept?: string;
    placeholder?: string;
    folder?: string;
    variant?: "dark" | "light";
    onFileChange: (filePath: string) => void;
    value?: string;
}

export default function ImageUpload({type, accept, placeholder, folder, variant, onFileChange, value}: ImageUploadProps): React.JSX.Element {

    const IKUploadRef = useRef(null)
    const [file, setFile] = useState<{ filePath: string} | null>(null);
    
    const onError = (response: any) => {
        console.log("Public Key:", publicKey);
        console.log("URL Endpoint:", urlEndpoint);

        console.log("error")
        toast({
            title: "Image upload failed",
            description: `${response.filePath} uploaded failed`,
            variant: "destructive"
        })
    }

    const onSuccess = (response: any) => {
        setFile(response)
        onFileChange(response.filePath)

        toast({
            title: "Image uploaded successfully",
            description: `${response.filePath} uploaded successfully`,
        })
    }
    return(
        <ImageKitProvider 
            publicKey={publicKey}
            urlEndpoint={urlEndpoint}
            authenticator={authenticator}
        >
            <IKUpload
                ref={IKUploadRef}
                onError={onError}
                onSuccess={onSuccess}
                fileName="file"
                className="hidden"
            />
            <button className="upload-btn" onClick={(e) => {
                e.preventDefault()

                if(IKUploadRef.current){
                    // @ts-ignore
                    IKUploadRef.current?.click()
                }
            }}>
                <Image 
                    src="/icons/upload.svg" 
                    alt="upload-icon"
                    width={20}
                    height={20} 
                    className="object-contain"
                />
                <p className="text-base text-light-100">Upload a File</p>
                {file && <p className="upload-filename">{file.filePath}</p>}
            </button>
            {file && (
                <IKImage
                    alt={file.filePath!}
                    path={file.filePath!}
                    width={500}
                    height={300}
                />
            )}
        </ImageKitProvider>
    )
}