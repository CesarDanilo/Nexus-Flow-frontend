import React from 'react';

export function Sidebar() {
  const menuItems = ['Dashboard', 'Perfil', 'Configurações', 'Sair'];

  return (
    <aside style={styles.sidebar}>
      <h2 style={styles.title}>Menu</h2>
      <ul style={styles.list}>
        {menuItems.map((item) => (
          <li key={item} style={styles.listItem}>
            <a href={`#${item.toLowerCase()}`} style={styles.link}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// Estilos simples em JS para você copiar e colar sem precisar de arquivos extras
const styles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRight: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: '500',
  },
};