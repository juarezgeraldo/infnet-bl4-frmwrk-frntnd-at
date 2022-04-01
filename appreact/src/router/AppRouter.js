import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import IncluirAcessorio from '../components/IncluirAcessorio';
import ListarAcessorio from '../components/ListarAcessorio';
import useLocalStorage from '../hooks/useLocalStorage';
import AlterarAcessorio from '../components/AlterarAcessorio';

const AppRouter = () => {
    const [acessorios, setAcessorios] = useLocalStorage('acessorios', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route
                            render={(props) => (
                                <ListarAcessorio {...props} acessorios={acessorios} setAcessorios={setAcessorios} />
                            )}
                            path="/"
                            exact={true}
                        />
                        <Route
                            render={(props) => (
                                <IncluirAcessorio {...props} acessorios={acessorios} setAcessorios={setAcessorios} />
                            )}
                            path="/incluir"
                        />
                        <Route
                            render={(props) => (
                                <AlterarAcessorio {...props} acessorios={acessorios} setAcessorios={setAcessorios} />
                            )}
                            path="/alterar/:id"
                        />
                        <Route component={() => <Redirect to="/" />} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;