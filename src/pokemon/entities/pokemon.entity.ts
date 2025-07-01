import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  //? Mongo ya nos da el id de tipo string

  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  numberPokemon: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
