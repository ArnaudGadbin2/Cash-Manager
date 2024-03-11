import 'dart:developer';

import 'package:cash_manager/index.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:tuple/tuple.dart';

import '/flutter_flow/flutter_flow_icon_button.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'package:badges/badges.dart' as badges;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'home_model.dart';
export 'home_model.dart';

class TestPage extends StatefulWidget {
  const TestPage({super.key, required this.id});

  final String id;

  @override
  State<TestPage> createState() => _TestPageState();
}

class _TestPageState extends State<TestPage> {
  @override
  Widget build(BuildContext context) {
    print(widget.id);
    return const Placeholder();
  }
}

class Products {
  int id;
  String title;
  String description;
  int price;
  String createdBy;
  String photo;

  Products(
      {required this.id,
      required this.title,
      required this.description,
      required this.price,
      required this.createdBy,
      required this.photo});
}

class HomeWidget extends StatefulWidget {
  const HomeWidget({Key? key}) : super(key: key);

  @override
  _HomeWidgetState createState() => _HomeWidgetState();
}

class _HomeWidgetState extends State<HomeWidget> {
  late HomeModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => HomeModel());

    _model.searchBarController ??= TextEditingController();
    _model.searchBarFocusNode ??= FocusNode();
  }

  @override
  void dispose() {
    _model.dispose();

    super.dispose();
  }

  Future<Tuple2<String, String>> getInfo() async {
    String? email = await const FlutterSecureStorage().read(
      key: 'email',
    );
    String? id = await const FlutterSecureStorage().read(
      key: 'createdBy',
    );
    return Tuple2(email ?? "", id ?? "");
  }

  Future<Map<String, dynamic>?> getProducts() async {
    final QueryResult result = await GraphQLClient(
      link: HttpLink(
        'http://172.20.10.2:8080/graphql',
      ),
      cache: GraphQLCache(store: HiveStore()),
    ).query(
      QueryOptions(
        document: gql(
          r'''
          query {
            products {
              id
              title
              description
              price
              createdBy
              photo
            }
          }
          ''',
        ),
        pollInterval: const Duration(milliseconds: 500),
      ),
    );
    if (result.hasException) {
      print(result.exception.toString());
    }
    return result.data;
  }

  Future<Map<String, dynamic>?> getCart(String email) async {
    final QueryResult result = await GraphQLClient(
      link: HttpLink(
        'http://172.20.10.2:8080/graphql',
      ),
      cache: GraphQLCache(store: HiveStore()),
    ).query(
      QueryOptions(
        document: gql(
          r'''
                        query carts($email: String!){
                          carts(where: { createdBy: { equals:$email } }) {
                            id
                            cartRows {
                              id
                              product {
                                title
                                price
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
        pollInterval: const Duration(milliseconds: 500),
        variables: {
          'email': email,
        },
      ),
    );
    if (result.hasException) {
      print(result.exception.toString());
    }
    return result.data;
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

    return FutureBuilder<Tuple2<String, String>>(
        future: getInfo(),
        builder: (context, snapshot) {
          if (snapshot.data == null) {
            return Scaffold(
                body: const Center(child: CircularProgressIndicator()));
          }
          return FutureBuilder<Map<String, dynamic>?>(
              future: getCart(snapshot.data?.item1 ?? ""),
              builder: (context, snapshotCart) {
                if (snapshotCart.data == null) {
                  return const Center(child: CircularProgressIndicator());
                }
                int length = 0;
                if (snapshotCart.data != null) {
                  if (snapshotCart.data?['carts'] != null) {
                    if (snapshotCart.data?['carts']?[0]?['cartRows'] != null &&
                        snapshotCart
                                .data?['carts']?[0]?['cartRows']?.isNotEmpty ==
                            true) {
                      for (var cartRows in snapshotCart.data?['carts']?[0]
                          ?['cartRows']) {
                        if (cartRows != null && cartRows['quantity'] != null) {
                          length += cartRows['quantity'] as int;
                        }
                      }
                    }
                  }
                }
                return GestureDetector(
                  onTap: () => _model.unfocusNode.canRequestFocus
                      ? FocusScope.of(context).requestFocus(_model.unfocusNode)
                      : FocusScope.of(context).unfocus(),
                  child: Scaffold(
                    key: scaffoldKey,
                    backgroundColor:
                        FlutterFlowTheme.of(context).secondaryBackground,
                    appBar: AppBar(
                      backgroundColor:
                          FlutterFlowTheme.of(context).secondaryBackground,
                      automaticallyImplyLeading: false,
                      title: Text(
                        'Home',
                        style: FlutterFlowTheme.of(context).titleLarge,
                      ),
                      actions: [
                        Padding(
                          padding: EdgeInsetsDirectional.fromSTEB(
                              0.0, 8.0, 24.0, 0.0),
                          child: badges.Badge(
                            badgeContent: Text(
                              length.toString(),
                              style: FlutterFlowTheme.of(context)
                                  .bodyMedium
                                  .override(
                                    fontFamily: 'Inter',
                                    color: Colors.white,
                                  ),
                            ),
                            showBadge: true,
                            shape: badges.BadgeShape.circle,
                            badgeColor: FlutterFlowTheme.of(context).primary,
                            elevation: 4.0,
                            padding: EdgeInsets.all(8.0),
                            position: badges.BadgePosition.topEnd(),
                            animationType: badges.BadgeAnimationType.scale,
                            toAnimate: true,
                            child: FlutterFlowIconButton(
                              borderColor: Colors.transparent,
                              borderRadius: 30.0,
                              buttonSize: 48.0,
                              icon: Icon(
                                Icons.shopping_cart_outlined,
                                color:
                                    FlutterFlowTheme.of(context).secondaryText,
                                size: 30.0,
                              ),
                              onPressed: () async {
                                await Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => CheckoutWidget(
                                      email: snapshot.data?.item1 ?? "",
                                      userId: snapshot.data?.item2 ?? "",
                                    ),
                                  ),
                                );
                              },
                            ),
                          ),
                        ),
                      ],
                      centerTitle: false,
                      elevation: 0.0,
                    ),
                    body: Column(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Expanded(
                          child: FutureBuilder<Map<String, dynamic>?>(
                              future: getProducts(),
                              builder: (context, snapshotProd) {
                                if (snapshotProd.data == null) {
                                  return const Center(
                                      child: CircularProgressIndicator());
                                }
                                List<Products> products =
                                    ((snapshotProd.data?['products'] ?? [])
                                            as List)
                                        .map((e) {
                                  return Products(
                                    id: e['id'],
                                    title: e['title'],
                                    description: e['description'],
                                    price: e['price'],
                                    createdBy: e['createdBy'],
                                    photo: e['photo'],
                                  );
                                }).toList();
                                if (products.isEmpty) {
                                  return const Text('No products found');
                                }
                                return SingleChildScrollView(
                                  child: ListView.builder(
                                    shrinkWrap: true,
                                    padding: EdgeInsets.zero,
                                    scrollDirection: Axis.vertical,
                                    physics:
                                        const NeverScrollableScrollPhysics(),
                                    itemCount: products.length,
                                    itemBuilder: (cont, columnIndex) {
                                      final product = products[columnIndex];
                                      return Padding(
                                        padding: EdgeInsetsDirectional.fromSTEB(
                                            16.0, 8.0, 16.0, 0.0),
                                        child: InkWell(
                                          splashColor: Colors.transparent,
                                          focusColor: Colors.transparent,
                                          hoverColor: Colors.transparent,
                                          highlightColor: Colors.transparent,
                                          onTap: () async {
                                            await Navigator.push(
                                              context,
                                              MaterialPageRoute(
                                                builder: (context) =>
                                                    ProductWidget(
                                                  product: product,
                                                  email: snapshot.data?.item1 ??
                                                      "",
                                                  id: snapshot.data?.item2 ??
                                                      "",
                                                ),
                                              ),
                                            );
                                            setState(() {});
                                          },
                                          child: Container(
                                            width: double.infinity,
                                            decoration: BoxDecoration(
                                              color:
                                                  FlutterFlowTheme.of(context)
                                                      .primaryBackground,
                                              borderRadius:
                                                  BorderRadius.circular(12.0),
                                            ),
                                            child: Padding(
                                              padding: EdgeInsetsDirectional
                                                  .fromSTEB(
                                                      8.0, 8.0, 12.0, 8.0),
                                              child: Row(
                                                mainAxisSize: MainAxisSize.max,
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.center,
                                                children: [
                                                  ClipRRect(
                                                    borderRadius:
                                                        BorderRadius.circular(
                                                            8.0),
                                                    child: Image.network(
                                                      product.photo,
                                                      width: 70.0,
                                                      height: 70.0,
                                                      fit: BoxFit.cover,
                                                    ),
                                                  ),
                                                  Padding(
                                                    padding:
                                                        EdgeInsetsDirectional
                                                            .fromSTEB(16.0, 0.0,
                                                                0.0, 0.0),
                                                    child: Column(
                                                      crossAxisAlignment:
                                                          CrossAxisAlignment
                                                              .start,
                                                      children: [
                                                        Text(
                                                          product.title,
                                                          style: FlutterFlowTheme
                                                                  .of(context)
                                                              .bodyLarge,
                                                        ),
                                                        Text(
                                                          "${product.price}€",
                                                          style: FlutterFlowTheme
                                                                  .of(context)
                                                              .bodySmall,
                                                        ),
                                                      ],
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          ),
                                        ),
                                      );
                                    },
                                  ),
                                );
                              }),
                        ),
                      ],
                    ),
                  ),
                );
              });
        });
  }
}
