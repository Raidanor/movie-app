import { Stack } from "expo-router";
import './globals.css'
import { StatusBar } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from "react";

export default function RootLayout() {

    useEffect(() => {
        NavigationBar.setVisibilityAsync("hidden")
    }, [])


    return (
        <>
            <Stack>
                <StatusBar hidden={true} />
                <Stack.Screen 
                    name="(tabs)" 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="movies/[id]"
                    options={{headerShown: false}}
                />


            </Stack>
        </>
    );
}
