<?php

class UserMapper extends Mapper
{
	public function getUsers() {
		$sql = "SELECT u.id, u.name
            from user u";
		$stmt = $this->db->query($sql);
		$results = [];
		while($row = $stmt->fetch()) {
			$results[] = new UserEntity($row);
		}
		return $results;
	}
	/**
	 * Get one user by its ID
	 *
	 * @param int $user_id The ID of the user
	 *
*@return UserEntity  The User
	 */
	public function getUserById($user_id) {
		$sql = "SELECT u.id, u.name
            from user u
            WHERE u.id= :user_id";
		$stmt = $this->db->prepare($sql);
		$result = $stmt->execute(["user_id" => $user_id]);
		if($result) {
			return new UserEntity($stmt->fetch());
		}
	}
	public function save( UserEntity $user) {
		$sql = "insert into user
            (name) values
            (:name)";
		$stmt = $this->db->prepare($sql);
		$result = $stmt->execute([
			"name" => $user->getName(),
		]);
		if(!$result) {
			throw new Exception("could not save record");
		}
	}
}