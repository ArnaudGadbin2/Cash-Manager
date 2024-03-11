import 'dart:async';

import 'package:collection/collection.dart';

import '/backend/schema/util/firestore_util.dart';
import '/backend/schema/util/schema_util.dart';

import 'index.dart';
import '/flutter_flow/flutter_flow_util.dart';

class BanqueRecord extends FirestoreRecord {
  BanqueRecord._(
    DocumentReference reference,
    Map<String, dynamic> data,
  ) : super(reference, data) {
    _initializeFields();
  }

  // "email" field.
  String? _email;
  String get email => _email ?? '';
  bool hasEmail() => _email != null;

  // "amount" field.
  int? _amount;
  int get amount => _amount ?? 0;
  bool hasAmount() => _amount != null;

  // "nfctag" field.
  String? _nfctag;
  String get nfctag => _nfctag ?? '';
  bool hasNfctag() => _nfctag != null;

  void _initializeFields() {
    _email = snapshotData['email'] as String?;
    _amount = castToType<int>(snapshotData['amount']);
    _nfctag = snapshotData['nfctag'] as String?;
  }

  static CollectionReference get collection =>
      FirebaseFirestore.instance.collection('banque');

  static Stream<BanqueRecord> getDocument(DocumentReference ref) =>
      ref.snapshots().map((s) => BanqueRecord.fromSnapshot(s));

  static Future<BanqueRecord> getDocumentOnce(DocumentReference ref) =>
      ref.get().then((s) => BanqueRecord.fromSnapshot(s));

  static BanqueRecord fromSnapshot(DocumentSnapshot snapshot) => BanqueRecord._(
        snapshot.reference,
        mapFromFirestore(snapshot.data() as Map<String, dynamic>),
      );

  static BanqueRecord getDocumentFromData(
    Map<String, dynamic> data,
    DocumentReference reference,
  ) =>
      BanqueRecord._(reference, mapFromFirestore(data));

  @override
  String toString() =>
      'BanqueRecord(reference: ${reference.path}, data: $snapshotData)';

  @override
  int get hashCode => reference.path.hashCode;

  @override
  bool operator ==(other) =>
      other is BanqueRecord &&
      reference.path.hashCode == other.reference.path.hashCode;
}

Map<String, dynamic> createBanqueRecordData({
  String? email,
  int? amount,
  String? nfctag,
}) {
  final firestoreData = mapToFirestore(
    <String, dynamic>{
      'email': email,
      'amount': amount,
      'nfctag': nfctag,
    }.withoutNulls,
  );

  return firestoreData;
}

class BanqueRecordDocumentEquality implements Equality<BanqueRecord> {
  const BanqueRecordDocumentEquality();

  @override
  bool equals(BanqueRecord? e1, BanqueRecord? e2) {
    return e1?.email == e2?.email &&
        e1?.amount == e2?.amount &&
        e1?.nfctag == e2?.nfctag;
  }

  @override
  int hash(BanqueRecord? e) =>
      const ListEquality().hash([e?.email, e?.amount, e?.nfctag]);

  @override
  bool isValidKey(Object? o) => o is BanqueRecord;
}
