<?php 
/*
Plugin Name: Text Splitter
Description: This plugin provides the ability to split text into lines.
Version: 1.0.0
*/

add_shortcode('text_splitter_plugin_shortcode', 'MKB_Split_Text');
function MKB_Split_Text() {
	$content = file_get_contents (plugin_dir_path( __FILE__ ) . "page.txt");
	return $content; 
}


add_action('wp_enqueue_scripts', 'pwwp_enqueue_split_styles');
function pwwp_enqueue_split_styles() {
    wp_enqueue_style( 'bootstrap-split', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' );
    wp_enqueue_style('main-styles-split', plugins_url( 'css/style.css?y=' . rand() , __FILE__ ), array(), rand(), false);
	wp_enqueue_script('main-script-split', plugins_url( 'js/demo.js?x=' . rand() , __FILE__ ), array(), rand(), false);
}


?>