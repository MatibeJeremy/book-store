import SearchPage from "@/app/search/page";
import ReduxProvider from "@/app/store/ReduxProvider";

export default function Home() {
    return (
        <main>
            <div>
                <ReduxProvider>
                    <SearchPage/>
                </ReduxProvider>
            </div>
        </main>
    );
}
