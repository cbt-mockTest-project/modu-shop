import "styled-components";
import { AliasToken } from "antd/lib/theme/internal";

declare module "styled-components" {
  export interface DefaultTheme extends AliasToken {}
}
