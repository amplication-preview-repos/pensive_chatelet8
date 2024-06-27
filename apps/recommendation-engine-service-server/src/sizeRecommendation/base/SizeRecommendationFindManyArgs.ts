/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SizeRecommendationWhereInput } from "./SizeRecommendationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SizeRecommendationOrderByInput } from "./SizeRecommendationOrderByInput";

@ArgsType()
class SizeRecommendationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SizeRecommendationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SizeRecommendationWhereInput, { nullable: true })
  @Type(() => SizeRecommendationWhereInput)
  where?: SizeRecommendationWhereInput;

  @ApiProperty({
    required: false,
    type: [SizeRecommendationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SizeRecommendationOrderByInput], { nullable: true })
  @Type(() => SizeRecommendationOrderByInput)
  orderBy?: Array<SizeRecommendationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SizeRecommendationFindManyArgs as SizeRecommendationFindManyArgs };
