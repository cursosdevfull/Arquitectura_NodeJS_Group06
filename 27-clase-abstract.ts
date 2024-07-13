abstract class Upload {
  abstract saveFile(file: File): void;
  abstract newFilename: string;

  constructor() {
    //this.progress()
  }

  progress() {
    console.log(`X% uploading (${this.newFilename})`);
  }
}

class UploadAWS extends Upload {
  newFilename: string = new Date().getTime().toString() + ".tmp";

  saveFile(file: File): void {
    this.progress();
    console.log("Uploading file to AWS");
  }

  override progress() {
    console.log("File is uploading");
  }

  getStatus() {
    console.log("Getting current status");
  }
}

const upload: Upload = new UploadAWS();
const file = new File(["datos"], "report.pdf", { type: "application/pdf" });
upload.saveFile(file);
