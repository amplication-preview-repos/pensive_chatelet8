import { Module } from "@nestjs/common";
import { ClothingItemModuleBase } from "./base/clothingItem.module.base";
import { ClothingItemService } from "./clothingItem.service";
import { ClothingItemController } from "./clothingItem.controller";
import { ClothingItemResolver } from "./clothingItem.resolver";

@Module({
  imports: [ClothingItemModuleBase],
  controllers: [ClothingItemController],
  providers: [ClothingItemService, ClothingItemResolver],
  exports: [ClothingItemService],
})
export class ClothingItemModule {}
