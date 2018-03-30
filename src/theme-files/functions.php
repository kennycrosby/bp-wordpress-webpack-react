<?php
  
  if ( version_compare( $GLOBALS['wp_version'], '4.7', '<' ) ) {
    require get_template_directory() . '/inc/compat-warnings.php';
    return;
  }

  function mytheme_enqueue_style() {
    wp_enqueue_style( 'style', get_stylesheet_uri() );
    wp_enqueue_script( 'script', get_template_directory_uri() . '/bundle.js', array ( 'jquery' ), 1.1, true);
  }

  show_admin_bar(false);

  add_action( 'wp_enqueue_scripts', 'mytheme_enqueue_style' );

?>