import { ApiProperty } from "@nestjs/swagger"

export class QueryDto {
    @ApiProperty({
        type: String
    })
    tagName?: string
    @ApiProperty({
        type: String
    })
    tagValue?: string
    @ApiProperty({
        type: Number
    })
    latitude?: number
    @ApiProperty({
        type: Number
    })
    longitude?: number
}