import { useRouter } from "next/router";

function BackButton() {
  const router = useRouter();

  return (
    <button
      className="text-blue-500 hover:underline"
      onClick={() => {
        router.back();
      }}
    >
      &lt;- Back
    </button>
  );
}

export default BackButton;
