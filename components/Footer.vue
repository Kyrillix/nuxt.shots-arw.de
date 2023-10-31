<script lang="ts" setup>

</script>

<template>
  <section id="socialmedia">
    <p>social media</p>
    <div class="socialmedia-links">
      <a id="Instagram" href="https://www.instagram.com/shots.arw/" rel="noopener noreferrer" target="_blank"
         title="Instagram">
        <i class="fa-brands fa-instagram"/>
      </a>
      <a id="YouTube" href="https://www.youtube.com/@shots-arw" rel="noopener noreferrer" target="_blank"
         title="YouTube">
        <i class="fa-brands fa-youtube"/>
      </a>
      <a id="Xing" href="/" rel="noopener noreferrer" target="_blank" title="Xing">
        <i class="fa-brands fa-square-xing"/>
      </a>
      <a id="LinkedIn" href="/" rel="noopener noreferrer" target="_blank" title="LinkedIn">
        <i class="fa-brands fa-linkedin"/>
      </a>
      <a id="GitHub" href="https://github.com/Kyrillix" rel="noopener noreferrer" target="_blank" title="GitHub">
        <i class="fa-brands fa-github"/>
      </a>
    </div>
  </section>
  <section id="links">
    <ul>
      <li>&copy; 2023 shots.arw</li>
      <li>
        <nuxt-link class="a" to="legalnotice">legalnotice</nuxt-link>
      </li>
      <li>
        <nuxt-link class="a" to="privacy">privacy</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
#socialmedia {
  display: flex;
  grid-area: socialmedia;
  flex-direction: column;
  align-items: center;

  p {
    color: var(--h2);
    background: var(--cf-orange-red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 10px;
    font-weight: 700;
    font-size: 24px;
    margin: 0;
    margin-bottom: 10px;
  }

  .socialmedia-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    a {
      color: var(--text);
      font-size: 36px;
      margin-right: 50px;

      &:last-child {
        margin-right: 0;
      }
    }

    #Instagram:hover {
      transition: 0.2s;
      background: linear-gradient(
              0deg,
              rgba(254, 218, 117, 1) 0%,
              rgba(250, 126, 30, 1) 15%,
              rgba(214, 41, 118, 1) 47%,
              rgba(150, 47, 191, 1) 77%,
              rgba(79, 91, 213, 1) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    #YouTube:hover {
      transition: 0.2s;
      color: #fe0000;
    }

    #Xing:hover {
      transition: 0.2s;
      color: #0598a0;
    }

    #LinkedIn:hover {
      transition: 0.2s;
      color: #0b66c3;
    }

    #GitHub:hover {
      transition: 0.2s;
      color: #6f3fc7;
    }
  }
}

#links {
  margin: 0;
  padding: 0;
  grid-area: footer;
  height: 40px;

  ul {
    margin: 0;
    margin-top: 10px;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    li {
      a {
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        color: var(--text);
        font-weight: 400;
        font-size: 1rem;
      }

      &:first-child {
        color: var(--h2);
        font-family: 'Montserrat', sans-serif;
        background: var(--cf-green-blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 500;
        padding-right: 20px;
      }

      &:last-child {
        padding-left: 20px;
      }
    }
  }
}
</style>