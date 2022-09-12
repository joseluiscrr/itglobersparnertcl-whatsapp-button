import React from "react";
import PropTypes from "prop-types";

type Props = {
  logo: string  //WhatsApp.png
  phone: string //3228984861
  message: string //Estás comunicándote con VTEX University, por favor ingresa tu duda.
  width: number //80px
  height: number  //80px
};

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, "%20")
  return (
    <div className="fixed bottom-2 right-2 flex flexColum">
      <a href={`https://wa.me/${phone}?text=${formattedMessage}`} target="_blank" rel="noreferrer noopener" >
        <img src={logo} width={width} height={height} alt="Logo de WhatsApp" />
      </a>
    </div>
  );
};

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

WhatsappButton.defaultProps = {
  logo: "mi-logo.png",
  phone: "3228984861",
  message: "Estás comunicándote con VTEX University, por favor ingresa tu duda.",
  width: 80,
  height: 80
};

WhatsappButton.schema = {
  title: "Botón de WhatsApp",
  type: "object",
  properties: {
    logo: {
      title: "Logo de WhatsApp que se relacione con la marca",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "Teléfono",
      description: "Agrega por favor el número de teléfono",
      type: "string"
    },
    message: {
      title: "Mensaje",
      description: "Agrega por favor el mensaje que se verá para tu cliente",
      type: "string",
      widget: {
        "ui:widget": "textarea"
      }
    },
    width: {
      title: "Teléfono",
      description: "Agrega por favor el número de teléfono",
      type: "number"
    },
    height: {
      title: "Teléfono",
      description: "Agrega por favor el número de teléfono",
      type: "number"
    }
  }
};

export default WhatsappButton;
