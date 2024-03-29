
import { MainContext } from "@/components/Main";
import { useContext } from "react";


export default async function PageTwo() {
    
  const { selectedMenu, setSelectedMenu } = useContext<any>(MainContext);

  return (
      <MainContext.Consumer>
        {(value) =>
          (<button type="button" onClick={() => setSelectedMenu("2")}>
            changeContext {selectedMenu}
          </button>)
        }
      </MainContext.Consumer>
  )
}