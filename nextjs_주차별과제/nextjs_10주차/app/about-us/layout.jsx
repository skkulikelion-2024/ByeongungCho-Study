
export const metadata = {
    title: {
        template:"%s | next movies",
        default: "Loading..",
    },
    description: 'The best movies on the best framework'
};

export default function RootLayout({ children }) {
    return (
      <div>
          {children}
          &copy; Next js is great!
      </div>
    )
  }