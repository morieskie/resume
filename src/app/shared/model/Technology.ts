import {Competency} from "../enum/competency";

export interface Technology {
  tech: string
  competency: Competency
  experience: number

  color?: string
}
