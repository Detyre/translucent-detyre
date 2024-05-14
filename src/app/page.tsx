import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

const mockCarImages = [
  {
    url: "https://utfs.io/f/45298995-a0de-453f-97e8-4ed550a3db7f-9i4gje.jpg",
    car: "ford focus",
  },
  {
    url: "https://utfs.io/f/777ab698-0af1-4909-9784-f17b5096ac6e-pkgb.jpg",
    car: "hyundai veloster",
  },
  {
    url: "https://utfs.io/f/3f8f5081-ae74-452b-865d-da049f739dc2-x6n1ue.jpg",
    car: "cupra formentor",
  },
  {
    url: "https://utfs.io/f/1c9a7986-aa59-4e97-981b-3e5fc9c4c8d9-4doa1t.jpg",
    car: "honda civic",
  },
];

export default async function HomePage() {
  return (
    <main className="grid h-full content-center justify-center">
      <SignedOut>Inicia ses&oacute;n</SignedOut>
      <SignedIn>Seras redirigido a la p&aacute;gina de inicio</SignedIn>
    </main>
  );
}
