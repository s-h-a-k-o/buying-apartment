import { ApiWrapper } from "./ApiWrapper";
import { createFormData } from "@/utils/formdata";
import { ApartmentModel } from "@/models/apartment";

export class ApiApartment {
  constructor(private readonly req: ApiWrapper) {}

  addApartment = async (
    body: ApartmentModel & { files: File[] }
  ): Promise<any> => {
    const formData = createFormData(body);
    const { data } = await this.req.POST<any>(
      "აქ ის ურლ რაც პოსტმენშია",
      formData, // JSON ობიექტის ნაცვლად უნდა გააყოლო ესე და ქვემოთ ჰედერიც როგორცაა ისე გააყოლე
      {
        headers: {
          Accept: "multipart/form-data",
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };
}
