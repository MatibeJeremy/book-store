import SearchPage from "@/app/search/page";
import ReduxProvider from "@/app/store/ReduxProvider";
import {theme} from "@/app/components/theme";
import {ThemeProvider} from "@mui/material";

export default function Home() {
  return (
    <main>
        <ReduxProvider>
            <ThemeProvider theme={theme}>
                <SearchPage/>
            </ThemeProvider>
        </ReduxProvider>
    </main>
  );
}
