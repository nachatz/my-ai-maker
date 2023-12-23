import { ModelsLayout } from "~/layouts";
import { ModelLayoutProvider } from "~/context";

export default function Models() {
  return (
    <ModelLayoutProvider>
      <ModelsLayout />
    </ModelLayoutProvider>
  );
}
