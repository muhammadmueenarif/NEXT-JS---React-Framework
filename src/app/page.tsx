import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>This is home page</h1>
      <style jsx>
        {`
          h1{
            color: "red";
            text-align: "center";
            font-size: "3rem";
          }`
        }
      </style>
    </div>
  );
}
