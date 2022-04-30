import { Text } from "@alura/design-system";
import { sum } from "@alura/utils/math/sum";

export function HomeScreen() {
  return (
    <div>
      <Text tag="h1">Home do Projeto</Text>
      <Text tag="p">@alura/utils/math/sum: sum(2,2) = {sum(2, 2)}</Text>
    </div>
  );
}
