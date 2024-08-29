  import Title from '../src/components/title/Title'
  import Subtitle from '../src/components/subtitle/Subtitle'
  
  function HomePage () {
    return (
      <div>
        <Title>Um titulo</Title>
        <Subtitle text="Um subtítulo"/>
        <Title>Outro titulo</Title>
        <Subtitle text="Outro subtítulo"/>
      </div>
    )
  }

  export default HomePage