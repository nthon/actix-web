initSidebarItems({"enum":[["Body","Represents various types of HTTP message body."],["BodySize","Body size hint."],["ResponseBody",""]],"struct":[["BodyStream","Type represent streaming body. Response does not contain `content-length` header and appropriate transfer encoding is used."],["SizedStream","Type represent streaming body. This body implementation should be used if total size of stream is known. Data get sent as is without using transfer encoding."]],"trait":[["MessageBody","Type that implement this trait can be streamed to a peer."]]});