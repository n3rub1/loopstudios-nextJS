import { IHeaderText } from "../interface/IHeaderText";

export function HeaderButton(props: IHeaderText){
return(
    <section>
        <div className="creation-top">
          <h2 className="ourCreations">{props.headerText}</h2>
          <p className="seeAll">{props.buttonText}</p>
        </div>
      </section>
)
}