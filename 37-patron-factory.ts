interface IUpload {
  save(file: File): void;
}

class FactoryUploadAWS implements IUpload {
  save(file: File): void {
    console.log("file uploaded to AWS");
  }
}

class FactoryUploadAzure implements IUpload {
  save(file: File): void {
    console.log("fle uploaded to Azure");
  }
}

class FactoryUploadGoogleCloud implements IUpload {
  save(file: File): void {
    console.log("fle uploaded to Google Cloud");
  }
}

function SelectFactory(factory: number) {
  if (factory === 1) {
    return new FactoryUploadAWS();
  } else if (factory === 2) {
    return new FactoryUploadAzure();
  } else {
    return new FactoryUploadAWS();
  }
}

const file: File = new File(["datos"], "report.txt", { type: "text/plain" });

const upload: IUpload = SelectFactory(1);
upload.save(file);
