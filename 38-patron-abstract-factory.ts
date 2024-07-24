type TYPE_FACTORY = "CLOUD" | "ONPREMISE";

type CloudDestinations = "AWS" | "AZURE" | "GCP" | "DO";
type OnPremiseDestinations = "ONPREMISE01" | "ONPREMISE02";

interface IUpload {
  save(file: File): void;
}

class FactoryUploadAWS implements IUpload {
  save(file: File) {
    console.log("File uploaded to AWS");
  }
}

class FactoryUploadAZURE implements IUpload {
  save(file: File) {
    console.log("File uploaded to AZURE");
  }
}

class FactoryUploadGCP implements IUpload {
  save(file: File) {
    console.log("File uploaded to GCP");
  }
}

class FactoryUploadDO implements IUpload {
  save(file: File) {
    console.log("File uploaded to DO");
  }
}

class FactoryUploadOnPremise01 implements IUpload {
  save(file: File) {
    console.log("File uploaded to OnPremise01");
  }
}

class FactoryUploadOnPremise02 implements IUpload {
  save(file: File) {
    console.log("File uploaded to OnPremise02");
  }
}

const prop: { [k: string]: string } = {
  name: "Luis",
  lastname: "Zapata",
};

const prop2: Record<string, string> = {
  name: "Luis",
  lastname: "Zapata",
};

const abstractFactories: Record<
  TYPE_FACTORY,
  Record<string, { new (): IUpload }>
> = {
  CLOUD: {
    AWS: FactoryUploadAWS,
    AZURE: FactoryUploadAZURE,
    GCP: FactoryUploadGCP,
    DO: FactoryUploadDO,
  },
  ONPREMISE: {
    ONPREMISE01: FactoryUploadOnPremise01,
    ONPREMISE02: FactoryUploadOnPremise02,
  },
};

type Destination<T extends TYPE_FACTORY> = T extends "CLOUD"
  ? CloudDestinations
  : OnPremiseDestinations;

function SelectFactoryUpload<T extends TYPE_FACTORY>(
  cloudOrOnPremise: T,
  destination: Destination<T>
) {
  return new abstractFactories[cloudOrOnPremise][destination]();
}

const file = new File(["datos"], "report.txt", { type: "text/plain" });
const factoryUpload: IUpload | null = SelectFactoryUpload("CLOUD", "AZURE");
factoryUpload.save(file);
