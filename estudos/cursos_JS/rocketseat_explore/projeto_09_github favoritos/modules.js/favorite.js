class searchUserInGithub{
    static search(userName){
        const linkUser = `https://api.github.com/users/${userName}`

        return fetch(linkUser)
        .then(data => data.json())
        .then(data => ({
            login: data.login,
            name: data.name,
            public_repos: data.public_repos,
            followers: data.followers
        }))
    }
}

class favorites{ 
    constructor(root){
        this.root = document.querySelector(root)
        this.tbody = this.root.querySelector("table tbody")
        this.load()
    }

    load(){
        this.listOfUserFavorite = JSON.parse(localStorage.getItem('@UserFavoriteInGithub:')) || [] 
        //faz uma verificação, se tiver valor dentro do localhost ele é atribuido, se não, é atribuido uma array vaziu
    }

    save(){
        localStorage.setItem('@UserFavoriteInGithub:', JSON.stringify(this.listOfUserFavorite))
    }

    async addUserInLocalStorege(idName){
        try{

            const existUser = this.listOfUserFavorite.find(user => user.login === idName)
            if(existUser){
                throw new Error('Este usuário já existe!')
            }

            const user = await searchUserInGithub.search(idName)

            if(user.login === undefined){
                throw new Error('Usuário não encontrado!')
            }

            this.listOfUserFavorite = [ user, ...this.listOfUserFavorite]
            this.update()
            this.save()

        }catch(error){
            alert(error.message)
        }
    }

    deleteUser(user){
        const filterUser = this.listOfUserFavorite.filter( userDelete => userDelete.login !== user.login)
        this.listOfUserFavorite = filterUser
        this.update()
        this.save()
    }

}

class favoriteViews extends favorites{
    constructor(root){
        super(root)
        this.update()
        this.searchUser()
    }

    update(){
        this.removeAllUser()
        this.addUserInRow()
    }

    removeAllUser(){
        this.tbody.querySelectorAll("tr").forEach((user) => {
            user.remove()
        })
    }

    createRow(){

        const trUser = document.createElement('tr')

        const estructTrUser =`
            <td class="userGithub">
                <img src="" alt="">
                <a href="" target="_blank">
                    <p></p>
                    <span></span>
                </a>
            </td>
            <td class="repository"></td>
            <td class="followers"></td>
            <td>
                <button class="remove">&times;</button>
            </td>
        `
        trUser.innerHTML = estructTrUser

        return trUser
    }

    addUserInRow(){
        this.listOfUserFavorite.forEach((user) => {
            const tr = this.createRow()
            
            tr.querySelector('.userGithub img').src = `https://github.com/${user.login}.png`
            tr.querySelector('.userGithub img').alt = `Fotos dos usuários`
            tr.querySelector('.userGithub a').href = `https://github.com/${user.login}`
            tr.querySelector('.userGithub p').textContent = user.name
            tr.querySelector('.userGithub span').textContent = user.login
            tr.querySelector('.repository').textContent = user.public_repos
            tr.querySelector('.followers').textContent = user.followers
            tr.querySelector('.remove').onclick = () => {
                
                const deleteOk = confirm("Desaja excluir este usuário dos seus favoritos ?")
                if(deleteOk){
                    this.deleteUser(user)
                }
            }
            this.tbody.append(tr)
        })
    }
    
    searchUser(){
        const search = this.root.querySelector(".search button")
        
        search.onclick = () => {
            const {value} = this.root.querySelector("#search-input")
            this.addUserInLocalStorege(value)
        }
    }
}


export{
    favoriteViews,
    favorites
}