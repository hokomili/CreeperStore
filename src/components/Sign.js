import { Card,Button } from "antd"
import { GoogleAuth } from "../api"
export default function Sign() {
    return (
      <Card>
          <Button className="googleauth" onClick={GoogleAuth}>
              hi
          </Button>
      </Card>
    );
  }