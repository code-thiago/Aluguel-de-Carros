import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, SearchBar, CustomFilter, Hero } from "@/components";

export default async function Home({ searchParams }: HomeProps) {
  const query = await searchParams 
  const allCars = await fetchCars({
    manufacturer:  query.manufacturer || "",
    year:  query.year || 2022,
    fuel:  query.fuel || "",
    //limit:  query.limit || 10,
    // limit e para conta premiuns da API
    model:  query.model || "",
  });
  console.log(allCars);


  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de Carros</h1>
          <p>Explore os carros que você pode gostar</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
             <div className="home__cars-wrapper">
              {allCars?.map((car,i) => (
                <CarCard key={i} car={car}/>
            ))}
             </div>

             
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-x1 font-bold">Opa, sem resultados</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  )
}
    