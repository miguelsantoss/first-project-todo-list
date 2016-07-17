<?php

class ListMapper extends Mapper
{
	public function getLists() {
		$sql = "SELECT l.id, l.name
            from lists l";
		$stmt = $this->db->query($sql);
		$results = [];
		while($row = $stmt->fetch()) {
			$results[] = new ListEntity($row);
		}
		return $results;
	}
	/**
	 * Get one list by its ID
	 *
	 * @param int $list_id The ID of the list
	 *
*@return ListEntity  The List
	 */
	public function getListById($list_id) {
		$sql = "SELECT l.id, l.name
            from lists l
            WHERE l.id= :list_id";
		$stmt = $this->db->prepare($sql);
		$result = $stmt->execute(["list_id" => $list_id]);
		if($result) {
			return new ListEntity($stmt->fetch());
		}
	}
	public function save( ListEntity $user) {
		$sql = "insert into lists
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