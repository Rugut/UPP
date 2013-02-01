
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ТипыСодержимогоФайлов
	{
		ПустаяСсылка = - 1,
		Текст866 = 0,//Текст в кодировке DOS
		Текст1251 = 1,
		xml = 2,
		html = 3,
		pdf = 4,//Документ в формате PDF
		rtf = 5,//Документ в формате RTF
		tiff = 6,//Документ в формате TIFF
		jpeg = 7,//Документ в формате JPEG
		ms_word = 8,//Документ в формате Microsoft Word
		ms_excel = 9,//Документ в формате Microsoft Excel
		odf_text = 10,//Документ в формате Open Document Text
		odf_spreadsheet = 11,//Документ в формате Open Document Spreadsheet
		oxml_word = 12,//Документ в формате Open XML Word
		oxml_spreadsheet = 13,//Документ в формате Open XML Spreadsheet
		Неизвестный = 14,
	}
	public static partial class ТипыСодержимогоФайлов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Текст866 = new Guid("34427ea5-e702-a335-46be-42b098da877b");//Текст в кодировке DOS
		public static readonly Guid Текст1251 = new Guid("15844b98-f49a-3116-4fa1-8f4d87c2b717");
		public static readonly Guid xml = new Guid("7145d88b-73a2-74e7-488e-5314cad2ab82");
		public static readonly Guid html = new Guid("f6be9991-c775-bc8f-4105-5a32d46d1d6c");
		public static readonly Guid pdf = new Guid("153e2f98-22d7-451c-46af-de9cdea310f5");//Документ в формате PDF
		public static readonly Guid rtf = new Guid("8b6c2fa9-2a14-ed2d-4d7c-f2ecc0e6083c");//Документ в формате RTF
		public static readonly Guid tiff = new Guid("831a17a5-cd5b-0f2d-440a-809ad8e33a14");//Документ в формате TIFF
		public static readonly Guid jpeg = new Guid("77cfa59c-19a3-fcca-4b59-f46436701a44");//Документ в формате JPEG
		public static readonly Guid ms_word = new Guid("0bee1da5-6915-709d-4fb5-48312c240515");//Документ в формате Microsoft Word
		public static readonly Guid ms_excel = new Guid("6c406c84-8efa-faba-47cd-bb8477fce2ae");//Документ в формате Microsoft Excel
		public static readonly Guid odf_text = new Guid("3ba82395-a794-48cd-4f99-c6bd8ffe72ec");//Документ в формате Open Document Text
		public static readonly Guid odf_spreadsheet = new Guid("681867b0-e6ae-7ad2-45b4-c95f37943491");//Документ в формате Open Document Spreadsheet
		public static readonly Guid oxml_word = new Guid("24ce678c-5ba1-3e81-45cf-b1c4332da8bc");//Документ в формате Open XML Word
		public static readonly Guid oxml_spreadsheet = new Guid("cd412ab6-dd37-be6e-4121-4ce7b5cdb6f9");//Документ в формате Open XML Spreadsheet
		public static readonly Guid Неизвестный = new Guid("9edcf298-72c5-1003-4d7d-00e8acf5175c");
		public static ТипыСодержимогоФайлов Получить(this ТипыСодержимогоФайлов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыСодержимогоФайлов Получить(this ТипыСодержимогоФайлов Значение, Guid Ссылка)
		{
			if(Ссылка == Текст866)
			{
				return ТипыСодержимогоФайлов.Текст866;
			}
			else if(Ссылка == Текст1251)
			{
				return ТипыСодержимогоФайлов.Текст1251;
			}
			else if(Ссылка == xml)
			{
				return ТипыСодержимогоФайлов.xml;
			}
			else if(Ссылка == html)
			{
				return ТипыСодержимогоФайлов.html;
			}
			else if(Ссылка == pdf)
			{
				return ТипыСодержимогоФайлов.pdf;
			}
			else if(Ссылка == rtf)
			{
				return ТипыСодержимогоФайлов.rtf;
			}
			else if(Ссылка == tiff)
			{
				return ТипыСодержимогоФайлов.tiff;
			}
			else if(Ссылка == jpeg)
			{
				return ТипыСодержимогоФайлов.jpeg;
			}
			else if(Ссылка == ms_word)
			{
				return ТипыСодержимогоФайлов.ms_word;
			}
			else if(Ссылка == ms_excel)
			{
				return ТипыСодержимогоФайлов.ms_excel;
			}
			else if(Ссылка == odf_text)
			{
				return ТипыСодержимогоФайлов.odf_text;
			}
			else if(Ссылка == odf_spreadsheet)
			{
				return ТипыСодержимогоФайлов.odf_spreadsheet;
			}
			else if(Ссылка == oxml_word)
			{
				return ТипыСодержимогоФайлов.oxml_word;
			}
			else if(Ссылка == oxml_spreadsheet)
			{
				return ТипыСодержимогоФайлов.oxml_spreadsheet;
			}
			else if(Ссылка == Неизвестный)
			{
				return ТипыСодержимогоФайлов.Неизвестный;
			}
			return ТипыСодержимогоФайлов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыСодержимогоФайлов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыСодержимогоФайлов Значение)
		{
			switch (Значение)
			{
				case ТипыСодержимогоФайлов.Текст866: return Текст866;
				case ТипыСодержимогоФайлов.Текст1251: return Текст1251;
				case ТипыСодержимогоФайлов.xml: return xml;
				case ТипыСодержимогоФайлов.html: return html;
				case ТипыСодержимогоФайлов.pdf: return pdf;
				case ТипыСодержимогоФайлов.rtf: return rtf;
				case ТипыСодержимогоФайлов.tiff: return tiff;
				case ТипыСодержимогоФайлов.jpeg: return jpeg;
				case ТипыСодержимогоФайлов.ms_word: return ms_word;
				case ТипыСодержимогоФайлов.ms_excel: return ms_excel;
				case ТипыСодержимогоФайлов.odf_text: return odf_text;
				case ТипыСодержимогоФайлов.odf_spreadsheet: return odf_spreadsheet;
				case ТипыСодержимогоФайлов.oxml_word: return oxml_word;
				case ТипыСодержимогоФайлов.oxml_spreadsheet: return oxml_spreadsheet;
				case ТипыСодержимогоФайлов.Неизвестный: return Неизвестный;
			}
			return Guid.Empty;
		}
	}
}
