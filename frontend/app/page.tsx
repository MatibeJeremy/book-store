import SearchPage from "@/app/search/page";
import ReduxProvider from "@/app/store/ReduxProvider";
import {ThemeProvider} from "@mui/material";
import {theme} from "@/app/components/theme";
import SnackbarWrapper from "@/app/components/SnackbarWrapper";

export default function Home() {
    return (
        <main>
            <ReduxProvider>
                <ThemeProvider theme={theme}>
                    <SnackbarWrapper>
                        <SearchPage/>
                    </SnackbarWrapper>
                </ThemeProvider>
            </ReduxProvider>
        </main>
    );
}
