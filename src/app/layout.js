// src/app/layout.js
import './globals.css';
export const metadata = {
  title: 'Hiring Tech',
  description: 'Discover exceptional talent and post your job today!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
