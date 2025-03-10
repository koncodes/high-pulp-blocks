<?php
namespace KN\PortfolioTestimonials;

/**
 * Plugin Name:       High Pulp Blocks
 * Description:       Add some extra pulp to your site with these 100% original blocks.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       high-pulp-blocks
 *
 * @package Kn
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

add_action( 'init', function () {
	register_block_type( __DIR__ . '/build/blocks/high-pulp-blocks' );
	register_block_type( __DIR__ . '/build/blocks/testimonial' );
	register_block_type( __DIR__ . '/build/blocks/skills' );
	register_block_type( __DIR__ . '/build/filters/border-control' );
	register_block_type( __DIR__ . '/build/blocks/staff-list' );
	register_block_type( __DIR__ . '/build/blocks/staff-directory' );
	register_block_type( __DIR__ . '/build/blocks/testimonial-blocks' );
});

include __DIR__ . '/filters.php';


/*
Plugin Name: Portfolio Testimonials
Description: Add testimonials to your portfolio WordPress site.
Version: 1.0.0
Author: Konika Nahar
Text Domain: kn-testimonials
*/


const TEXT_DOMAIN = 'kn-testimonials';
const PLUGIN_FILE = __FILE__;

//include classes
require_once __DIR__ ."/classes/Singleton.php";
require_once __DIR__ ."/classes/Plugin.php";
require_once __DIR__ ."/classes/TestimonialPostType.php";
require_once __DIR__ ."/classes/TestimonialTag.php";
require_once __DIR__ ."/classes/TestimonialMeta.php";
require_once __DIR__ ."/classes/RecentTestimonialsShortcode.php";
require_once __DIR__ ."/classes/TestimonialSettings.php";


Plugin::getInstance();
