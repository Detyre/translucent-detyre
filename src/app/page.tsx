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

const mockImages = [...mockCarImages, ...mockCarImages, ...mockCarImages].map(
  (carImg, index) => ({
    id: index + 1,
    ...carImg,
  }),
);

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 px-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 rounded-md">
            <img src={image.url} alt={image.car} />
          </div>
        ))}
      </div>
    </main>
  );
}
