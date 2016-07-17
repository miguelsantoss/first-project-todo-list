<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';
spl_autoload_register(function ($classname) {
	require ("../classes/" . $classname . ".php");
});

$config['displayErrorDetails'] = true;
$config['db']['host']   = "localhost";
$config['db']['user']   = "root";
$config['db']['pass']   = "root";
$config['db']['dbname'] = "todo-db";

$app = new \Slim\App(["settings" => $config]);

$container = $app->getContainer();
$container['logger'] = function($c) {
	$logger = new \Monolog\Logger('my_logger');
	$file_handler = new \Monolog\Handler\StreamHandler("../logs/app.log");
	$logger->pushHandler($file_handler);
	return $logger;
};

$container['db'] = function ($c) {
	$db = $c['settings']['db'];
	try {
		$pdo = new PDO("mysql:host=" . $db['host'] . ";dbname=" . $db['dbname'],
			$db['user'], $db['pass']);
	} catch (PDOException $Exception) {
		echo 'Exception abgefangen: ',  $Exception->getMessage(), "\n";
	}

	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	return $pdo;
};

/**
 * Fetch all User
 */
$app->get('/user/all', function (Request $request, Response $response) {
	$this->logger->addInfo("User list");
	$mapper = new ListMapper($this->db);
	$user = $mapper->getUsers();

	$response->getBody()->write(var_export($user, true));
	return $response;
});

$app->get('/lists', function (Request $request, Response $response) {
	$this->logger->addInfo("User list");
	$mapper = new ListMapper($this->db);
	$list = $mapper->getLists();

	$response->getBody()->write(var_export($list, true));
	return $response;
});

/**
 * Fetch a single User by ID
 */
$app->get('/user/{id}', function (Request $request, Response $response, $args) {
	$user_id = (int)$args['id'];
	$mapper = new ListMapper($this->db);
	$user = $mapper->getUserById($user_id);

	$response->getBody()->write(var_export($user, true));
	return $response;
});

/**
 * Create new User via POST
 */
$app->post('/user/new', function (Request $request, Response $response) {
	$data = $request->getParsedBody();
	$user_data = [];
	$user_data['name'] = filter_var($data['name'], FILTER_SANITIZE_STRING);
	$user = new ItemEntity($user_data);
	$user_mapper = new ListMapper($this->db);
	$user_mapper->save($user);
	$response = $response->withRedirect("/users");
	return $response;
});

$app->run();
