import { Box } from '@skynexui/components';
import { default as React } from "react";
import { GridDisplay } from '@skynexui/components';

export default function QuemSomos() {

    const api = "https://api.github.com/users/"
    let devs = [`${api}AlAnNuB`, `${api}DanSilBar`, `${api}divanei-santos`, `${api}heliooak`, `${api}jonasjesus42`, `${api}renansktt`];
    const fetchGithub = () => {

        const userPromises = []
        for (let i = 0; i < 6; i++) {
            userPromises.push(fetch(devs[i]).then(response => response.json()))
        }

        Promise.all(userPromises)
            .then(users => {

                const lisUsers = users.reduce((accumulator, user) => {
                    const us = users.map(usInfo => usInfo.login)
                    accumulator +=
                        `
                        <div>
                        <img src="${user.avatar_url}" alt="${user.id}"</img>
                        </br>
                        <h2>${user.name}</h2>
                        <h3>${user.bio}</h3>
                        <p>${user.location}</p>
                        </div>
                        `
                    return accumulator
                }, '')

                const ul = document.querySelector('[data-js="github"]')

                ul.innerHTML = lisUsers

            })
    }

    fetchGithub()

    return (

        <>
            <Box styleSheet={{
                backgroundColor: { xl: '#222' },
                color: 'orange', height: '100%', width: '100%', display: 'max-width', padding: '0px', margin: '0px',
            }}>
                <Box tag="div" styleSheet={{
                    backgroundColor: { xl: '#222' },
                    color: 'orange', height: '100%', width: '100%', margin: '0px',
                    padding: '0px', display: 'flex', 'min-width': "auto", 'max-width': "auto", 'flex-wrap': 'wrap',
                }}>
                    <div>
                        <span><h1>Dev's AceCidade</h1></span>
                        <span>
                            <GridDisplay crossAxisCount={{ xs: 3 }}
                                data={[1, 2, 3, 4, 5, 6]}
                                itemBuilder={function noRefCheck() { }} tag="ul" data-js="github"
                                styleSheet={{
                                    backgroundColor: { xl: '#222' },
                                    color: 'orange', height: '100%', width: '100%', margin: '0px',
                                    padding: '0px', display: 'flex', 'min-width': "auto", 'max-width': "auto", 'flex-wrap': 'wrap',
                                }} />
                        </span>
                    </div>
                </Box>
            </Box>
        </>
    );
}