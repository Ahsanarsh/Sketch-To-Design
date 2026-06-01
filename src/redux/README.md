# Redux Toolkit (RTK) Setup in Next.js (App Router)

Yeh document hamare project mein Redux Toolkit ke setup ko detail mein samajhata hai. Isme hum dekhenge ke humne Redux ko traditional (simple) tarike se kyun setup nahi kiya, aur Next.js ke modern Server-Side Rendering (SSR) environment mein iska kya faida hai.

---

## 🚀 Traditional (Simple) Setup vs. Next.js (SSR) Setup

Traditional React apps (jaise Create React App ya Vite) mein hum simple tarike se store setup karte hain:
```typescript
// Traditional Way (DO NOT USE IN NEXT.JS)
export const store = configureStore({
  reducer: rootReducer
})
```
Aur phir root element par wrapping karte hain: `<Provider store={store}>`.

### ⚠️ Simple Way Next.js mein kyun fail ho jata hai?

Next.js ek **Server-Side Rendered (SSR)** framework hai. Iska matlab hai ke aapka code pehle Server par run hota hai aur phir HTML bankar Client (browser) par aata hai. Agar hum simple singleton pattern use karein, toh niche diye gaye masle paida hote hain:

1. **State Leak (Security Issue) 🔒:**
   Server par ek hi Node.js process chal rahi hoti hai jo hazaron users ki requests ko serve karti hai. Agar humne ek static single store instance (`export const store = ...`) banaya, toh server par **sare users ek hi store share karenge**. Agar User A ne login kiya aur uska data store mein save hua, toh User B ko bhi User A ka data show ho sakta hai. 
   * **Solution:** Hum `makeStore()` function banate hain jo har request par naya aur bilkul fresh store generate karta hai.

2. **Server-to-Client Hydration 🌊:**
   Server-side par hum details fetch karte hain (jaise `layout.tsx` mein user profile data: `await ProfileQuery()`). Hum chahte hain ke jab client page load kare, toh usey yeh data pehle se Redux store mein mile. Dynamic `makeStore(preloadedState)` ke zariye hum server-side state ko direct client store ke initial state mein inject kar sakte hain.

3. **Hot Module Replacement (HMR) / Client-side Re-renders 🔄:**
   Development ke dauran jab aap file save karte hain, Next.js components ko reload karta hai. Agar hum dynamic store handle na karein, toh har hot reload par store dobara generate ho jayega aur aapka client-side state bar-bar reset ho jayega.
   * **Solution:** Hum React `useRef` ka use karte hain jo page rerender hone par bhi store instance ko persist rakhta hai.

---

## 🛠️ Code Breakdown

### 1. `src/redux/store.ts` (Store Configuration)
Hum is file mein reducers aur API middlewares ko combine kar ke store templates generate karte hain:

```typescript
// 1. Root State dynamic type nikalne ke liye
export type RootState = ReturnType<typeof rootReducer>

// 2. Apne saare slice reducers aur dynamic API reducers ko combine karna
const rootReducer = combineReducers({
  ...slices,
  ...apis.reduce((acc, api) => {
    acc[api.reducerPath] = api.reducer
    return acc
  }, {} as ReducersMapObject),
})

// 3. makeStore function jo request-specific store create karta hai
export function makeStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (gDM) =>
      gDM().concat(...apis.map((a) => a.middleware as Middleware)),
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
  })
}

// 4. Typed Hooks export karna taake typesafe dispatch aur state access ho sake
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
```

### 2. `src/redux/provider.tsx` (Safe Client Wrapper)
Yeh component page level elements ko secure and isolated store provide karta hai:

```tsx
'use client' // Client side hook run karne ke liye zaroori hai

import React, { ReactNode, useRef } from 'react'
import { makeStore, AppStore } from './store'
import { Provider } from 'react-redux'

const ReduxProvider = ({
  children,
  preloadedState,
}: {
  children: ReactNode
  preloadedState?: Partial<RootState>
}) => {
  // useRef ensure karta hai ke client-side reload par naya store create na ho
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore(preloadedState)
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

export default ReduxProvider
```

---

## 💡 How to use Redux in Components?

Components mein data read ya actions dispatch karne ke liye hum standard react-redux hooks ke bajaye **custom hooks** use karte hain taake Typescript autocomplete and validation provide kare.

### Read State (useAppSelector):
Normal React-Redux mein: `const user = useSelector((state: RootState) => state.profile)`
Is Setup mein:
```tsx
import { useAppSelector } from "@/redux/store";

const Navbar = () => {
  // state auto-typed hai aur "state." dabane par IDE autocomplete options dega
  const user = useAppSelector((state) => state.profile); 
  
  return <div>Welcome, {user.name}</div>;
}
```

### Dispatch Actions (useAppDispatch):
```tsx
import { useAppDispatch } from "@/redux/store";
import { logout } from "@/redux/slices/userSlice";

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(logout())}>
      Logout
    </button>
  );
}
```

---

## 📁 Slices aur APIs Kaise Add Karein?

1. **New UI State (Slices):**
   * `src/redux/slices/` folder mein new file banayein, e.g., `userSlice.ts`.
   * `src/redux/slices/index.ts` file mein usey export karein taake woh auto-register ho jaye:
     ```typescript
     import userReducer from "./userSlice";
     export const slices = {
       user: userReducer,
     };
     ```

2. **New Server State (RTK Query / APIs):**
   * `src/redux/api/` mein api slice register karein.
   * `src/redux/api/index.ts` mein usey `apis` array mein add karein taake reducer aur middleware auto-inject ho sake.
