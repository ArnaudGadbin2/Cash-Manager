// ignore_for_file: use_build_context_synchronously

import 'dart:developer';

import 'package:cash_manager/utils/nfc.dart';
import 'package:cash_manager/utils/qr_code.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

import '/flutter_flow/flutter_flow_icon_button.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'checkout_model.dart';
export 'checkout_model.dart';

class CheckoutWidget extends StatefulWidget {
  const CheckoutWidget({Key? key, required this.email, required this.userId})
      : super(key: key);

  final String email;
  final String userId;

  @override
  _CheckoutWidgetState createState() => _CheckoutWidgetState();
}

class _CheckoutWidgetState extends State<CheckoutWidget> {
  late CheckoutModel _model;
  bool loading = false;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => CheckoutModel());
  }

  @override
  void dispose() {
    _model.dispose();

    super.dispose();
  }

  Future<Map<String, dynamic>?> getCart() async {
    final res = await GraphQLClient(
      link: HttpLink(
        'http://172.20.10.2:8080/graphql',
      ),
      cache: GraphQLCache(store: HiveStore()),
    ).mutate(
      MutationOptions(
        document: gql(
          r'''
              query carts($email: String!) {
                carts(where: { createdBy: { equals: $email } }) {
                  id
                  cartRows {
                    id
                    product {
                      id
                      title
                      description
                      price
                      createdBy
                      photo
                    }
                    rowPrice
                    quantity
                  }
                  createdAt
                  cartStatus
                  totalPrice
                }
              }
          ''',
        ),
        variables: {
          'email': widget.email,
        },
      ),
    );
    return res.data;
  }

  @override
  Widget build(BuildContext context) {
    if (isiOS) {
      SystemChrome.setSystemUIOverlayStyle(
        SystemUiOverlayStyle(
          statusBarBrightness: Theme.of(context).brightness,
          systemStatusBarContrastEnforced: true,
        ),
      );
    }

    return FutureBuilder<Map<String, dynamic>?>(
        future: getCart(),
        builder: (context, snapshot) {
          if (snapshot.data == null) {
            return Scaffold(
              body: const Center(
                child: CircularProgressIndicator(),
              ),
            );
          }
          int total = snapshot.data?['carts'][0]['cartRows'].fold(
                  0,
                  (previousValue, element) =>
                      previousValue + element['rowPrice']) ??
              0;
          return Scaffold(
            key: scaffoldKey,
            backgroundColor: FlutterFlowTheme.of(context).primaryBackground,
            appBar: AppBar(
              backgroundColor: FlutterFlowTheme.of(context).primaryBackground,
              automaticallyImplyLeading: false,
              leading: FlutterFlowIconButton(
                borderColor: Colors.transparent,
                borderRadius: 30.0,
                buttonSize: 46.0,
                icon: Icon(
                  Icons.arrow_back_rounded,
                  color: FlutterFlowTheme.of(context).secondaryText,
                  size: 24.0,
                ),
                onPressed: () async {
                  context.pop();
                },
              ),
              actions: [],
              centerTitle: false,
              elevation: 0.0,
            ),
            body: loading
                ? const Center(
                    child: CircularProgressIndicator(),
                  )
                : Align(
                    alignment: const AlignmentDirectional(0.0, -1.0),
                    child: SingleChildScrollView(
                      child: Column(
                        mainAxisSize: MainAxisSize.max,
                        children: [
                          Padding(
                            padding: const EdgeInsetsDirectional.fromSTEB(
                                16.0, 16.0, 16.0, 24.0),
                            child: Wrap(
                              spacing: 16.0,
                              runSpacing: 16.0,
                              alignment: WrapAlignment.start,
                              crossAxisAlignment: WrapCrossAlignment.start,
                              direction: Axis.horizontal,
                              runAlignment: WrapAlignment.start,
                              verticalDirection: VerticalDirection.down,
                              clipBehavior: Clip.none,
                              children: [
                                Container(
                                  constraints: const BoxConstraints(
                                    maxWidth: 750.0,
                                  ),
                                  decoration: BoxDecoration(
                                    color: FlutterFlowTheme.of(context)
                                        .secondaryBackground,
                                    boxShadow: [
                                      const BoxShadow(
                                        blurRadius: 4.0,
                                        color: Color(0x33000000),
                                        offset: Offset(0.0, 2.0),
                                      )
                                    ],
                                    borderRadius: BorderRadius.circular(12.0),
                                  ),
                                  child: Padding(
                                    padding: const EdgeInsets.all(16.0),
                                    child: Column(
                                      mainAxisSize: MainAxisSize.max,
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          'Your Cart',
                                          style: FlutterFlowTheme.of(context)
                                              .titleLarge,
                                        ),
                                        Padding(
                                          padding: const EdgeInsetsDirectional
                                              .fromSTEB(0.0, 4.0, 0.0, 12.0),
                                          child: Text(
                                            'Below is the list of items in your cart.',
                                            style: FlutterFlowTheme.of(context)
                                                .labelMedium,
                                          ),
                                        ),
                                        ListView.builder(
                                          padding: EdgeInsets.zero,
                                          shrinkWrap: true,
                                          physics:
                                              const NeverScrollableScrollPhysics(),
                                          itemCount: snapshot
                                                  .data?['carts'][0]['cartRows']
                                                  .length ??
                                              0,
                                          scrollDirection: Axis.vertical,
                                          itemBuilder: (context, index) {
                                            print(index);
                                            final itemCarts =
                                                snapshot.data?['carts'][0]
                                                    ['cartRows'][index];
                                            return Container(
                                              width: MediaQuery.sizeOf(context)
                                                      .width *
                                                  1.0,
                                              decoration: BoxDecoration(
                                                color:
                                                    FlutterFlowTheme.of(context)
                                                        .secondaryBackground,
                                                borderRadius:
                                                    BorderRadius.circular(12.0),
                                              ),
                                              child: Column(
                                                mainAxisSize: MainAxisSize.max,
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                children: [
                                                  Padding(
                                                    padding:
                                                        const EdgeInsetsDirectional
                                                            .fromSTEB(0.0, 4.0,
                                                            0.0, 12.0),
                                                    child: Row(
                                                      mainAxisSize:
                                                          MainAxisSize.max,
                                                      children: [
                                                        Padding(
                                                          padding:
                                                              const EdgeInsetsDirectional
                                                                  .fromSTEB(
                                                                  0.0,
                                                                  1.0,
                                                                  1.0,
                                                                  1.0),
                                                          child: ClipRRect(
                                                            borderRadius:
                                                                BorderRadius
                                                                    .circular(
                                                                        12.0),
                                                            child:
                                                                Image.network(
                                                              itemCarts[
                                                                      'product']
                                                                  ['photo'],
                                                              width: 70.0,
                                                              height: 70.0,
                                                              fit: BoxFit.cover,
                                                            ),
                                                          ),
                                                        ),
                                                        Expanded(
                                                          flex: 3,
                                                          child: Padding(
                                                            padding:
                                                                const EdgeInsetsDirectional
                                                                    .fromSTEB(
                                                                    8.0,
                                                                    0.0,
                                                                    4.0,
                                                                    0.0),
                                                            child: Column(
                                                              mainAxisSize:
                                                                  MainAxisSize
                                                                      .max,
                                                              mainAxisAlignment:
                                                                  MainAxisAlignment
                                                                      .center,
                                                              crossAxisAlignment:
                                                                  CrossAxisAlignment
                                                                      .start,
                                                              children: [
                                                                Text(
                                                                  itemCarts[
                                                                          'product']
                                                                      ['title'],
                                                                  style: FlutterFlowTheme.of(
                                                                          context)
                                                                      .titleLarge,
                                                                ),
                                                                Padding(
                                                                  padding:
                                                                      const EdgeInsetsDirectional
                                                                          .fromSTEB(
                                                                          0.0,
                                                                          4.0,
                                                                          0.0,
                                                                          0.0),
                                                                  child:
                                                                      RichText(
                                                                    textScaleFactor:
                                                                        MediaQuery.of(context)
                                                                            .textScaleFactor,
                                                                    text:
                                                                        TextSpan(
                                                                      children: [
                                                                        const TextSpan(
                                                                          text:
                                                                              'Quantity: ',
                                                                          style:
                                                                              TextStyle(),
                                                                        ),
                                                                        TextSpan(
                                                                          text:
                                                                              itemCarts['quantity'].toString(),
                                                                          style:
                                                                              TextStyle(),
                                                                        )
                                                                      ],
                                                                      style: FlutterFlowTheme.of(
                                                                              context)
                                                                          .labelSmall,
                                                                    ),
                                                                  ),
                                                                ),
                                                              ],
                                                            ),
                                                          ),
                                                        ),
                                                        Padding(
                                                          padding:
                                                              const EdgeInsetsDirectional
                                                                  .fromSTEB(
                                                                  8.0,
                                                                  0.0,
                                                                  0.0,
                                                                  0.0),
                                                          child: Text(
                                                            '${itemCarts['rowPrice']}€',
                                                            textAlign:
                                                                TextAlign.end,
                                                            style: FlutterFlowTheme
                                                                    .of(context)
                                                                .titleLarge,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                  ),
                                                  Padding(
                                                    padding:
                                                        const EdgeInsetsDirectional
                                                            .fromSTEB(0.0, 4.0,
                                                            8.0, 12.0),
                                                    child: AutoSizeText(
                                                      itemCarts['product']
                                                          ['description'],
                                                      textAlign:
                                                          TextAlign.start,
                                                      style:
                                                          FlutterFlowTheme.of(
                                                                  context)
                                                              .labelMedium,
                                                    ),
                                                  ),
                                                  Mutation(
                                                      options: MutationOptions(
                                                        document: gql(
                                                          r'''
                                                    mutation deleteOneCartRows($id: BigInt!){
                                                      deleteOneCartRows(where: { 
                                                        id: $id
                                                      }) {
                                                        id
                                                      }
                                                    }
                                                    ''',
                                                        ),
                                                        update:
                                                            (GraphQLDataProxy
                                                                    cache,
                                                                QueryResult?
                                                                    result) {
                                                          return cache;
                                                        },
                                                        onError: (OperationException?
                                                                error) =>
                                                            ScaffoldMessenger
                                                                    .of(context)
                                                                .showSnackBar(
                                                          SnackBar(
                                                            content: Text(
                                                              error.toString(),
                                                            ),
                                                          ),
                                                        ),
                                                        onCompleted: (dynamic
                                                                resultData) =>
                                                            ScaffoldMessenger
                                                                    .of(context)
                                                                .showSnackBar(
                                                          SnackBar(
                                                            content: Text(
                                                              'Deleted successfully!',
                                                            ),
                                                          ),
                                                        ),
                                                        // 'Sorry you changed your mind!',
                                                      ),
                                                      builder: (RunMutation
                                                              _deleteCartRow,
                                                          QueryResult?
                                                              addResult) {
                                                        return GestureDetector(
                                                          onTap: () async {
                                                            await GraphQLClient(
                                                              link: HttpLink(
                                                                'http://172.20.10.2:8080/graphql',
                                                              ),
                                                              cache: GraphQLCache(
                                                                  store:
                                                                      HiveStore()),
                                                            ).mutate(
                                                              MutationOptions(
                                                                document: gql(
                                                                  r'''
                                                              mutation deleteOneCartRows($id: BigInt!){
                                                                deleteOneCartRows(where: { 
                                                                  id: $id
                                                                }) {
                                                                  id
                                                                }
                                                              }
                                                            ''',
                                                                ),
                                                                variables: {
                                                                  'id':
                                                                      itemCarts[
                                                                          'id'],
                                                                },
                                                              ),
                                                            );
                                                            setState(() {});
                                                          },
                                                          child: Row(
                                                            mainAxisSize:
                                                                MainAxisSize
                                                                    .max,
                                                            children: [
                                                              Icon(
                                                                Icons
                                                                    .delete_outline,
                                                                color: FlutterFlowTheme.of(
                                                                        context)
                                                                    .error,
                                                                size: 24.0,
                                                              ),
                                                              Padding(
                                                                padding:
                                                                    const EdgeInsetsDirectional
                                                                        .fromSTEB(
                                                                        12.0,
                                                                        0.0,
                                                                        0.0,
                                                                        0.0),
                                                                child: Text(
                                                                  'Remove',
                                                                  style: FlutterFlowTheme.of(
                                                                          context)
                                                                      .bodyMedium
                                                                      .override(
                                                                        fontFamily:
                                                                            'Inter',
                                                                        color: FlutterFlowTheme.of(context)
                                                                            .error,
                                                                      ),
                                                                ),
                                                              ),
                                                            ],
                                                          ),
                                                        );
                                                      }),
                                                ],
                                              ),
                                            );
                                          },
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                                Container(
                                  width: double.infinity,
                                  constraints: const BoxConstraints(
                                    maxWidth: 430.0,
                                  ),
                                  decoration: BoxDecoration(
                                    color: FlutterFlowTheme.of(context)
                                        .secondaryBackground,
                                    boxShadow: [
                                      const BoxShadow(
                                        blurRadius: 4.0,
                                        color: Color(0x33000000),
                                        offset: Offset(0.0, 2.0),
                                      )
                                    ],
                                    borderRadius: BorderRadius.circular(12.0),
                                  ),
                                  child: Padding(
                                    padding:
                                        const EdgeInsetsDirectional.fromSTEB(
                                            16.0, 16.0, 16.0, 24.0),
                                    child: Column(
                                      mainAxisSize: MainAxisSize.max,
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          'Order Summary',
                                          style: FlutterFlowTheme.of(context)
                                              .titleLarge,
                                        ),
                                        Divider(
                                          height: 32.0,
                                          thickness: 2.0,
                                          color: FlutterFlowTheme.of(context)
                                              .alternate,
                                        ),
                                        Padding(
                                          padding: const EdgeInsetsDirectional
                                              .fromSTEB(0.0, 0.0, 0.0, 24.0),
                                          child: Column(
                                            mainAxisSize: MainAxisSize.max,
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: [
                                              Padding(
                                                padding:
                                                    const EdgeInsetsDirectional
                                                        .fromSTEB(
                                                        0.0, 8.0, 0.0, 8.0),
                                                child: Row(
                                                  mainAxisSize:
                                                      MainAxisSize.max,
                                                  mainAxisAlignment:
                                                      MainAxisAlignment
                                                          .spaceBetween,
                                                  children: [
                                                    Row(
                                                      mainAxisSize:
                                                          MainAxisSize.max,
                                                      children: [
                                                        Text(
                                                          'Total',
                                                          style: FlutterFlowTheme
                                                                  .of(context)
                                                              .titleMedium
                                                              .override(
                                                                fontFamily:
                                                                    'Outfit',
                                                                color: FlutterFlowTheme.of(
                                                                        context)
                                                                    .secondaryText,
                                                                fontSize: 20.0,
                                                                fontWeight:
                                                                    FontWeight
                                                                        .w500,
                                                              ),
                                                        ),
                                                        FlutterFlowIconButton(
                                                          borderColor: Colors
                                                              .transparent,
                                                          borderRadius: 30.0,
                                                          borderWidth: 1.0,
                                                          buttonSize: 36.0,
                                                          icon: Icon(
                                                            Icons.info_outlined,
                                                            color: FlutterFlowTheme
                                                                    .of(context)
                                                                .secondaryText,
                                                            size: 18.0,
                                                          ),
                                                          onPressed: () {
                                                            print(
                                                                'IconButton pressed ...');
                                                          },
                                                        ),
                                                      ],
                                                    ),
                                                    Text(
                                                      '$total€',
                                                      style:
                                                          FlutterFlowTheme.of(
                                                                  context)
                                                              .displaySmall,
                                                    ),
                                                  ],
                                                ),
                                              ),
                                            ],
                                          ),
                                        ),
                                        FFButtonWidget(
                                          onPressed: () async {
                                            int? res = await showDialog(
                                              context: context,
                                              builder: (context) {
                                                return AlertDialog(
                                                  title: const Text(
                                                    "Comment voulez-vous payer ?",
                                                    style: TextStyle(
                                                      color: Color.fromRGBO(
                                                          145, 150, 154, 1),
                                                      fontWeight:
                                                          FontWeight.w500,
                                                      fontSize: 24,
                                                    ),
                                                  ),
                                                  actionsOverflowDirection:
                                                      VerticalDirection.down,
                                                  scrollable: true,
                                                  contentPadding:
                                                      const EdgeInsets.only(
                                                          top: 16),
                                                  content: Column(
                                                    children: [
                                                      GestureDetector(
                                                        onTap: () {
                                                          Navigator.pop(
                                                              context, 1);
                                                        },
                                                        child: const Padding(
                                                          padding:
                                                              EdgeInsets.all(
                                                                  16.0),
                                                          child: Row(
                                                            children: [
                                                              Icon(
                                                                Icons.nfc,
                                                              ),
                                                              SizedBox(
                                                                  width: 16),
                                                              Expanded(
                                                                child: Text(
                                                                  "Scanner un NFC",
                                                                  style:
                                                                      TextStyle(
                                                                    fontWeight:
                                                                        FontWeight
                                                                            .w400,
                                                                    fontSize:
                                                                        20,
                                                                  ),
                                                                ),
                                                              ),
                                                            ],
                                                          ),
                                                        ),
                                                      ),
                                                      GestureDetector(
                                                        onTap: () {
                                                          Navigator.pop(
                                                              context, 2);
                                                        },
                                                        child: const Padding(
                                                          padding:
                                                              EdgeInsets.all(
                                                                  16.0),
                                                          child: Row(
                                                            children: [
                                                              Icon(
                                                                Icons
                                                                    .qr_code_scanner,
                                                              ),
                                                              SizedBox(
                                                                  width: 16),
                                                              Expanded(
                                                                child: Text(
                                                                  "Scanner un QrCode",
                                                                  style:
                                                                      TextStyle(
                                                                    fontWeight:
                                                                        FontWeight
                                                                            .w400,
                                                                    fontSize:
                                                                        20,
                                                                  ),
                                                                ),
                                                              ),
                                                            ],
                                                          ),
                                                        ),
                                                      )
                                                    ],
                                                  ),
                                                );
                                              },
                                            );
                                            if (res == 1) {
                                              String card =
                                                  await Navigator.push(
                                                context,
                                                MaterialPageRoute(
                                                  builder: (context) {
                                                    return NFCScan();
                                                  },
                                                ),
                                              );
                                              if (card != null) {
                                                setState(() {
                                                  loading = true;
                                                });
                                                DocumentReference<
                                                        Map<String, dynamic>>
                                                    res =
                                                    await FirebaseFirestore
                                                        .instance
                                                        .collection('cartes')
                                                        .doc(card);
                                                DocumentSnapshot<
                                                        Map<String, dynamic>>
                                                    doc = await res.get();
                                                if (doc.exists &&
                                                    doc.data() != null &&
                                                    doc.data()!['solde'] !=
                                                        null) {
                                                  if (doc.data()!['solde'] -
                                                          total.toDouble() <
                                                      0) {
                                                    ScaffoldMessenger.of(
                                                            context)
                                                        .showSnackBar(
                                                      SnackBar(
                                                        content: Text(
                                                          'Solde insuffisant !',
                                                        ),
                                                      ),
                                                    );
                                                    setState(() {
                                                      loading = false;
                                                    });
                                                    return;
                                                  }
                                                  await res.update(
                                                    {
                                                      'solde':
                                                          doc.data()!['solde'] -
                                                              total.toDouble(),
                                                    },
                                                  );
                                                  for (var product
                                                      in snapshot.data?['carts']
                                                          [0]['cartRows']) {
                                                    await GraphQLClient(
                                                      link: HttpLink(
                                                        'http://172.20.10.2:8080/graphql',
                                                      ),
                                                      cache: GraphQLCache(
                                                          store: HiveStore()),
                                                    ).mutate(
                                                      MutationOptions(
                                                        document: gql(
                                                          r'''
                                                    mutation deleteOneCartRows($id: BigInt!){
                                                      deleteOneCartRows(where: { 
                                                        id: $id
                                                      }) {
                                                        id
                                                      }
                                                    }
                                                    ''',
                                                        ),
                                                        variables: {
                                                          'id': product['id'],
                                                        },
                                                      ),
                                                    );
                                                  }
                                                  ScaffoldMessenger.of(context)
                                                      .showSnackBar(
                                                    SnackBar(
                                                      content: Text(
                                                        'Paiement effectué !',
                                                      ),
                                                    ),
                                                  );
                                                } else {
                                                  int cardTotal = card.codeUnits
                                                          .fold<int>(
                                                              0,
                                                              (previousValue,
                                                                      element) =>
                                                                  previousValue +
                                                                  element) *
                                                      widget.email.codeUnits
                                                          .fold<int>(
                                                              0,
                                                              (previousValue,
                                                                      element) =>
                                                                  previousValue +
                                                                  element);
                                                  if (cardTotal.toDouble() -
                                                          total.toDouble() <
                                                      0) {
                                                    ScaffoldMessenger.of(
                                                            context)
                                                        .showSnackBar(
                                                      SnackBar(
                                                        content: Text(
                                                          'Solde insuffisant !',
                                                        ),
                                                      ),
                                                    );
                                                    setState(() {
                                                      loading = false;
                                                    });
                                                    return;
                                                  }
                                                  await res.set(
                                                    {
                                                      'solde':
                                                          cardTotal.toDouble() -
                                                              total.toDouble(),
                                                    },
                                                  );
                                                  for (var product
                                                      in snapshot.data?['carts']
                                                          [0]['cartRows']) {
                                                    await GraphQLClient(
                                                      link: HttpLink(
                                                        'http://172.20.10.2:8080/graphql',
                                                      ),
                                                      cache: GraphQLCache(
                                                          store: HiveStore()),
                                                    ).mutate(
                                                      MutationOptions(
                                                        document: gql(
                                                          r'''
                                                    mutation deleteOneCartRows($id: BigInt!){
                                                      deleteOneCartRows(where: { 
                                                        id: $id
                                                      }) {
                                                        id
                                                      }
                                                    }
                                                    ''',
                                                        ),
                                                        variables: {
                                                          'id': product['id'],
                                                        },
                                                      ),
                                                    );
                                                  }
                                                  ScaffoldMessenger.of(context)
                                                      .showSnackBar(
                                                    SnackBar(
                                                      content: Text(
                                                        'Paiement effectué !',
                                                      ),
                                                    ),
                                                  );
                                                }
                                              } else {
                                                ScaffoldMessenger.of(context)
                                                    .showSnackBar(
                                                  SnackBar(
                                                    content: Text(
                                                      'Paiement annulé !',
                                                    ),
                                                  ),
                                                );
                                              }
                                            } else if (res == 2) {
                                              String? card =
                                                  await Navigator.push(
                                                context,
                                                MaterialPageRoute(
                                                  builder: (context) {
                                                    return QRCodeViewer();
                                                  },
                                                ),
                                              );
                                              if (card != null) {
                                                setState(() {
                                                  loading = true;
                                                });
                                                DocumentReference<
                                                        Map<String, dynamic>>
                                                    res =
                                                    await FirebaseFirestore
                                                        .instance
                                                        .collection('cartes')
                                                        .doc(card);
                                                DocumentSnapshot<
                                                        Map<String, dynamic>>
                                                    doc = await res.get();
                                                if (doc.exists &&
                                                    doc.data() != null &&
                                                    doc.data()!['solde'] !=
                                                        null) {
                                                  if (doc.data()!['solde'] -
                                                          total.toDouble() <
                                                      0) {
                                                    ScaffoldMessenger.of(
                                                            context)
                                                        .showSnackBar(
                                                      SnackBar(
                                                        content: Text(
                                                          'Solde insuffisant !',
                                                        ),
                                                      ),
                                                    );
                                                    setState(() {
                                                      loading = false;
                                                    });
                                                    return;
                                                  }
                                                  await res.update(
                                                    {
                                                      'solde':
                                                          doc.data()!['solde'] -
                                                              total.toDouble(),
                                                    },
                                                  );
                                                  for (var product
                                                      in snapshot.data?['carts']
                                                          [0]['cartRows']) {
                                                    await GraphQLClient(
                                                      link: HttpLink(
                                                        'http://172.20.10.2:8080/graphql',
                                                      ),
                                                      cache: GraphQLCache(
                                                          store: HiveStore()),
                                                    ).mutate(
                                                      MutationOptions(
                                                        document: gql(
                                                          r'''
                                                    mutation deleteOneCartRows($id: BigInt!){
                                                      deleteOneCartRows(where: { 
                                                        id: $id
                                                      }) {
                                                        id
                                                      }
                                                    }
                                                    ''',
                                                        ),
                                                        variables: {
                                                          'id': product['id'],
                                                        },
                                                      ),
                                                    );
                                                  }
                                                  ScaffoldMessenger.of(context)
                                                      .showSnackBar(
                                                    SnackBar(
                                                      content: Text(
                                                        'Paiement effectué !',
                                                      ),
                                                    ),
                                                  );
                                                } else {
                                                  int cardTotal = card.codeUnits
                                                          .fold<int>(
                                                              0,
                                                              (previousValue,
                                                                      element) =>
                                                                  previousValue +
                                                                  element) *
                                                      widget.email.codeUnits
                                                          .fold<int>(
                                                              0,
                                                              (previousValue,
                                                                      element) =>
                                                                  previousValue +
                                                                  element);
                                                  if (cardTotal.toDouble() -
                                                          total.toDouble() <
                                                      0) {
                                                    ScaffoldMessenger.of(
                                                            context)
                                                        .showSnackBar(
                                                      SnackBar(
                                                        content: Text(
                                                          'Solde insuffisant !',
                                                        ),
                                                      ),
                                                    );
                                                    setState(() {
                                                      loading = false;
                                                    });
                                                    return;
                                                  }
                                                  await res.set(
                                                    {
                                                      'solde':
                                                          cardTotal.toDouble() -
                                                              total.toDouble(),
                                                    },
                                                  );
                                                  for (var product
                                                      in snapshot.data?['carts']
                                                          [0]['cartRows']) {
                                                    await GraphQLClient(
                                                      link: HttpLink(
                                                        'http://172.20.10.2:8080/graphql',
                                                      ),
                                                      cache: GraphQLCache(
                                                          store: HiveStore()),
                                                    ).mutate(
                                                      MutationOptions(
                                                        document: gql(
                                                          r'''
                                                    mutation deleteOneCartRows($id: BigInt!){
                                                      deleteOneCartRows(where: { 
                                                        id: $id
                                                      }) {
                                                        id
                                                      }
                                                    }
                                                    ''',
                                                        ),
                                                        variables: {
                                                          'id': product['id'],
                                                        },
                                                      ),
                                                    );
                                                  }
                                                  ScaffoldMessenger.of(context)
                                                      .showSnackBar(
                                                    SnackBar(
                                                      content: Text(
                                                        'Paiement effectué !',
                                                      ),
                                                    ),
                                                  );
                                                }
                                              } else {
                                                ScaffoldMessenger.of(context)
                                                    .showSnackBar(
                                                  SnackBar(
                                                    content: Text(
                                                      'Paiement annulé !',
                                                    ),
                                                  ),
                                                );
                                              }
                                            }
                                            setState(() {
                                              loading = false;
                                            });
                                          },
                                          text: 'Continue to Checkout',
                                          options: FFButtonOptions(
                                            width: double.infinity,
                                            height: 50.0,
                                            padding: const EdgeInsets.all(0.0),
                                            iconPadding:
                                                const EdgeInsetsDirectional
                                                    .fromSTEB(
                                                    0.0, 0.0, 0.0, 0.0),
                                            color: FlutterFlowTheme.of(context)
                                                .primary,
                                            textStyle:
                                                FlutterFlowTheme.of(context)
                                                    .titleSmall,
                                            elevation: 2.0,
                                            borderSide: const BorderSide(
                                              color: Colors.transparent,
                                              width: 1.0,
                                            ),
                                            borderRadius:
                                                BorderRadius.circular(50.0),
                                            hoverColor:
                                                FlutterFlowTheme.of(context)
                                                    .accent1,
                                            hoverBorderSide: BorderSide(
                                              color:
                                                  FlutterFlowTheme.of(context)
                                                      .primary,
                                              width: 1.0,
                                            ),
                                            hoverTextColor:
                                                FlutterFlowTheme.of(context)
                                                    .primary,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
          );
        });
  }
}
