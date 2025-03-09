import { UserModel } from "@/common/models/user.model"

export namespace AuthenticatedUser {
  export type response = {
    id: string
    token: string
    isActive: boolean,
    startDate: Date
    endDate: Date | null,
    user: UserModel
  }
}