<?php
/* Template Name: Test */

get_header();

while ( have_posts() ) {
		the_post();

$categories = get_categories( array(
    'orderby' => 'name',
    'parent'  => 0,
    'hide_empty' => 1
) );
?>
<ul id="catlist">
	<li data-cat="">* All </li>
<?php
foreach ( $categories as $category ) {
	?>
  <li data-cat="<?php echo $category->slug; ?>"><?php echo $category->name; ?></li>
<?php
}
?>
</ul>

<div id="test_list">
<?php
 $total_post_count = wp_count_posts();
        $total_post = $total_post_count->publish;
// The Query
$args = array(
    'post_type' => 'post',
    'posts_per_page' => 1

);
$query1 = new WP_Query( $args );

// The Loop
while ( $query1->have_posts() ) {
    $query1->the_post();
    ?>

   <article id="post-list" data-id="<?php echo get_the_ID();?>">
		<h2><?php the_title();?></h2>
	</article>

<?php
}
?>

</div>
<div id="ldmore"> Loadmore </div>
<input type="hidden" id="total_post" value="<?php echo $total_post; ?>" >

<?php
}
get_footer();
