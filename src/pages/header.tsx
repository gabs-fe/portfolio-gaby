import Link from "next/link";

 export default function Home() {
  return (
    <>
     <nav style={{display: "flex", justifyContent: "space-around"}}>
        <Link href="/sobre">
          <h2>SOBRE MIM</h2>
        </Link>
        <Link href="/sobre">
          <h2>CONTATO</h2>
        </Link>
        <Link href="/sobre">
          <h2>BLOG</h2>
        </Link>
        <Link href="/sobre">
          <h2>PROJETOS</h2>
        </Link>
      </nav>
    </>
  );
}
 
 