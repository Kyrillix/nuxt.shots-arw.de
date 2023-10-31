<template>
  <section id="navigation">
    <nav>
      <nuxt-link class="logo" to="/">
        <img alt="logo" src="../assets/img/S-Logo-outline.webp">
        <p>hots.arw</p>
      </nuxt-link>
      <ul>
        <li>
          <nuxt-link class="a" to="/"><i class="fa-solid fa-house nav-icon"/>Home</nuxt-link>
        </li>
        <li>
          <nuxt-link class="a" to="about"><i class="fa-solid fa-info nav-icon"/>About</nuxt-link>
        </li>
        <li>
          <div class="dropdown a">
            <button class="dropbtn" @click="toggleDropdown"><i class="fa-solid fa-bars nav-icon"/>Services</button>
            <div v-if="showDropdown" class="dropdown-content">
              <nuxt-link class="a first" to="photography"><i class="fa-solid fa-camera nav-icon"/>Photography
              </nuxt-link>
              <nuxt-link class="a second" to="it"><i class="fa-solid fa-server nav-icon"/>IT-Support</nuxt-link>
              <nuxt-link class="a three" to="development"><i class="fa-solid fa-code nav-icon"/>WebDev</nuxt-link>
            </div>
          </div>
        </li>
        <li>
          <nuxt-link class="a" to="contact"><i class="fa-solid fa-envelope nav-icon"/>Kontakt</nuxt-link>
        </li>
        <li><p>|</p></li>
        <li class="a"><i class="fa-solid fa-language"/></li>
        <li>
          <ColorSwitch/>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
.a {
  text-decoration: none;
  color: var(--text);
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: 16px;
}

i {
  font-size: 16px;
}

.nav-icon {
  margin-right: 5px;
}

#navigation {
  margin: 0;
  padding: 0;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;

    .logo {
      display: flex;
      flex-direction: row;
      text-decoration: none;
      color: var(--text);
      align-items: center;

      img {
        height: 60px;
      }

      p {
        margin: 1px 0 0 0; //top right bottom left
        font-size: 41px;
        font-weight: 500;
      }
    }

    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      justify-content: space-between;
      align-items: center;

      li {
        padding-right: 30px;
      }
    }
  }
}

/* Stil für die Dropdown-Liste */
.dropdown {
  position: relative;
  display: inline-block;

  /* Zeigen Sie den Dropdown-Inhalt, wenn der Knopf angeklickt wird */
  &:hover {
    .dropdown-content {
      display: block;
    }
  }

  /* Stil für den Dropdown-Knopf */
  .dropbtn {
    color: var(--text);
    background-color: transparent;
    border: none;
    text-transform: uppercase;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  /* Stil für den Dropdown-Inhalt */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--body-brighter);
    min-width: 150px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    /* Stil für die Links im Dropdown-Inhalt */
    .a {
      color: var(--text);
      padding: 8px 6px;
      text-decoration: none;
      display: block;
      transition: all 0.3s ease;
    }

    /* Stil für die Links beim Überfahren mit der Maus */
    .first:hover {
      text-shadow: var(--hover-orange);
      color: var(--h2);
    }

    .second:hover {
      text-shadow: var(--hover-cyan);
      color: var(--cyan);
    }

    .three:hover {
      text-shadow: var(--hover-green);
      color: var(--green);
    }
  }
}
</style>

<script setup>
import {ref} from 'vue';

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
</script>