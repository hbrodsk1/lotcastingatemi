import React from 'react'
import Divider from 'material-ui/Divider'
import AttributePopup from './editors/attributePopup.jsx'
import RatingDots from '../../utils/ratingDots.jsx'

function AttributeBlock(props) {
  return(<div className="attributeBlock">
    <span className="attributeName">{ props.attribute }:</span>
    <RatingDots rating={ props.rating } />
  </div>);
}

function FullAttributeBlock(props) {
  const { character } = props
  return (
    <div className="fullAttributeBlock">
      <h3>Attributes<AttributePopup character={ character } /></h3>

      <div className="attrContainer physical">
        <AttributeBlock attribute="Strength" rating={ character.attr_strength} />
        <Divider />
        <AttributeBlock attribute="Dexterity" rating={ character.attr_dexterity} />
        <Divider />
        <AttributeBlock attribute="Stamina" rating={ character.attr_stamina} />
      </div>

      <div className="attrContainer social">
        <AttributeBlock attribute="Charisma" rating={ character.attr_charisma} />
        <Divider />
        <AttributeBlock attribute="Manipulation" rating={ character.attr_manipulation} />
        <Divider />
        <AttributeBlock attribute="Appearance" rating={ character.attr_appearance} />
      </div>

      <div className="attrContainer mental">
        <AttributeBlock attribute="Perception" rating={ character.attr_perception} />
        <Divider />
        <AttributeBlock attribute="Intelligence" rating={ character.attr_intelligence} />
        <Divider />
        <AttributeBlock attribute="Wits" rating={ character.attr_wits} />
      </div>
    </div>
  );
}
 
export default FullAttributeBlock
