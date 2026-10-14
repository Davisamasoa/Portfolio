import { Site } from "@/components/site";
import { dictionaries } from "@/content";

export default function Page() {
  return <Site t={dictionaries.en} />;
}
