
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
	public enum “ипы—одержимого‘айлов
	{
		ѕуста€—сылка = - 1,
		“екст866 = 0,//“екст в кодировке DOS
		“екст1251 = 1,
		xml = 2,
		html = 3,
		pdf = 4,//ƒокумент в формате PDF
		rtf = 5,//ƒокумент в формате RTF
		tiff = 6,//ƒокумент в формате TIFF
		jpeg = 7,//ƒокумент в формате JPEG
		ms_word = 8,//ƒокумент в формате Microsoft Word
		ms_excel = 9,//ƒокумент в формате Microsoft Excel
		odf_text = 10,//ƒокумент в формате Open Document Text
		odf_spreadsheet = 11,//ƒокумент в формате Open Document Spreadsheet
		oxml_word = 12,//ƒокумент в формате Open XML Word
		oxml_spreadsheet = 13,//ƒокумент в формате Open XML Spreadsheet
		Ќеизвестный = 14,
	}
	public static partial class “ипы—одержимого‘айлов_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid “екст866 = new Guid("34427ea5-e702-a335-46be-42b098da877b");//“екст в кодировке DOS
		public static readonly Guid “екст1251 = new Guid("15844b98-f49a-3116-4fa1-8f4d87c2b717");
		public static readonly Guid xml = new Guid("7145d88b-73a2-74e7-488e-5314cad2ab82");
		public static readonly Guid html = new Guid("f6be9991-c775-bc8f-4105-5a32d46d1d6c");
		public static readonly Guid pdf = new Guid("153e2f98-22d7-451c-46af-de9cdea310f5");//ƒокумент в формате PDF
		public static readonly Guid rtf = new Guid("8b6c2fa9-2a14-ed2d-4d7c-f2ecc0e6083c");//ƒокумент в формате RTF
		public static readonly Guid tiff = new Guid("831a17a5-cd5b-0f2d-440a-809ad8e33a14");//ƒокумент в формате TIFF
		public static readonly Guid jpeg = new Guid("77cfa59c-19a3-fcca-4b59-f46436701a44");//ƒокумент в формате JPEG
		public static readonly Guid ms_word = new Guid("0bee1da5-6915-709d-4fb5-48312c240515");//ƒокумент в формате Microsoft Word
		public static readonly Guid ms_excel = new Guid("6c406c84-8efa-faba-47cd-bb8477fce2ae");//ƒокумент в формате Microsoft Excel
		public static readonly Guid odf_text = new Guid("3ba82395-a794-48cd-4f99-c6bd8ffe72ec");//ƒокумент в формате Open Document Text
		public static readonly Guid odf_spreadsheet = new Guid("681867b0-e6ae-7ad2-45b4-c95f37943491");//ƒокумент в формате Open Document Spreadsheet
		public static readonly Guid oxml_word = new Guid("24ce678c-5ba1-3e81-45cf-b1c4332da8bc");//ƒокумент в формате Open XML Word
		public static readonly Guid oxml_spreadsheet = new Guid("cd412ab6-dd37-be6e-4121-4ce7b5cdb6f9");//ƒокумент в формате Open XML Spreadsheet
		public static readonly Guid Ќеизвестный = new Guid("9edcf298-72c5-1003-4d7d-00e8acf5175c");
		public static “ипы—одержимого‘айлов ѕолучить(this “ипы—одержимого‘айлов «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static “ипы—одержимого‘айлов ѕолучить(this “ипы—одержимого‘айлов «начение, Guid —сылка)
		{
			if(—сылка == “екст866)
			{
				return “ипы—одержимого‘айлов.“екст866;
			}
			else if(—сылка == “екст1251)
			{
				return “ипы—одержимого‘айлов.“екст1251;
			}
			else if(—сылка == xml)
			{
				return “ипы—одержимого‘айлов.xml;
			}
			else if(—сылка == html)
			{
				return “ипы—одержимого‘айлов.html;
			}
			else if(—сылка == pdf)
			{
				return “ипы—одержимого‘айлов.pdf;
			}
			else if(—сылка == rtf)
			{
				return “ипы—одержимого‘айлов.rtf;
			}
			else if(—сылка == tiff)
			{
				return “ипы—одержимого‘айлов.tiff;
			}
			else if(—сылка == jpeg)
			{
				return “ипы—одержимого‘айлов.jpeg;
			}
			else if(—сылка == ms_word)
			{
				return “ипы—одержимого‘айлов.ms_word;
			}
			else if(—сылка == ms_excel)
			{
				return “ипы—одержимого‘айлов.ms_excel;
			}
			else if(—сылка == odf_text)
			{
				return “ипы—одержимого‘айлов.odf_text;
			}
			else if(—сылка == odf_spreadsheet)
			{
				return “ипы—одержимого‘айлов.odf_spreadsheet;
			}
			else if(—сылка == oxml_word)
			{
				return “ипы—одержимого‘айлов.oxml_word;
			}
			else if(—сылка == oxml_spreadsheet)
			{
				return “ипы—одержимого‘айлов.oxml_spreadsheet;
			}
			else if(—сылка == Ќеизвестный)
			{
				return “ипы—одержимого‘айлов.Ќеизвестный;
			}
			return “ипы—одержимого‘айлов.ѕуста€—сылка;
		}
		public static byte[]  люч(this “ипы—одержимого‘айлов «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this “ипы—одержимого‘айлов «начение)
		{
			switch («начение)
			{
				case “ипы—одержимого‘айлов.“екст866: return “екст866;
				case “ипы—одержимого‘айлов.“екст1251: return “екст1251;
				case “ипы—одержимого‘айлов.xml: return xml;
				case “ипы—одержимого‘айлов.html: return html;
				case “ипы—одержимого‘айлов.pdf: return pdf;
				case “ипы—одержимого‘айлов.rtf: return rtf;
				case “ипы—одержимого‘айлов.tiff: return tiff;
				case “ипы—одержимого‘айлов.jpeg: return jpeg;
				case “ипы—одержимого‘айлов.ms_word: return ms_word;
				case “ипы—одержимого‘айлов.ms_excel: return ms_excel;
				case “ипы—одержимого‘айлов.odf_text: return odf_text;
				case “ипы—одержимого‘айлов.odf_spreadsheet: return odf_spreadsheet;
				case “ипы—одержимого‘айлов.oxml_word: return oxml_word;
				case “ипы—одержимого‘айлов.oxml_spreadsheet: return oxml_spreadsheet;
				case “ипы—одержимого‘айлов.Ќеизвестный: return Ќеизвестный;
			}
			return Guid.Empty;
		}
	}
}
