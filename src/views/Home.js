import React from 'react';
import HomeStyle from './Home.module.css';
import { MdAdd, MdFavorite, MdRemove } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
// import CheckBox from '../components/SVGs/CheckBox';
// import CheckBoxOutlineBlank from '../components/SVGs/CheckBoxOutlineBlank';

const Home = () => {
  const [categorias, setCategorias] = React.useState([
    {
      tituloCategoria: '',
      cards: [
        {
          tituloCard: '',
          favorito: { checked: false },
          itens: [{ checked: false, conteudo: '' }],
        },
      ],
    },
  ]);
  React.useEffect(() => {
    console.log(categorias);
  }, [categorias]);

  function changeTituloCategoria(value, categoriaIndex) {
    let changeCategorias = [...categorias];
    changeCategorias[categoriaIndex].tituloCategoria = value;
    setCategorias(changeCategorias);
  }

  function changeTituloCard(value, categoriaIndex, cardIndex) {
    let changeCategorias = [...categorias];
    changeCategorias[categoriaIndex].cards[cardIndex].tituloCard = value;
    setCategorias(changeCategorias);
  }

  function CheckedFavorito(categoriaIndex, cardIndex) {
    let changeCategorias = [...categorias];
    changeCategorias[categoriaIndex].cards[
      cardIndex
    ].favorito.checked = !changeCategorias[categoriaIndex].cards[cardIndex]
      .favorito.checked;
    setCategorias(changeCategorias);
  }

  function handleChecked(categoriaIndex, cardIndex, itemIndex) {
    let changeCategorias = [...categorias];
    changeCategorias[categoriaIndex].cards[cardIndex].itens[
      itemIndex
    ].checked = !categorias[categoriaIndex].cards[cardIndex].itens[itemIndex]
      .checked;
    setCategorias(changeCategorias);
  }

  function ChangeConteudoItem(value, categoriaIndex, cardIndex, itemIndex) {
    let changeCategorias = [...categorias];
    changeCategorias[categoriaIndex].cards[cardIndex].itens[
      itemIndex
    ].conteudo = value;
    setCategorias(changeCategorias);
  }

  function removerItem(categoriaIndex, cardIndex, itemIndex) {
    let changeCategorias = [...categorias];
    changeCategorias[categoriaIndex].cards[cardIndex].itens.splice(
      itemIndex,
      1,
    );
    setCategorias(changeCategorias);
  }

  function adicionarItem(categoriaIndex, cardIndex) {
    let changeCategorias = [...categorias];
    changeCategorias[categoriaIndex].cards[cardIndex].itens.push({
      checked: false,
      conteudo: '',
    });
    setCategorias(changeCategorias);
  }

  return (
    <>
      {categorias.map((categoria, categoriaIndex) => (
        <div key={categoriaIndex}>
          <div className={HomeStyle.divTituloCategoria}>
            <input
              value={categoria.tituloCategoria}
              placeholder="Adicionar Título"
              onChange={({ target }) =>
                changeTituloCategoria(target.value, categoriaIndex)
              }
            ></input>
          </div>
          {categoria.cards.map((card, cardIndex) => (
            <div className={HomeStyle.card} key={cardIndex}>
              <div className={HomeStyle.divTituloCard}>
                <input
                  type="text"
                  value={card.tituloCard}
                  placeholder="Adicionar Título"
                  onChange={({ target }) =>
                    changeTituloCard(target.value, categoriaIndex, cardIndex)
                  }
                ></input>
                <label htmlFor="fav">
                  <input
                    id="fav"
                    type="checkbox"
                    checked={card.favorito.checked}
                    onChange={() => CheckedFavorito(categoriaIndex, cardIndex)}
                  />
                  {card.favorito.checked && <MdFavorite />}
                  {!card.favorito.checked && <MdFavoriteBorder />}
                </label>
              </div>
              {card.itens.map((item, itemIndex) => (
                <div key={itemIndex} className={HomeStyle.divItem}>
                  <label htmlFor="check">
                    <input
                      id="check"
                      type="checkbox"
                      checked={item.checked}
                      onChange={() =>
                        handleChecked(categoriaIndex, cardIndex, itemIndex)
                      }
                    />
                    {/* {item.checked && (
                      <div>
                        <p>{item.checked}</p>
                        <CheckBox className={HomeStyle.checkFilled} />
                      </div>
                    )}
                    {!item.checked && (
                      <div>
                        <p>{item.checked}</p>
                        <CheckBoxOutlineBlank
                          className={HomeStyle.checkEmpty}
                        />
                      </div>
                    )} */}
                  </label>
                  <input
                    type="text"
                    value={item.conteudo}
                    placeholder="Adicionar Conteúdo"
                    onChange={({ target }) =>
                      ChangeConteudoItem(
                        target.value,
                        categoriaIndex,
                        cardIndex,
                        itemIndex,
                      )
                    }
                  />
                  <button
                    onClick={() =>
                      removerItem(categoriaIndex, cardIndex, itemIndex)
                    }
                  >
                    <MdRemove />
                  </button>
                </div>
              ))}
              <button
                className={HomeStyle.buttonAdicionar}
                onClick={() => adicionarItem(categoriaIndex, cardIndex)}
              >
                <MdAdd />
              </button>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Home;
