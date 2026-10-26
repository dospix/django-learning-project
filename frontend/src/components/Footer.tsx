export default function Footer() {
  return (
    <footer className="mt-4 border-t border-gray-200">
      <div className="py-5">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold">Django learning project store.</span>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}