package com.chuangdun.jsl.web.user;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.text.MessageFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONException;
import net.sf.json.JSONObject;

import com.chuangdun.jsl.bean.Article;
import com.chuangdun.jsl.bean.RegInfo;
import com.chuangdun.jsl.dao.ArticleManagerDao;
import com.chuangdun.jsl.dao.RegInfoDao;
import com.chuangdun.jsl.dao.ToolArticleDao;
import com.chuangdun.jsl.lab.HttpUtil;
import com.chuangdun.jsl.lab.LAB;
import com.chuangdun.jsl.lab.MD5;
import com.chuangdun.jsl.lab.SYS;
import com.sun.rowset.CachedRowSetImpl;

/**
 * Servlet implementation class ArticleEdit
 */
@WebServlet("/UpdatePassWordServlet")
public class UpdatePassWordServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UpdatePassWordServlet() {

		super();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("UTF-8");
		String userName = SYS.RequestString(request, "user_name");
		String password = SYS.RequestString(request, "password");
		String newPassword = SYS.RequestString(request, "new_password");
//		System.out.println(new Pa);
		String result = HttpUtil.post(initParams(userName,
				MD5.md5_pass(password), newPassword));
		System.out.println(result);
		response.getOutputStream().write(result.getBytes("UTF-8"));
	}
	
	public static void main(String[] args) {
		ScriptEngineManager sem=new ScriptEngineManager();
		ScriptEngine se=sem.getEngineByExtension("js");
		try {
			se.eval(new FileReader("e://encrypt.js"));
			String s=(String) se.eval("eval(\"jiemi('ЍЍϝϟϢϤϘϘ')\")");
			System.out.println(s);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (ScriptException e) {
			e.printStackTrace();
		}
		
	}
	private HashMap initParams(String userName, String password,
			String newPassword) {
		
		String servlet = "/es/" + "pass_edit?";
		HashMap<String, String> params = new HashMap<String, String>();
		params.put(USERNAME, userName);
		params.put("new", MD5.md5_pass(newPassword));
		params = HttpUtil.initSignPassParams(servlet, password, params, 0, 49);
		return params;
		
	}
	

	public static final String USERNAME = "username";
	public static final String REGISTER = "reg?";
	public final static String SERVLET_KEY = "servlet";

	// private HashMap initParams(String userName, String password,String
	// code,String newPhone) {
	//
	//
	// String code = mAuthCode.getText().toString();
	// String password = mPassword.getText().toString();
	// String rePassword = mRePassword.getText().toString();
	//
	// String servlet = HttpUtil.INDEX_EXE + HttpUtil.MSG_CODE_CHECK;
	// HashMap<String, String> params = new HashMap<String, String>();
	//
	// params.put(HttpUtil.CODE, code);
	// if (HttpUtil.IS_DEBUG) {
	// Log.d("GetBackPassword", "servlet:" + mServlet);
	// }
	// if (mServlet.contains("pass")) {
	//
	// params.put(HttpUtil.USERNAME, mUserName.getText().toString());
	// params.put(HttpUtil.DO, mServlet);
	// params.put(HttpUtil.PARAM, MD5.md5_pass(password));
	//
	// } else if (mServlet.contains("pay")) {
	//
	// boolean isCheck = CheckUtil.checkGetBackPayment(mContext, code,
	// password, rePassword);
	// if (!isCheck) {
	// break;
	// }
	// params.put(HttpUtil.USERNAME, mAccount);
	// params.put(HttpUtil.DO, mServlet);
	// params.put(HttpUtil.PARAM, MD5.md5_payment(password));
	// }
	// params = HttpUtil.initSignParams(servlet, params,
	// mApplication.getTimeDifference());
	//
	// String servlet = "/exe/" + "msg_code_check?";
	// Date orderDate = new java.sql.Date(System.currentTimeMillis());
	// String orderId = MessageFormat.format("{0,date,yyyyMMddHHmmssSSS}",
	// new Object[] { orderDate }) ;
	//
	// HashMap<String, String> params = new HashMap<String, String>();
	// params.put(USERNAME, userName);
	// params.put("do","bindphone");
	// params.put("code",code);
	// System.out.println("newPhone:" + newPhone);
	// params.put("param",newPhone);
	// params = HttpUtil.initSignParams(servlet, params, 0);
	// return params;
	// }

}
