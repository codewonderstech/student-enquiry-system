from flask import Blueprint, jsonify

enquiry_bp = Blueprint("enquiry", __name__)

@enquiry_bp.route("/enquiries", methods=["GET"])
def get_enquiries():
    data = [
        {"id": 1, "name": "Rohan", "course": "React"},
        {"id": 2, "name": "Neha", "course": "Python"}
    ]
    return jsonify(data), 200