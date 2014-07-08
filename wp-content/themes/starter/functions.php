<?php 

require_once('lib/timber/timber.php');
require_once('lib/cmb/custom-meta-boxes.php');

//  ================
//  = THEME SET UP =
//  ================

add_action( 'init', 'theme_setup' );
function theme_setup() {
  add_theme_support( 'post-thumbnails' );

  register_nav_menu('main-menu',__( 'Main Menu' ));
}

// set up javascripts
add_action( 'wp_enqueue_scripts', 'app_enqueue_scripts' );
function app_enqueue_scripts() {
  wp_deregister_script('jquery');
  wp_register_script('jquery', ('//code.jquery.com/jquery-1.11.1.min.js'), false, '1.11.1', true);
  wp_enqueue_script( 'jquery' );
  wp_enqueue_script(
    'app',
    get_template_directory_uri() . '/js/dist/app.min.js',
    array('jquery'),
    '',
    true
  );
}

// Add Slug Body Class
add_filter( 'body_class', 'add_slug_body_class' );
function add_slug_body_class( $classes ) {
  global $post;
  if (isset($post)) {
    $classes[] = $post->post_name;
  }
  return $classes;
}

// customize timber data
add_filter('timber_context', 'add_to_context');
function add_to_context($data){
    $data['main_menu'] = new TimberMenu('main-menu');
    return $data; 
}


//  =====================
//  = CUSTOM META BOXES =
//  =====================

add_filter('cmb_meta_boxes', 'register_meta_boxes');
function register_meta_boxes( array $meta_boxes ) {
  $prefix = '_cmb_';

  $meta_boxes = [];

  return $meta_boxes;

}


function permalink_for_title($title) {
  $page = get_page_by_title($title);
  return get_permalink($page->ID);
}

 ?>