import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { CartProvider } from "../components/CartContext"

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <CartProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="welcome" options={{ headerShown: false }} />
          <Stack.Screen name="signup" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
          <Stack.Screen name="explore" options={{ headerShown: false }} />
          <Stack.Screen name="learn" options={{ headerShown: false }} />
          <Stack.Screen name="lesson/alphabet" options={{ headerShown: false }} />
          <Stack.Screen name="lesson/numbers" options={{ headerShown: false }} />
          <Stack.Screen name="goals" options={{ headerShown: false }} />
          <Stack.Screen name="game" options={{ headerShown: false }} />
          <Stack.Screen name="marketplace" options={{ headerShown: false }} />
          <Stack.Screen name="product/[id]" options={{ headerShown: false }} />
          <Stack.Screen name="settings" options={{ headerShown: false }} />
          <Stack.Screen name="cart" options={{ headerShown: false }} />
          <Stack.Screen name="profile" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </CartProvider>
    </>
  )
}