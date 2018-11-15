# Mundial 2018 Rusia

[![Build Status](https://travis-ci.org/uqbar-project/eg-mundial2018-react.svg?branch=master)](https://travis-ci.org/uqbar-project/eg-mundial2018-react)

![demo](video/demo.gif)

En nuestra segunda iteración, incorporamos un segundo caso de uso: la carga de resultados de los partidos del mundial.

# Rutas con react-router-dom

A través del componente [react router dom](https://reacttraining.com/react-router/core/guides/philosophy), vamos a definir dos rutas:

- la principal, asociada a la URL '/' de nuestra aplicación, que permite buscar países
- la que permite cargar resultados, asociada a la URL '/resultados'

En la demo se aprecia cómo al presionar cada uno de los links se va refrescando la URL del browser.

El lector puede profundizar su investigación leyendo [la guía completa de React Router](
https://www.sitepoint.com/react-router-v4-complete-guide/).

## Definición de rutas

En el archivo _routes.js_ del directorio raíz (src) encontrarán la definición de los links y su relación con componentes:

```javascript
export const MundialRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={CountrySearch} />
            <Route path="/resultados" component={Results} />
        </Switch>
    </Router>
)
```

En nuestra App debemos referenciar a la constante MundialRoutes, para que estén disponibles ambas rutas:

```javascript
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <MundialRoutes />
        </div>
      </BrowserRouter>
    )
  }
}
```

Es importante que MundialRoutes esté dentro del BrowserRouter para que los links funcionen correctamente.

# Application Bar

Los componentes CountrySearch y Results refieren a una AppBar, que va a tener dos botones para navegar a cada caso de uso.

```javascript
class MundialAppBar extends Component {

    render() {
        return (
            <AppBar position="static" color='default'>
                <Toolbar>
                    <Button onClick={() => this.props.history.push('/')}>
                        <FlagIcon />
                        Buscar países
                        </Button>
                    <Button onClick={() => this.props.history.push('/resultados')}>
                        <EditIcon />
                        ¡Cargá los resultados!
                        </Button>
                </Toolbar>
            </AppBar>
        )
    }

}

export default withRouter(MundialAppBar)
```

La [AppBar](https://material-ui.com/demos/app-bar/) se _decora_ con el método withRouter, para tener la propiedad history, que entre otras cosas, permite retroceder o avanzar en el historial del navegador conservando el mismo estado. En nuestro caso avanzamos mediante un push hacia la URL que queremos navegar.

Es importante que la AppBar y las rutas estén contenidas en el mismo componente padre, de otra manera **no funcionarán los links** (esto se hace en el componente App).

# Componente Results

![image](images/ArquitecturaComponentes.png)

En este componente vemos el anidamiento de distintos componentes de React:

- Results: el componente padre que tiene una AppBar con el menú y una lista de MatchRow
- MatchRow: un partido de fútbol que muestra o permite cargar el resultado, tiene a su vez dos equipos, representados con
- CountryRow: la bandera y el nombre del país

## MatchRow

Vemos el componente que muestra o edita los datos de un partido:

```javascript
render() {
    const match = this.state.match
    return (
        <Card>
            <CardContent>
                <Grid container spacing={8}>
                    <Grid item xs={6} sm={3}>
                        <CountryRow country={match.teamA} key={match.teamA.name} />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <TextField
                            required
                            id={match.teamA.key + '_goles'}
                            type="number"
                            style = {{width: '2rem'}}
                            value={match.goalA}
                            onChange={(event) => this.changeGoal(match, match.teamA, event.target.value)}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <CountryRow country={match.teamB} />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <TextField
                            required
                            id={match.teamB.key + '_goles'}
                            type="number"
                            style = {{width: '2.5rem'}}
                            onChange={(event) => this.changeGoal(match, match.teamB, event.target.value)}
                            value={match.goalB}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
```

Delegamos al componente CountryRow mostrar los datos del equipo y permitimos ingresar en un TextField los goles de cada uno de ellos. Cuando el usuario modifica el valor, se dispara el método changeGoal, que genera un nuevo estado:

```javascript
changeGoal(match, team, goals) {
    match.updateScore(team.name, goals)
    this.setState({
        match: match
    })
}
```

El método updateScore de Match actualiza el resultado de los goles del equipo A o B en el partido:

```javascript
updateScore(teamName, goals) {
    if (this.teamA.name === teamName) {
        this.goalA = goals
    } else {
        this.goalB = goals
    }
}
```

Aunque salgamos y volvamos a entrar, la aplicación mantiene su estado.

> Una aclaración: si dejamos el partido que no se jugó sin goles, nos aparecerá un molesto `Warning: A component is changing an uncontrolled input of type number to be controlled.` porque pasar como valor `undefined` dentro del estado es para React decirle que no controle sus cambios. Así que ahora verán que por defecto todos los partidos están 0 a 0, los que no se jugaron y los que ya se jugaron.

# Testing

Se incorpora un test que permite mostrar el componente Results. Para ello:

- debemos apuntar al MatchRow cuyo identificador sea el primer partido del mundial (método key de Match: "russia_saudi-arabia")
- dado que shallow() solo construye un _mock_ del componente html padre, es necesario forzar mediante un mensaje dive() ese MatchRow
- así podemos buscar el TextField cuyo id es "russia_goles" (propiedad _key_ de un Country + el sufijo "_goles" _hardcoded_)
- una vez que obtuvimos el TextField, conocemos su valor mediante props().value (es al fin de cuentas un componente React, solo que no lo construimos nosotros sino Material UI)
- eso es lo que necesitamos comparar contra nuestro valor 5

```javascript
it('results show Russia made 5 goals against Saudi Arabia', () => {
  const wrapper = shallow(<Results/>)
  const russia_arabia = wrapper.find('#russia_saudi-arabia').dive()
  const goals = russia_arabia.find('#russia_goles')
  expect(goals.props().value).toBe(5)
})
```

