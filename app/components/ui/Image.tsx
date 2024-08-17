import Image from 'next/image';

export default function NextImage(props:any){
return (
    <Image width={props.width} height={props.height} alt={props.alt} src={props.src}/>
)
}