export enum RealEstateType {
  APARTMENT = "Apartment",
  HOUSING = "Housing",
  LAND = "Land",
}

export enum TransactionType {
  FOR_SALE = "ForSale",
  FOR_RENT = "ForRent",
}

export interface ApartmentModel {
  realEstateType: RealEstateType;
  transactionType: TransactionType;
  location: string;
  imagePaths: string[];
  mainImageIndex: number;
  indoorArea: number;
  wholeArea: number;
  price: number;
  description: string;
}
