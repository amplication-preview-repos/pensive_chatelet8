import * as graphql from "@nestjs/graphql";
import { ClothingItemResolverBase } from "./base/clothingItem.resolver.base";
import { ClothingItem } from "./base/ClothingItem";
import { ClothingItemService } from "./clothingItem.service";

@graphql.Resolver(() => ClothingItem)
export class ClothingItemResolver extends ClothingItemResolverBase {
  constructor(protected readonly service: ClothingItemService) {
    super(service);
  }
}
